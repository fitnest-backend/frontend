import { NextResponse } from "next/server";
import { LANDING_KEY_HEADER } from "@/lib/api/landing-key";
import { isAllowedProxyPath, proxyRateLimitKey } from "@/lib/api/proxy-allowlist";
import { clientIpFromRequest, consumeRateLimit } from "@/lib/api/proxy-rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 32 * 1024;
const FORWARD_HEADERS = ["accept", "accept-language", "content-type"] as const;

const apiBase = (
  process.env.API_BASE_URL ?? "https://api-dev.fitnest.az/api/v1"
).replace(/\/$/, "");

async function proxy(request: Request, segments: string[]) {
  if (!isAllowedProxyPath(segments)) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const method = request.method.toUpperCase();
  if (method === "OPTIONS") {
    return new NextResponse(null, { status: 204 });
  }
  if (method !== "GET" && method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  const joined = segments.join("/");
  const ip = clientIpFromRequest(request);
  const { key, limit } = proxyRateLimitKey(method, joined);
  if (!consumeRateLimit(`${ip}:${key}`, limit)) {
    return NextResponse.json(
      { message: "Too many requests. Please wait a moment." },
      {
        status: 429,
        headers: {
          "Retry-After": "60",
          "X-RateLimit-Remaining": "0",
        },
      },
    );
  }

  const incomingLength = Number(request.headers.get("content-length") ?? "0");
  if (incomingLength > MAX_BODY_BYTES) {
    return NextResponse.json({ message: "Payload too large" }, { status: 413 });
  }

  const search = new URL(request.url).search;
  const target = `${apiBase}/${joined}${search}`;
  const headers = new Headers();
  for (const name of FORWARD_HEADERS) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  headers.set("x-forwarded-for", ip);
  const landingKey = process.env.LANDING_API_KEY?.trim();
  if (landingKey) {
    headers.set(LANDING_KEY_HEADER, landingKey);
  }

  let body: ArrayBuffer | undefined;
  if (method === "POST") {
    body = await request.arrayBuffer();
    if (body.byteLength > MAX_BODY_BYTES) {
      return NextResponse.json({ message: "Payload too large" }, { status: 413 });
    }
  }

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method,
      headers,
      body,
      redirect: "manual",
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
  } catch {
    return NextResponse.json({ message: "Service unavailable" }, { status: 502 });
  }

  const responseHeaders = new Headers();
  const contentType = upstream.headers.get("content-type");
  if (contentType) responseHeaders.set("content-type", contentType);
  const retryAfter = upstream.headers.get("retry-after");
  if (retryAfter) responseHeaders.set("retry-after", retryAfter);

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

type RouteContext = { params: Promise<{ path: string[] }> };

export async function GET(request: Request, context: RouteContext) {
  const { path } = await context.params;
  return proxy(request, path ?? []);
}

export async function POST(request: Request, context: RouteContext) {
  const { path } = await context.params;
  return proxy(request, path ?? []);
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

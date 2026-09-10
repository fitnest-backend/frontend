import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 86400;

const FILE_ID = /^[1-9][0-9]{0,18}$/;
const apiBase = (
  process.env.API_BASE_URL ?? "https://api-dev.fitnest.az/api/v1"
).replace(/\/$/, "");

type RouteContext = { params: Promise<{ fileId: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { fileId } = await context.params;
  if (!FILE_ID.test(fileId)) {
    return new NextResponse(null, { status: 404 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${apiBase}/public/landing/media/${fileId}`, {
      headers: { Accept: "image/*" },
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }

  if (!upstream.ok) {
    return new NextResponse(null, { status: upstream.status === 404 ? 404 : 502 });
  }

  const contentType = upstream.headers.get("content-type") ?? "image/jpeg";
  if (!contentType.startsWith("image/")) {
    return new NextResponse(null, { status: 502 });
  }

  const headers = new Headers();
  headers.set("Content-Type", contentType);
  headers.set(
    "Cache-Control",
    "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
  );
  headers.set("X-Content-Type-Options", "nosniff");

  return new NextResponse(upstream.body, {
    status: 200,
    headers,
  });
}

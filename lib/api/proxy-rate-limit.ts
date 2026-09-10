type Bucket = { count: number; resetAt: number };

const WINDOW_MS = 60_000;
const buckets = new Map<string, Bucket>();
const MAX_KEYS = 10_000;

function prune(now: number) {
  if (buckets.size < MAX_KEYS) return;
  for (const [key, bucket] of buckets) {
    if (now >= bucket.resetAt) buckets.delete(key);
  }
  if (buckets.size >= MAX_KEYS) {
    buckets.clear();
  }
}

export function consumeRateLimit(key: string, limit: number): boolean {
  const now = Date.now();
  prune(now);
  const bucket = buckets.get(key);
  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

export function clientIpFromRequest(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim() ?? "";
    if (isValidIp(first)) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim() ?? "";
  if (isValidIp(realIp)) return realIp;
  return "unknown";
}

function isValidIp(value: string): boolean {
  if (!value || value.length > 45) return false;
  const ipv4 =
    /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
  const ipv6 = /^[0-9a-fA-F:]{2,45}$/;
  return ipv4.test(value) || ipv6.test(value);
}

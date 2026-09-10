export function isAllowedProxyPath(segments: string[]): boolean {
  if (segments.length === 0) return false;
  if (segments.some((part) => !part || part === ".." || part.includes("\\") || part.includes("\0"))) {
    return false;
  }

  const joined = segments.join("/");
  if (joined.startsWith("public/landing/")) return true;
  if (joined === "subscription-packages" || joined.startsWith("subscription-packages/")) {
    return true;
  }
  if (joined === "bmi/calculate" || joined.startsWith("bmi/calculate/")) return true;
  return false;
}

export function proxyRateLimitKey(method: string, joinedPath: string): { key: string; limit: number } {
  const path = joinedPath.toLowerCase();
  if (method === "POST" && path.startsWith("public/landing/contact-messages")) {
    return { key: "contact", limit: 8 };
  }
  if (method === "POST" && path.startsWith("bmi/calculate")) {
    return { key: "bmi", limit: 20 };
  }
  if (method === "GET" && path.startsWith("public/landing/")) {
    return { key: "landing-read", limit: 120 };
  }
  return { key: "other", limit: 60 };
}

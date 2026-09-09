import type { MetadataRoute } from "next";
import { getLandingGymsServer, getLandingStoresServer } from "@/lib/api/landing";
import { locales } from "@/lib/i18n/config";
import { createAbsoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/offers",
  "/payment-options",
  "/payment-options/abb",
  "/payment-options/coin",
  "/payment-options/bob",
  "/bmi",
  "/fit-market",
  "/fitness-centers",
  "/faq",
  "/contact",
  "/corporate",
  "/about",
  "/feedback",
  "/privacy",
  "/terms",
];

const toLocalizedPath = (path: string, locale: (typeof locales)[number]) =>
  path === "/" ? `/${locale}` : `/${locale}${path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const routeSet = new Set<string>(staticRoutes);

  try {
    const gyms = await getLandingGymsServer("az", 1, 50);
    for (const gym of gyms) {
      routeSet.add(`/fitness-centers/${gym.gymId}`);
    }
  } catch {
    // Ignore upstream errors and return static sitemap routes.
  }

  try {
    const stores = await getLandingStoresServer("az", 1, 50);
    for (const store of stores) {
      routeSet.add(`/fit-market/${store.storeId}`);
    }
  } catch {
    // Ignore upstream errors and return static sitemap routes.
  }

  const entries: MetadataRoute.Sitemap = [];
  for (const path of routeSet) {
    for (const locale of locales) {
      entries.push({
        url: createAbsoluteUrl(toLocalizedPath(path, locale)),
        lastModified,
        changeFrequency: path === "/" ? "weekly" : "daily",
        priority: path === "/" ? 1 : 0.7,
      });
    }
  }

  return entries;
}

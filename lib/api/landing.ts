import { localeHeaders, serverApiClient } from "@/lib/api";

export type LandingStats = {
  gymCount: number;
  platinumGymCount: number;
  monthlyVisitLimit: number;
  packageCount: number;
};

export type LandingGym = {
  gymId: string;
  name: string;
  coverImageUrl: string | null;
  location: string | null;
  city: string | null;
  phone: string | null;
  email: string | null;
  workHoursText: string | null;
  category: string | null;
  membership: "bronze" | "silver" | "gold" | "platinum";
  description: string | null;
};

export type LandingStore = {
  storeId: number;
  name: string;
  coverImageUrl: string | null;
  city: string | null;
  addressText: string | null;
  category: string | null;
  discounts: string[];
  isNew: boolean;
  phone: string | null;
  email: string | null;
};

export type LandingPage<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

const LANDING = "/public/landing";
const FALLBACK_GYM_IMAGE = "/images/main-page.webp";
const FALLBACK_STORE_IMAGE = "/images/first.png";

function withLocale(locale: string) {
  return { headers: localeHeaders(locale) };
}

export function gymImageSrc(url?: string | null): string {
  return url && url.trim() ? url : FALLBACK_GYM_IMAGE;
}

export function storeImageSrc(url?: string | null): string {
  return url && url.trim() ? url : FALLBACK_STORE_IMAGE;
}

export async function getLandingStatsServer(
  locale: string,
): Promise<LandingStats | null> {
  try {
    const { data } = await serverApiClient.get<LandingStats>(
      `${LANDING}/stats`,
      withLocale(locale),
    );
    return data;
  } catch {
    return null;
  }
}

export async function getLandingGymsServer(
  locale: string,
  page = 1,
  pageSize = 12,
): Promise<LandingGym[]> {
  try {
    const { data } = await serverApiClient.get<LandingPage<LandingGym>>(
      `${LANDING}/gyms`,
      { ...withLocale(locale), params: { page, page_size: pageSize } },
    );
    return data.items ?? [];
  } catch {
    return [];
  }
}

export async function getLandingGymServer(
  locale: string,
  gymId: string,
): Promise<LandingGym | null> {
  if (!/^\d+$/.test(gymId)) return null;
  try {
    const { data } = await serverApiClient.get<LandingGym>(
      `${LANDING}/gyms/${gymId}`,
      withLocale(locale),
    );
    return data;
  } catch {
    return null;
  }
}

export async function getLandingStoresServer(
  locale: string,
  page = 1,
  pageSize = 12,
): Promise<LandingStore[]> {
  try {
    const { data } = await serverApiClient.get<LandingPage<LandingStore>>(
      `${LANDING}/stores`,
      { ...withLocale(locale), params: { page, page_size: pageSize } },
    );
    return data.items ?? [];
  } catch {
    return [];
  }
}

export async function getLandingStoreServer(
  locale: string,
  storeId: string,
): Promise<LandingStore | null> {
  if (!/^\d+$/.test(storeId)) return null;
  try {
    const { data } = await serverApiClient.get<LandingStore>(
      `${LANDING}/stores/${storeId}`,
      withLocale(locale),
    );
    return data;
  } catch {
    return null;
  }
}

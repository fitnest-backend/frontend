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
const API_ORIGIN = (
  process.env.API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://api-dev.fitnest.az/api/v1"
).replace(/\/api\/v1\/?$/, "");

function withLocale(locale: string) {
  return { headers: localeHeaders(locale) };
}

function rewriteLandingMediaPath(pathname: string): string {
  const match = pathname.match(/\/api\/v1\/media\/stream\/(\d{1,32})(?:\?.*)?$/);
  if (match) {
    return `/api/v1/public/landing/media/${match[1]}`;
  }
  return pathname;
}

function resolveMediaUrl(
  url: string | null | undefined,
  fallback: string,
): string {
  const trimmed = url?.trim();
  if (!trimmed) return fallback;
  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const parsed = new URL(trimmed);
      const publicPath = rewriteLandingMediaPath(parsed.pathname);
      if (publicPath !== parsed.pathname) {
        return `${parsed.origin}${publicPath}`;
      }
    } catch {
      return trimmed;
    }
    return trimmed;
  }
  if (trimmed.startsWith("/")) {
    const publicPath = rewriteLandingMediaPath(trimmed);
    return `${API_ORIGIN}${publicPath}`;
  }
  return trimmed;
}

export function gymImageSrc(url?: string | null): string {
  return resolveMediaUrl(url, FALLBACK_GYM_IMAGE);
}

export function storeImageSrc(url?: string | null): string {
  return resolveMediaUrl(url, FALLBACK_STORE_IMAGE);
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

const emptyGymsPage = (
  page: number,
  pageSize: number,
): LandingPage<LandingGym> => ({
  items: [],
  total: 0,
  page,
  pageSize,
});

export async function getLandingGymsPageServer(
  locale: string,
  page = 1,
  pageSize = 12,
): Promise<LandingPage<LandingGym>> {
  try {
    const { data } = await serverApiClient.get<LandingPage<LandingGym>>(
      `${LANDING}/gyms`,
      { ...withLocale(locale), params: { page, page_size: pageSize } },
    );
    return {
      items: (data.items ?? []).map((gym) => ({
        ...gym,
        coverImageUrl: gymImageSrc(gym.coverImageUrl),
      })),
      total: data.total ?? data.items?.length ?? 0,
      page: data.page ?? page,
      pageSize: data.pageSize ?? pageSize,
    };
  } catch {
    return emptyGymsPage(page, pageSize);
  }
}

export async function getLandingGymsServer(
  locale: string,
  page = 1,
  pageSize = 12,
): Promise<LandingGym[]> {
  return (await getLandingGymsPageServer(locale, page, pageSize)).items;
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
    return {
      ...data,
      coverImageUrl: gymImageSrc(data.coverImageUrl),
    };
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

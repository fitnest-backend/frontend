import { localeHeaders, serverApiClient } from "@/lib/api";

export type MembershipTier = "bronze" | "silver" | "gold" | "platinum";

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
  category: string | null;
  membership: MembershipTier;
};

export type LandingGymDetail = LandingGym & {
  galleryImageUrls: string[];
  latitude: number | null;
  longitude: number | null;
  workHours: string[];
  accessMemberships: MembershipTier[];
  description: string | null;
  amenities: string[];
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
  workHoursText: string | null;
  email?: string | null;
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
  const match = pathname.match(
    /\/api\/v1\/(?:media\/stream|public\/landing\/media)\/([1-9][0-9]{0,31})(?:\?.*)?$/,
  );
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
      return fallback;
    }
    return fallback;
  }
  if (trimmed.startsWith("/api/v1/public/landing/media/")) {
    return `${API_ORIGIN}${trimmed}`;
  }
  if (trimmed.startsWith("/")) {
    const publicPath = rewriteLandingMediaPath(trimmed);
    if (publicPath.startsWith("/api/v1/public/landing/media/")) {
      return `${API_ORIGIN}${publicPath}`;
    }
    return trimmed.startsWith("/images/") || trimmed.startsWith("/icons/")
      ? trimmed
      : fallback;
  }
  return fallback;
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

function mapGymCard(gym: LandingGym): LandingGym {
  return {
    ...gym,
    coverImageUrl: gymImageSrc(gym.coverImageUrl),
  };
}

export async function getHomeGymsServer(
  locale: string,
): Promise<LandingGym[]> {
  try {
    const { data } = await serverApiClient.get<LandingPage<LandingGym>>(
      `${LANDING}/home/gyms`,
      withLocale(locale),
    );
    return (data.items ?? []).map(mapGymCard);
  } catch {
    return getLandingGymsServer(locale, 1, 3);
  }
}

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
      items: (data.items ?? []).map(mapGymCard),
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
): Promise<LandingGymDetail | null> {
  if (!/^[1-9][0-9]{0,17}$/.test(gymId)) return null;
  try {
    const { data } = await serverApiClient.get<LandingGymDetail>(
      `${LANDING}/gyms/${gymId}`,
      withLocale(locale),
    );
    const gallery = uniqueUrls([
      data.coverImageUrl,
      ...(data.galleryImageUrls ?? []),
    ]).map((url) => gymImageSrc(url));
    return {
      ...data,
      coverImageUrl: gymImageSrc(data.coverImageUrl),
      galleryImageUrls: gallery,
      workHours: data.workHours ?? [],
      accessMemberships: data.accessMemberships ?? [],
      amenities: data.amenities ?? [],
      latitude: data.latitude ?? null,
      longitude: data.longitude ?? null,
    };
  } catch {
    return null;
  }
}

const emptyStoresPage = (
  page: number,
  pageSize: number,
): LandingPage<LandingStore> => ({
  items: [],
  total: 0,
  page,
  pageSize,
});

function mapLandingStore(store: LandingStore): LandingStore {
  return {
    ...store,
    coverImageUrl: storeImageSrc(store.coverImageUrl),
    discounts: store.discounts ?? [],
  };
}

export async function getHomeStoresServer(
  locale: string,
): Promise<LandingStore[]> {
  try {
    const { data } = await serverApiClient.get<LandingPage<LandingStore>>(
      `${LANDING}/home/stores`,
      withLocale(locale),
    );
    return (data.items ?? []).map(mapLandingStore);
  } catch {
    return getLandingStoresServer(locale, 1, 3);
  }
}

export async function getLandingStoresPageServer(
  locale: string,
  page = 1,
  pageSize = 12,
): Promise<LandingPage<LandingStore>> {
  try {
    const { data } = await serverApiClient.get<LandingPage<LandingStore>>(
      `${LANDING}/stores`,
      { ...withLocale(locale), params: { page, page_size: pageSize } },
    );
    return {
      items: (data.items ?? []).map(mapLandingStore),
      total: data.total ?? data.items?.length ?? 0,
      page: data.page ?? page,
      pageSize: data.pageSize ?? pageSize,
    };
  } catch {
    return emptyStoresPage(page, pageSize);
  }
}

export async function getLandingStoresServer(
  locale: string,
  page = 1,
  pageSize = 12,
): Promise<LandingStore[]> {
  return (await getLandingStoresPageServer(locale, page, pageSize)).items;
}

export async function getLandingStoreServer(
  locale: string,
  storeId: string,
): Promise<LandingStore | null> {
  if (!/^[1-9][0-9]{0,17}$/.test(storeId)) return null;
  try {
    const { data } = await serverApiClient.get<LandingStore>(
      `${LANDING}/stores/${storeId}`,
      withLocale(locale),
    );
    return mapLandingStore(data);
  } catch {
    return null;
  }
}

function uniqueUrls(urls: Array<string | null | undefined>): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const url of urls) {
    const trimmed = url?.trim();
    if (!trimmed || seen.has(trimmed)) continue;
    seen.add(trimmed);
    result.push(trimmed);
  }
  return result;
}

import { localeHeaders, serverApiClient, apiClient } from "@/lib/api";

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

export type LandingContact = {
  email: string | null;
  phone: string | null;
};

export type LandingFaqCategory = {
  id: number;
  name: string;
};

export type LandingFaq = {
  id: number;
  question: string;
  answer: string;
  category: LandingFaqCategory | null;
};

export type LandingFaqs = {
  items: LandingFaq[];
  categories: LandingFaqCategory[];
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
const MEDIA_PATH = "/api/media/";

function withLocale(locale: string) {
  return { headers: localeHeaders(locale) };
}

function landingMediaFileId(value: string): string | null {
  const match = value.match(
    /(?:\/api\/(?:media|v1\/public\/landing\/media)|\/(?:media\/stream|public\/landing\/media))\/([1-9][0-9]{0,18})(?:[/?].*)?$/,
  );
  if (match) return match[1];
  if (/^[1-9][0-9]{0,18}$/.test(value)) return value;
  return null;
}

function resolveMediaUrl(
  url: string | null | undefined,
  fallback: string,
): string {
  const trimmed = url?.trim();
  if (!trimmed) return fallback;
  if (trimmed.startsWith("/images/") || trimmed.startsWith("/icons/")) {
    return trimmed;
  }

  let candidate = trimmed;
  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const parsed = new URL(trimmed);
      candidate = `${parsed.pathname}${parsed.search}`;
    } catch {
      return fallback;
    }
  }

  const fileId = landingMediaFileId(candidate.split("?")[0] ?? candidate);
  if (fileId) {
    return `${MEDIA_PATH}${fileId}`;
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

type ContactDetailsPayload = {
  email?: string | null;
  mobile_number?: string | null;
  mobileNumber?: string | null;
};

export async function getLandingContactServer(): Promise<LandingContact> {
  try {
    const { data } = await serverApiClient.get<ContactDetailsPayload>(
      `${LANDING}/contact`,
    );
    return {
      email: data.email?.trim() || null,
      phone: (data.mobile_number ?? data.mobileNumber)?.trim() || null,
    };
  } catch {
    return { email: null, phone: null };
  }
}

export async function submitLandingContactMessage(input: {
  name: string;
  email: string;
  topic: string;
  message: string;
}): Promise<boolean> {
  try {
    await apiClient.post(`${LANDING}/contact-messages`, {
      name: input.name.trim(),
      email: input.email.trim(),
      topic: input.topic.trim(),
      message: input.message.trim(),
    });
    return true;
  } catch {
    return false;
  }
}

type FaqCategoryPayload = {
  id?: number | string | null;
  name?: string | null;
};

type FaqItemPayload = {
  id?: number | string | null;
  question?: string | null;
  answer?: string | null;
  category?: FaqCategoryPayload | null;
};

type FaqsPayload = {
  items?: FaqItemPayload[] | null;
  categories?: FaqCategoryPayload[] | null;
};

const emptyFaqs = (): LandingFaqs => ({ items: [], categories: [] });

function mapFaqCategory(raw: FaqCategoryPayload | null | undefined): LandingFaqCategory | null {
  const id = Number(raw?.id);
  const name = raw?.name?.trim() ?? "";
  if (!Number.isFinite(id) || id <= 0 || !name) return null;
  return { id, name };
}

function mapFaqItem(raw: FaqItemPayload): LandingFaq | null {
  const id = Number(raw.id);
  const question = raw.question?.trim() ?? "";
  const answer = raw.answer?.trim() ?? "";
  if (!Number.isFinite(id) || id <= 0 || !question) return null;
  return {
    id,
    question,
    answer,
    category: mapFaqCategory(raw.category),
  };
}

export async function getLandingFaqsServer(locale: string): Promise<LandingFaqs> {
  try {
    const { data } = await serverApiClient.get<FaqsPayload>(
      `${LANDING}/faqs`,
      withLocale(locale),
    );
    return {
      items: (data.items ?? []).map(mapFaqItem).filter((item): item is LandingFaq => item !== null),
      categories: (data.categories ?? [])
        .map(mapFaqCategory)
        .filter((category): category is LandingFaqCategory => category !== null),
    };
  } catch {
    // Fall through to the authenticated FAQ list used before the public landing route exists.
  }

  try {
    const [{ data: faqPage }, { data: categoryList }] = await Promise.all([
      serverApiClient.get<FaqsPayload>(`/faqs`, {
        ...withLocale(locale),
        params: { page: 1, size: 200 },
      }),
      serverApiClient.get<FaqCategoryPayload[]>(`/faq-categories`, withLocale(locale)),
    ]);
    return {
      items: (faqPage.items ?? []).map(mapFaqItem).filter((item): item is LandingFaq => item !== null),
      categories: (Array.isArray(categoryList) ? categoryList : [])
        .map(mapFaqCategory)
        .filter((category): category is LandingFaqCategory => category !== null),
    };
  } catch {
    return emptyFaqs();
  }
}

export type LandingLegalDocument = {
  version: string | null;
  content: string | null;
  updatedAt: string | null;
};

type LegalDocumentPayload = {
  version?: string | null;
  content?: string | null;
  updated_at?: string | null;
  updatedAt?: string | null;
};

export async function getLandingLegalDocumentServer(
  locale: string,
  kind: "privacy-policy" | "terms-of-use",
): Promise<LandingLegalDocument | null> {
  const options = {
    ...withLocale(locale),
    params: { lang: locale.toUpperCase(), format: "html" },
  };

  try {
    const { data } = await serverApiClient.get<LegalDocumentPayload>(
      `${LANDING}/${kind}`,
      options,
    );
    return mapLegalDocument(data);
  } catch {
    try {
      const { data } = await serverApiClient.get<LegalDocumentPayload>(
        `/legal/${kind}`,
        options,
      );
      return mapLegalDocument(data);
    } catch {
      return null;
    }
  }
}

function mapLegalDocument(
  data: LegalDocumentPayload,
): LandingLegalDocument | null {
  const content = data.content?.trim() || null;
  if (!content) return null;
  return {
    version: data.version?.trim() || null,
    content,
    updatedAt: (data.updated_at ?? data.updatedAt)?.trim() || null,
  };
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

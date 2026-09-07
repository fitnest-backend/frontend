import { apiClient, localeHeaders, serverApiClient } from "@/lib/api";
import type { Store, StoresParams, StoresResponse } from "./types";
import { storeImageSrc, type LandingStore } from "@/lib/api/landing";

const ENDPOINT = "/public/landing/stores";

const defaultParams: StoresParams = {
  type: "ALL",
  page: 1,
  page_size: 10,
  sort_dir: "desc",
};

function mapStore(store: LandingStore): Store {
  return {
    storeId: store.storeId,
    name: store.name,
    address: store.addressText ?? "",
    city: store.city ?? "",
    logoUrl: storeImageSrc(store.coverImageUrl),
    coverImageUrl: storeImageSrc(store.coverImageUrl),
    discounts: store.discounts ?? [],
    distanceKm: null,
    social: { links: [] },
    isSaved: false,
    isNew: Boolean(store.isNew),
  };
}

function toResponse(
  items: LandingStore[],
  page: number,
  pageSize: number,
  total?: number,
): StoresResponse {
  return {
    items: items.map(mapStore),
    total: total ?? items.length,
    page,
    pageSize,
  };
}

export async function getStores(
  params: StoresParams = {},
): Promise<StoresResponse> {
  const merged = { ...defaultParams, ...params };
  const { data } = await apiClient.get<{
    items: LandingStore[];
    total: number;
    page: number;
    pageSize: number;
  }>(ENDPOINT, {
    params: { page: merged.page, page_size: merged.page_size },
  });
  return toResponse(data.items ?? [], data.page, data.pageSize, data.total);
}

export async function getStoresServer(
  params: StoresParams = {},
  locale = "az",
): Promise<StoresResponse> {
  const merged = { ...defaultParams, ...params };
  const { data } = await serverApiClient.get<{
    items: LandingStore[];
    total: number;
    page: number;
    pageSize: number;
  }>(ENDPOINT, {
    headers: localeHeaders(locale),
    params: { page: merged.page, page_size: merged.page_size },
  });
  return toResponse(data.items ?? [], data.page, data.pageSize, data.total);
}

export async function getStoresServerCached(
  params: StoresParams = {},
  locale = "az",
): Promise<StoresResponse> {
  try {
    return await getStoresServer(params, locale);
  } catch {
    return { items: [], total: 0, page: 1, pageSize: params.page_size ?? 10 };
  }
}

export async function getStoreByIdServer(
  storeId: number | string,
  locale = "az",
): Promise<Store | null> {
  if (!/^\d+$/.test(String(storeId))) return null;
  try {
    const { data } = await serverApiClient.get<LandingStore>(
      `${ENDPOINT}/${storeId}`,
      { headers: localeHeaders(locale) },
    );
    return mapStore(data);
  } catch {
    return null;
  }
}

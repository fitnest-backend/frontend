import { apiClient, serverApiClient } from "@/lib/api";
import type { StoresParams, StoresResponse } from "./types";
import { unstable_cache } from "next/cache";
import { MOCK_STORES_RESPONSE } from "./mockData";

const ENDPOINT = "/stores";

const defaultParams: StoresParams = {
  type: "ALL",
  page: 1,
  page_size: 10,
  sort_dir: "desc",
};

export async function getStores(
  params: StoresParams = {},
): Promise<StoresResponse> {
  try {
    const { data } = await apiClient.get<StoresResponse>(ENDPOINT, {
      params: { ...defaultParams, ...params },
    });
    return data;
  } catch (error) {
    console.warn("Failed to fetch stores, returning mock data", error);
    return MOCK_STORES_RESPONSE;
  }
}

export async function getStoresServer(
  params: StoresParams = {},
): Promise<StoresResponse> {
  try {
    const { data } = await serverApiClient.get<StoresResponse>(ENDPOINT, {
      params: { ...defaultParams, ...params },
    });
    return data;
  } catch (error) {
    console.warn("Failed to fetch stores on server, returning mock data", error);
    return MOCK_STORES_RESPONSE;
  }
}

const getStoresServerCachedInternal = unstable_cache(
  async (serializedParams: string) => {
    const params = JSON.parse(serializedParams) as StoresParams;
    return getStoresServer(params);
  },
  ["stores-server"],
  { revalidate: 300, tags: ["stores"] },
);

export async function getStoresServerCached(
  params: StoresParams = {},
): Promise<StoresResponse> {
  const mergedParams = { ...defaultParams, ...params };
  return getStoresServerCachedInternal(JSON.stringify(mergedParams));
}

export async function getStoreByIdServer(
  storeId: number | string,
): Promise<StoresResponse["items"][number] | null> {
  const targetId = String(storeId);
  let page = 1;
  const pageSize = 100;
  const maxPages = 20;

  while (page <= maxPages) {
    const response = await getStoresServerCached({ page, page_size: pageSize });
    const matchedStore = response.items.find(
      (store) => String(store.storeId) === targetId,
    );

    if (matchedStore) return matchedStore;

    const reachedEnd = response.items.length < pageSize;
    if (reachedEnd) break;

    page += 1;
  }

  return null;
}

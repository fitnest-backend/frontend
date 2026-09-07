import { apiClient, localeHeaders, serverApiClient } from "@/lib/api";
import { getLocale } from "@/lib/i18n/server";
import type { SubscriptionPackagesResponse } from "./types";

const ENDPOINT = "/subscription-packages";

export async function getSubscriptionPackages(): Promise<SubscriptionPackagesResponse> {
  const { data } = await apiClient.get<SubscriptionPackagesResponse>(ENDPOINT);
  return data;
}

export async function getSubscriptionPackagesServer(
  locale?: string,
): Promise<SubscriptionPackagesResponse> {
  const language = locale ?? (await getLocale());
  const { data } = await serverApiClient.get<SubscriptionPackagesResponse>(
    ENDPOINT,
    { headers: localeHeaders(language) },
  );
  return data;
}

export async function getSubscriptionPackagesServerCached(
  locale?: string,
): Promise<SubscriptionPackagesResponse> {
  return getSubscriptionPackagesServer(locale);
}

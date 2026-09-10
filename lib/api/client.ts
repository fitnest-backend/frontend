import axios from "axios";
import type { AxiosError, AxiosInstance } from "axios";
import { LANDING_KEY_HEADER } from "./landing-key";

function createClient(baseURL: string): AxiosInstance {
  const client = axios.create({
    baseURL,
    timeout: 15_000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => Promise.reject(error),
  );

  return client;
}

function attachLandingKey(client: AxiosInstance) {
  client.interceptors.request.use((config) => {
    if (typeof window !== "undefined") return config;
    const key = process.env.LANDING_API_KEY?.trim();
    if (key) {
      config.headers[LANDING_KEY_HEADER] = key;
    }
    return config;
  });
}

/** Client-side — goes through Next.js proxy to avoid CORS */
export const apiClient = createClient(
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api/proxy",
);

/** Server-side — development cluster by default (dev → api-dev) */
export const serverApiClient = createClient(
  process.env.API_BASE_URL ?? "https://api-dev.fitnest.az/api/v1",
);
attachLandingKey(serverApiClient);

export function localeHeaders(locale?: string): Record<string, string> {
  if (!locale) return {};
  return { "Accept-Language": locale.toUpperCase() };
}

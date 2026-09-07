import type { Metadata } from "next";
import FitMarketPage from "@/features/fit-market";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

export const revalidate = 300;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("fitMarket", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/fit-market",
    locale,
    keywords: seo.keywords,
  });
}

export default function LocaleFitMarketPage() {
  return <FitMarketPage />;
}

import type { Metadata } from "next";
import CorporatePage from "@/features/corporate";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("corporate", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/corporate",
    locale,
    keywords: seo.keywords,
  });
}

export default async function LocaleCorporatePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  return <CorporatePage locale={locale} />;
}

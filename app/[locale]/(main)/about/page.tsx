import type { Metadata } from "next";
import AboutPage from "@/features/about";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

export const revalidate = 120;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("about", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/about",
    locale,
    keywords: seo.keywords,
  });
}

export default function LocaleAboutPage() {
  return <AboutPage />;
}

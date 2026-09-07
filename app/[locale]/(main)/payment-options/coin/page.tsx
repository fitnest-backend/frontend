import type { Metadata } from "next";
import CoinDetailPage from "@/features/payment-options/coin";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("paymentOptionsCoin", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/payment-options/coin",
    locale,
    keywords: seo.keywords,
  });
}

export default function LocaleCoinPaymentPage() {
  return <CoinDetailPage />;
}

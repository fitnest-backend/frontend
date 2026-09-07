import type { Metadata } from "next";
import FaqPage from "@/features/faq";
import { getLandingContactServer, getLandingFaqsServer } from "@/lib/api/landing";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("faq", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/faq",
    locale,
    keywords: seo.keywords,
  });
}

export default async function LocaleFaqPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const [faqs, contact] = await Promise.all([
    getLandingFaqsServer(locale),
    getLandingContactServer(),
  ]);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {faqs.items.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <FaqPage locale={locale} faqs={faqs} email={contact.email} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsDetailPage from "@/features/news/NewsDetail";
import { newsArticles } from "@/features/news/data";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

export const revalidate = 120;

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = parseRouteLocale(localeParam);
  const article = newsArticles.find((item) => item.slug === slug);
  if (!article) {
    return createPageMetadata({
      title: getSeoContent("news", locale).title,
      description: getSeoContent("news", locale).description,
      pathname: "/news",
      locale,
    });
  }

  return createPageMetadata({
    title: article.title[locale],
    description: article.excerpt[locale],
    pathname: `/news/${article.slug}`,
    locale,
    keywords: getSeoContent("news", locale).keywords,
  });
}

export default async function LocaleNewsDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = parseRouteLocale(localeParam);
  if (!newsArticles.some((item) => item.slug === slug)) notFound();
  return <NewsDetailPage locale={locale} slug={slug} />;
}

import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import { addLocaleToPathname, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/server";
import { getNewsArticle } from "./data";
import NewsDownloadCta from "./NewsDownloadCta";

type NewsDetailPageProps = {
  locale: Locale;
  slug: string;
};

const NewsDetailPage = async ({ locale, slug }: NewsDetailPageProps) => {
  const article = getNewsArticle(slug);
  if (!article) notFound();

  const { messages } = await getMessages(locale);
  const t = messages.news;
  const newsPath = addLocaleToPathname("/news", locale);

  return (
    <div className="bg-page text-ink">
      <Container className="flex max-w-[846px] flex-col gap-3 py-10 md:py-16">
        <Link
          href={newsPath}
          className="inline-flex w-fit items-center gap-2 rounded-lg py-3 text-base font-semibold leading-6 text-turquoise dark:text-cyan"
        >
          <img
            src="/icons/news/arrow-left.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 dark:hidden"
          />
          <img
            src="/icons/news/arrow-left-dark.svg"
            alt=""
            width={24}
            height={24}
            className="hidden size-6 dark:block"
          />
          {t.backToList}
        </Link>

        <div className="flex flex-col items-center gap-10">
          <article className="flex w-full flex-col gap-7 px-4">
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3 pt-3">
                <span className="rounded-full bg-cyan/15 px-3 py-[5px] text-xs font-bold leading-[18px] text-turquoise dark:text-cyan">
                  {article.category[locale]}
                </span>
                <p className="text-sm font-semibold leading-5 text-title">
                  {article.date[locale]}
                </p>
              </div>
              <h1 className="font-manrope text-[28px] font-extrabold leading-[1.4] text-heading md:text-[30px] md:leading-[46px]">
                {article.title[locale]}
              </h1>
            </div>
            <div className="flex flex-col gap-[21px] pb-8 pt-3">
              {article.paragraphs[locale].map((paragraph) => (
                <p key={paragraph} className="text-base leading-6 text-ink">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div className="flex w-full flex-col gap-3 rounded-2xl bg-brand-navy-800 p-7 sm:flex-row sm:items-center sm:justify-between dark:bg-[#F4F7FB]">
            <div className="flex max-w-[539px] flex-col gap-3">
              <h2 className="text-2xl font-bold leading-9 text-white dark:text-[#011729]">
                {t.ctaTitle}
              </h2>
              <p className="text-base leading-6 text-desc dark:text-[#10334D]">
                {t.ctaDescription}
              </p>
            </div>
            <NewsDownloadCta buttonText={t.ctaButton} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsDetailPage;

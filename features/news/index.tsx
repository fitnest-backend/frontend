import Link from "next/link";
import Container from "@/components/common/Container";
import { addLocaleToPathname, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/server";
import { Reveal, Stagger, TiltCard } from "@/components/animation";
import { newsArticles } from "./data";

type NewsPageProps = {
  locale: Locale;
};

const NewsPage = async ({ locale }: NewsPageProps) => {
  const { messages } = await getMessages(locale);
  const t = messages.news;

  return (
    <div className="overflow-x-clip bg-page text-ink">
      <section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[57px] -top-[321px] h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
        />
        <Container className="relative py-16 md:py-20">
          <Reveal variant="blur" duration={0.8} className="flex max-w-[800px] flex-col gap-4">
            <p className="text-lg font-bold leading-7 text-[#009DA6]">{t.eyebrow}</p>
            <h1 className="font-manrope text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
              {t.title}
            </h1>
            <p className="text-base leading-6 text-title">{t.description}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-page pb-16 pt-10 md:pb-20 md:pt-12">
        <Container>
          <Stagger className="mx-auto flex w-full max-w-[846px] flex-col gap-5">
            {newsArticles.map((item) => (
              <TiltCard key={item.slug} maxTilt={4} glare={false}>
                <Link
                  href={addLocaleToPathname(`/news/${item.slug}`, locale)}
                  className="flex flex-col gap-7 rounded-[18px] border border-border-muted bg-surface px-7 py-[26px] transition-shadow hover:shadow-[0px_18px_40px_rgba(0,157,166,0.12)] sm:flex-row sm:items-center"
                >
                  <div className="flex w-full shrink-0 flex-col items-center gap-2 sm:w-[140px]">
                    <p className="text-center text-sm font-bold leading-5 text-turquoise dark:text-cyan">
                      {item.date[locale]}
                    </p>
                    <span className="rounded-full bg-cyan/15 px-[11px] py-[5px] text-[11.5px] font-extrabold tracking-[0.46px] text-turquoise dark:text-cyan">
                      {item.category[locale]}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <h2 className="text-lg font-bold leading-7 text-ink">{item.title[locale]}</h2>
                    <p className="text-base leading-6 text-title">{item.excerpt[locale]}</p>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </Stagger>
        </Container>
      </section>
    </div>
  );
};

export default NewsPage;

import Container from "@/components/common/Container";
import { getLandingStatsServer } from "@/lib/api/landing";
import { toMailtoHref } from "@/lib/constants/app-links";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/server";
import IconBox from "@/features/home/components/IconBox";
import HomeArrow from "@/features/home/components/HomeArrow";
import CorporateForm from "./CorporateForm";

type CorporatePageProps = {
  locale: Locale;
};

const BENEFIT_ICONS = [
  "/icons/about/flash.svg",
  "/icons/corporate/attract.svg",
  "/icons/home/layers.svg",
] as const;

const CorporatePage = async ({ locale }: CorporatePageProps) => {
  const [{ messages }, stats] = await Promise.all([
    getMessages(locale),
    getLandingStatsServer(locale),
  ]);
  const t = messages.corporate;
  const gymCount = stats?.gymCount && stats.gymCount > 0 ? stats.gymCount : 139;
  const gymCountLabel = new Intl.NumberFormat("en-US").format(gymCount);
  const description = t.description.replace("{count}", gymCountLabel);

  const statsItems = [
    { value: gymCountLabel, label: t.gymsLabel },
    { value: t.contractValue, label: t.contractLabel },
    { value: t.supportValue, label: t.supportLabel },
  ];

  return (
    <div className="bg-page text-ink">
      <section className="relative overflow-hidden bg-brand-navy-800 dark:bg-[#F4F7FB]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[137px] -top-[401px] h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
        />
        <Container className="relative py-16 md:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-full max-w-[488px] flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-manrope text-2xl font-extrabold leading-9 text-cyan dark:text-[#00A4A4]">
                  {t.eyebrow}
                </p>
                <h1 className="whitespace-pre-line font-manrope text-[32px] font-extrabold leading-[1.3] text-white md:text-[40px] md:leading-[60px] dark:text-[#011729]">
                  {t.title}
                </h1>
                <p className="text-base leading-6 text-title">{description}</p>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                {statsItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <p className="font-manrope text-[26px] font-extrabold leading-10 text-cyan dark:text-[#00A4A4]">
                      {item.value}
                    </p>
                    <p className="text-sm font-semibold leading-5 text-title">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <CorporateForm />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="flex flex-col items-center gap-10">
          <div className="flex max-w-[640px] flex-col items-center gap-4 text-center">
            <h2 className="font-manrope text-[30px] font-extrabold leading-[46px] text-heading">
              {t.benefitsTitle}
            </h2>
            <p className="text-xl font-medium leading-[30px] text-title">{t.benefitsSubtitle}</p>
          </div>
          <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {t.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="flex flex-col gap-2 rounded-[20px] border border-border-muted bg-surface p-8 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              >
                <IconBox className="size-[46px] rounded-[13px]">
                  <img src={BENEFIT_ICONS[index]} alt="" width={22} height={22} />
                </IconBox>
                <h3 className="pt-2.5 font-manrope text-lg font-extrabold text-ink">
                  {benefit.title}
                </h3>
                <p className="text-[15px] leading-[24.75px] text-title">{benefit.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[150px] -top-[437px] h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
        />
        <Container className="relative flex flex-col items-center gap-10">
          <h2 className="font-manrope text-[30px] font-extrabold leading-[46px] text-ink">
            {t.howTitle}
          </h2>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {t.steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center gap-6">
                <div className="flex size-16 items-center justify-center rounded-xl bg-cyan/15">
                  <span className="font-manrope text-[26px] font-extrabold leading-10 text-ink">
                    {index + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <h3 className="text-xl font-bold leading-[30px] text-ink">{step.title}</h3>
                  <p className="text-base font-medium leading-6 text-title">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-20">
        <Container>
          <div className="flex flex-col gap-6 rounded-2xl bg-brand-navy-800 p-7 sm:flex-row sm:items-center sm:justify-between dark:bg-[#F4F7FB]">
            <div className="flex flex-col gap-2.5">
              <h2 className="font-manrope text-[30px] font-extrabold leading-[46px] text-white dark:text-[#011729]">
                {t.ctaTitle}
              </h2>
              <p className="text-base leading-6 text-desc dark:text-[#10334D]">
                {t.ctaBefore}
                <a href={toMailtoHref(t.ctaEmail)} className="text-cyan dark:text-[#00A4A4]">
                  {t.ctaEmail}
                </a>
              </p>
            </div>
            <a
              href="#corporate-offer"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan px-5 text-base font-semibold leading-6 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#FF6A42] hover:shadow-[0_8px_20px_rgba(0,164,164,0.35)] active:scale-[0.98] dark:text-[#011729]"
            >
              {t.ctaButton}
              <HomeArrow className="size-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CorporatePage;

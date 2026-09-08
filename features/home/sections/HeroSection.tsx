import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import StoreBadges from "../components/StoreBadges";

const HeroSection = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.home;

  return (
    <section className="relative overflow-hidden bg-page">
      <Image
        src="/images/home/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right dark:opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-page/75 dark:block" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] px-5 py-10 md:px-10 md:py-16 lg:grid-cols-[minmax(20rem,519px)_minmax(0,1fr)] lg:items-center lg:gap-[80px] xl:gap-[206px] xl:px-20">
        <div className="flex w-full max-w-[519px] flex-col gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="relative font-sora text-[32px] font-extrabold leading-[1.06] text-heading md:text-[58px] md:leading-[61.48px]">
              <span className="block">
                {t.heroLine1Before}{" "}
                <span className="text-turquoise">{t.heroLine1Accent}</span>
              </span>
              <span className="block">{t.heroLine2}</span>
              <span className="relative block">
                {t.heroLine3}
                <span className="absolute bottom-1 left-0 h-3 w-full max-w-[469px] rounded-[3px] bg-energy" />
              </span>
            </h1>
            <p className="whitespace-pre-line text-base leading-6 text-title">
              {t.heroDescription}
            </p>
          </div>

          <div className="flex flex-col items-start gap-10">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <StoreBadges />
              <Link
                href={addLocaleToPathname("/offers", locale)}
                className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-lg bg-brand px-4 text-base font-bold text-white dark:bg-cyan dark:text-brand-navy"
              >
                {t.viewPackages}
                <img
                  src="/icons/home/arrow-right.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="brightness-0 invert dark:invert-0"
                />
              </Link>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="size-[55px] overflow-hidden rounded-sm border border-border-muted bg-surface p-1 dark:bg-page">
                  <img
                    src="/icons/home/app-qr.svg"
                    alt=""
                    width={47}
                    height={47}
                    className="size-full object-contain dark:hidden"
                  />
                  <img
                    src="/icons/home/app-qr-dark.svg"
                    alt=""
                    width={47}
                    height={47}
                    className="hidden size-full object-contain dark:block"
                  />
                </div>
                <div className="flex w-[169px] flex-col gap-0.5">
                  <p className="text-sm font-bold leading-5 text-ink">
                    {t.qrDownloadTitle}
                  </p>
                  <p className="text-sm font-medium leading-5 text-title">
                    {t.qrDownloadSubtitle}
                  </p>
                </div>
              </div>
              <div className="hidden h-[34px] w-0.5 bg-border-muted sm:block" />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium leading-5 text-title">
                  {t.packageTiers}
                </p>
                <p className="text-sm font-bold leading-5 text-ink">
                  {t.packageLevelsLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 h-[min(70vh,625px)] min-h-[20rem] min-w-0 w-full lg:mt-0">
          <Image
            src="/images/home/phone-mockup.png"
            alt="FitNest app"
            fill
            priority
            sizes="(max-width: 1023px) 90vw, 555px"
            className="object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

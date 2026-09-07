import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        className="object-cover object-right"
        style={{ objectFit: "cover", objectPosition: "right center" }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] px-5 py-10 md:px-10 md:py-12 lg:h-[calc(100dvh-6rem)] lg:grid-cols-[minmax(17rem,36%)_minmax(0,1fr)] lg:items-center lg:gap-8 lg:py-8 xl:px-20">
        <div className="flex w-full max-w-[28rem] flex-col gap-5 xl:max-w-[32rem] xl:gap-6">
          <div className="flex flex-col gap-4 xl:gap-5">
            <h1 className="font-sora text-[clamp(1.75rem,3.6vw,2.875rem)] font-extrabold leading-[1.12] text-brand">
              <span className="relative inline-block">
                {t.heroLine1Before}{" "}
                <span className="relative text-turquoise">
                  {t.heroLine1Accent}
                  <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-[3px] bg-energy md:h-2" />
                </span>
              </span>
              <span className="mt-1 block">{t.heroLine2}</span>
              <span className="mt-1 block">{t.heroLine3}</span>
            </h1>
            <p className="max-w-[28rem] text-[clamp(0.875rem,1.05vw,1rem)] leading-6 text-title">
              {t.heroDescription}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <StoreBadges />
              <Link
                href={addLocaleToPathname("/offers", locale)}
                className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-bold text-white md:h-11 md:text-base"
              >
                {t.viewPackages}
                <ArrowRight className="size-4 md:size-5" />
              </Link>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex items-center gap-3">
                <div className="size-12 overflow-hidden rounded-sm border border-border-muted bg-surface p-1">
                  <Image
                    src="/images/home/app-qr.png"
                    alt=""
                    width={48}
                    height={48}
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold leading-5 text-brand-navy">
                    {t.qrDownloadTitle}
                  </p>
                  <p className="text-sm font-medium leading-5 text-title">
                    {t.qrDownloadSubtitle}
                  </p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-border-muted sm:block" />
              <div>
                <p className="text-sm font-medium leading-5 text-title">
                  {t.packageTiers}
                </p>
                <p className="text-sm font-bold leading-5 text-brand-navy">
                  {t.packageLevelsLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 h-[min(52vh,28rem)] min-h-[16rem] min-w-0 w-full lg:mt-0 lg:h-full lg:min-h-0">
          <Image
            src="/images/home/phone-mockup.png"
            alt="FitNest app"
            fill
            priority
            sizes="(max-width: 1023px) 90vw, 55vw"
            className="object-contain object-right"
            style={{ objectFit: "contain", objectPosition: "right center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

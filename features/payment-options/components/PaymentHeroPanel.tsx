import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeading from "@/features/home/components/SectionHeading";
import { cn } from "@/lib/utils";

export type PaymentStat = {
  icon: "percent" | "calendar" | "flash";
  value: string;
  label: string;
};

type PaymentHeroPanelProps = {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  eyebrow: string;
  title: string;
  description: string;
  variant: "light" | "dark";
  stats?: PaymentStat[];
  ctaHref: string;
  ctaLabel: string;
  titleAs?: "h1" | "h2";
  priority?: boolean;
};

const STAT_ICONS: Record<Exclude<PaymentStat["icon"], "percent">, string> = {
  calendar: "/icons/payment-options/calendar.svg",
  flash: "/icons/payment-options/flash.svg",
};

const PaymentHeroPanel = ({
  imageSrc,
  imageAlt,
  imageWidth = 1672,
  imageHeight = 941,
  eyebrow,
  title,
  description,
  variant,
  stats,
  ctaHref,
  ctaLabel,
  titleAs = "h2",
  priority = false,
}: PaymentHeroPanelProps) => {
  const isDark = variant === "dark";

  return (
    <section className={cn("relative w-full", isDark ? "bg-[#011729]" : "bg-page")}>
      <div className="relative w-full overflow-hidden lg:min-h-[600px]">
        {imageSrc.endsWith(".svg") ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="block h-[220px] w-full object-cover object-[72%_center] sm:h-[300px] lg:absolute lg:inset-0 lg:h-full lg:min-h-[600px] lg:object-right"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority={priority}
            sizes="100vw"
            className="block h-[220px] w-full object-cover object-[72%_center] sm:h-[300px] lg:absolute lg:inset-0 lg:h-full lg:min-h-[600px] lg:object-right"
          />
        )}

        <Container className="relative z-10 py-8 sm:py-10 lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center lg:py-16 xl:py-20">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-[45px]">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-[71px]">
              <div className="max-w-[507px]">
                <SectionHeading
                  eyebrow={eyebrow}
                  title={title}
                  description={description}
                  light={isDark}
                  titleAs={titleAs}
                  titleClassName={isDark ? undefined : "text-brand"}
                  descriptionClassName={isDark ? undefined : "text-[#557c9f]"}
                />
              </div>
              {stats && stats.length > 0 ? (
                <div className="grid w-full max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:flex lg:flex-nowrap lg:items-start lg:gap-x-[41px]">
                  {stats.map((stat) => (
                    <div
                      key={`${stat.value}-${stat.label}`}
                      className="flex min-w-0 items-center gap-3 lg:flex-1 lg:gap-1.5"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-[13px] bg-cyan/15 sm:size-[46px]">
                        {stat.icon === "percent" ? (
                          <span className="text-base font-bold leading-6 text-turquoise sm:text-lg sm:leading-7">
                            %
                          </span>
                        ) : (
                          <img
                            src={STAT_ICONS[stat.icon]}
                            alt=""
                            width={24}
                            height={24}
                            className="size-5 sm:size-6"
                          />
                        )}
                      </div>
                      <div className="flex min-w-0 flex-col items-start gap-0.5 sm:gap-1">
                        <p
                          className={cn(
                            "text-base font-bold leading-6 sm:text-lg sm:leading-7",
                            isDark ? "text-white" : "text-brand-navy",
                          )}
                        >
                          {stat.value}
                        </p>
                        <p
                          className={cn(
                            "text-sm leading-5",
                            isDark ? "text-desc" : "text-[#557c9f]",
                          )}
                        >
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <Link
              href={ctaHref}
              className={cn(
                "inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg px-4 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#FF6A42] sm:h-auto sm:w-fit sm:py-3",
                isDark ? "bg-cyan" : "bg-brand",
              )}
            >
              {ctaLabel}
              <img
                src="/icons/payment-options/arrow-right.svg"
                alt=""
                width={24}
                height={24}
              />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PaymentHeroPanel;

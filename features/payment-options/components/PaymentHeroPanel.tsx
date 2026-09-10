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
    <section className="relative w-full">
      <div className="relative w-full min-h-[560px] overflow-hidden md:min-h-[600px]">
        {imageSrc.endsWith(".svg") ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="block h-auto w-full min-h-[560px] object-cover object-right md:min-h-[600px]"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority={priority}
            sizes="100vw"
            className="block h-auto w-full min-h-[560px] object-cover object-right md:min-h-[600px]"
          />
        )}

        <Container className="absolute inset-0 z-10 flex flex-col justify-center py-10 md:py-16 xl:py-20">
          <div className="flex flex-col gap-8 md:gap-[45px]">
            <div className="flex flex-col gap-8 md:gap-[71px]">
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
                <div className="flex w-full max-w-[720px] flex-nowrap items-start gap-2 sm:gap-4 md:gap-x-[41px]">
                  {stats.map((stat) => (
                    <div
                      key={`${stat.value}-${stat.label}`}
                      className="flex min-w-0 flex-1 items-center gap-1.5 md:flex-none"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-cyan/15 sm:size-[46px] sm:rounded-[13px]">
                        {stat.icon === "percent" ? (
                          <span className="text-sm font-bold leading-5 text-turquoise sm:text-lg sm:leading-7">
                            %
                          </span>
                        ) : (
                          <img
                            src={STAT_ICONS[stat.icon]}
                            alt=""
                            width={24}
                            height={24}
                            className="size-4 sm:size-6"
                          />
                        )}
                      </div>
                      <div className="flex min-w-0 flex-col items-start gap-0.5 sm:gap-1">
                        <p
                          className={cn(
                            "text-sm font-bold leading-5 sm:text-lg sm:leading-7",
                            isDark ? "text-white" : "text-brand-navy",
                          )}
                        >
                          {stat.value}
                        </p>
                        <p
                          className={cn(
                            "text-[11px] leading-4 sm:text-sm sm:leading-5",
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
                "inline-flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-lg px-4 py-3 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#FF6A42]",
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

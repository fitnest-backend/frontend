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
    <section
      className={cn(
        "relative overflow-hidden",
        isDark ? "bg-brand-navy" : "bg-page",
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center md:object-right"
      />
      {isDark ? (
        <>
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-brand-navy/85 via-brand-navy/50 to-transparent md:w-[58%]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[214px] -top-[308px] h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(0,219,219,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
          />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-page via-page/80 to-transparent md:w-[48%] md:from-page/55 md:via-page/20"
        />
      )}

      <Container className="relative z-10 flex min-h-[520px] flex-col justify-center py-16 md:min-h-[708px] md:py-20">
        <div className="flex max-w-[507px] flex-col gap-[45px]">
          <div className="flex flex-col gap-[71px]">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              light={isDark}
              titleAs={titleAs}
            />
            {stats && stats.length > 0 ? (
              <div className="flex flex-wrap items-center gap-x-[41px] gap-y-6">
                {stats.map((stat) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className="flex items-center gap-1.5"
                  >
                    <div className="flex size-[46px] items-center justify-center rounded-[13px] bg-cyan/15">
                      {stat.icon === "percent" ? (
                        <span className="text-lg font-bold leading-7 text-turquoise">
                          %
                        </span>
                      ) : (
                        <img
                          src={STAT_ICONS[stat.icon]}
                          alt=""
                          width={24}
                          height={24}
                        />
                      )}
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-lg font-bold leading-7 text-ink">
                        {stat.value}
                      </p>
                      <p className="text-sm leading-5 text-title">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href={ctaHref}
            className={cn(
              "inline-flex w-fit items-center gap-2 overflow-hidden rounded-lg px-4 py-3 text-base font-semibold leading-6",
              isDark
                ? "bg-cyan text-white"
                : "bg-brand text-white",
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
    </section>
  );
};

export default PaymentHeroPanel;

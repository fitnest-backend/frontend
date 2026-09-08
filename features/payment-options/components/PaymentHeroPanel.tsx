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
    <section className="relative">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
      >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />

      <Container className="relative z-10 flex h-full flex-col justify-center py-16 md:py-20">
        <div className="flex max-w-[507px] flex-col gap-[45px]">
          <div className="flex flex-col gap-[71px]">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              light={isDark}
              titleAs={titleAs}
              titleClassName={isDark ? undefined : "text-brand"}
              descriptionClassName={isDark ? undefined : "text-[#557c9f]"}
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
                      <p className="text-lg font-bold leading-7 text-brand-navy">
                        {stat.value}
                      </p>
                      <p className="text-sm leading-5 text-[#557c9f]">{stat.label}</p>
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
      </div>
    </section>
  );
};

export default PaymentHeroPanel;

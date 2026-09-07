"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import MembershipBadge, {
  type MembershipTier,
} from "../components/MembershipBadge";
import type { SubscriptionPackage } from "@/features/offers/api/types";
import { cn } from "@/lib/utils";

const DURATIONS = [1, 3, 6, 12] as const;
const TIER_ORDER: MembershipTier[] = ["bronze", "silver", "gold", "platinum"];

const fallbackPlans: Record<
  MembershipTier,
  { price: number; features: string[] }
> = {
  bronze: { price: 47, features: [] },
  silver: { price: 72, features: [] },
  gold: { price: 132, features: [] },
  platinum: { price: 205, features: [] },
};

type SubscriptionSectionProps = {
  packages: SubscriptionPackage[];
};

const normalizeTier = (name: string): MembershipTier | null => {
  const lower = name.toLowerCase();
  if (lower.includes("bronze")) return "bronze";
  if (lower.includes("silver")) return "silver";
  if (lower.includes("gold")) return "gold";
  if (lower.includes("platinum")) return "platinum";
  return null;
};

const SubscriptionSection = ({ packages }: SubscriptionSectionProps) => {
  const { t, locale } = useI18n();
  const [duration, setDuration] = useState<(typeof DURATIONS)[number]>(1);

  const plans = useMemo(() => {
    return TIER_ORDER.map((tier, index) => {
      const match = packages.find((pkg) => normalizeTier(pkg.name) === tier);
      const option =
        match?.options.find((item) => item.duration_months === duration) ??
        match?.options[0];
      const fallback = fallbackPlans[tier];
      const defaultFeatures = t.home.planFeatures[tier] ?? t.home.planFeatures.bronze;

      return {
        tier,
        name: match?.name ?? tier[0].toUpperCase() + tier.slice(1),
        price: option?.price.effective ?? fallback.price,
        features:
          option?.benefits.map((benefit) => benefit.description).slice(0, 4) ??
          defaultFeatures,
        highlighted: index === 0,
        popular: tier === "gold",
      };
    });
  }, [packages, duration, t.home.planFeatures]);

  return (
    <section id="plans" className="scroll-mt-28 bg-surface py-16 md:py-20">
      <Container className="relative flex flex-col gap-10">
        {duration === 12 ? (
          <span className="absolute right-4 top-0 hidden rounded-full bg-energy px-4 py-1 text-xs font-semibold text-white md:inline-flex">
            {t.home.bestValue}
          </span>
        ) : null}
        <SectionHeading
          eyebrow={t.home.plansEyebrow}
          title={t.home.plansHeading}
          description={t.home.plansDescription}
        />

        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-[628px] items-center justify-between gap-2 overflow-x-auto">
            {DURATIONS.map((month) => {
              const active = duration === month;
              return (
                <button
                  key={month}
                  type="button"
                  onClick={() => setDuration(month)}
                  className={cn(
                    "h-11 min-w-[88px] rounded-t-[14px] border-x-[1.5px] border-t-[1.5px] px-5 text-base font-bold leading-6",
                    active
                      ? "border-brand-navy bg-brand-navy-800 text-white"
                      : "border-border-muted bg-surface text-ink",
                  )}
                >
                  {month} {t.home.monthShort}
                </button>
              );
            })}
          </div>

          <div className="relative grid w-full grid-cols-1 gap-4 rounded-2xl border border-border-muted p-3 pt-10 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.tier}
                className={cn(
                  "relative flex flex-col gap-7 rounded-2xl p-7",
                  plan.highlighted
                    ? "border border-cyan bg-surface"
                    : "border border-border-muted bg-page",
                )}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 right-4 rounded-full bg-turquoise px-3 py-1 text-xs font-semibold text-white">
                    {t.home.mostPopular}
                  </span>
                ) : null}
                <div className="flex flex-col gap-3">
                  <MembershipBadge tier={plan.tier} />
                  <div className="flex items-center gap-2">
                    <span className="text-[36px] font-bold leading-[52px] text-heading">
                      {plan.price}
                    </span>
                    <span className="text-sm font-bold leading-5 text-title">
                      ₼ / {t.home.monthShort}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm font-medium leading-5 text-title"
                    >
                      <Check className="size-3.5 shrink-0 text-turquoise" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={addLocaleToPathname(
                    `/offers?type=${plan.tier}&month=${duration}`,
                    locale,
                  )}
                  className={cn(
                    "mt-auto inline-flex h-12 items-center justify-center rounded-lg text-base font-semibold",
                    plan.highlighted
                      ? "bg-brand text-white"
                      : "border border-border-muted bg-surface text-ink",
                  )}
                >
                  {t.home.selectPackage}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscriptionSection;

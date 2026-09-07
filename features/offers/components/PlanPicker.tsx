"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";
import MembershipBadge, {
  type MembershipTier,
} from "@/features/home/components/MembershipBadge";
import type { SubscriptionPackage } from "@/features/offers/api/types";
import { cn } from "@/lib/utils";

export const PLAN_DURATIONS = [1, 3, 6, 12] as const;
export type PlanDuration = (typeof PLAN_DURATIONS)[number];

const TIER_ORDER: MembershipTier[] = ["bronze", "silver", "gold", "platinum"];

const fallbackPlans: Record<MembershipTier, { price: number }> = {
  bronze: { price: 47 },
  silver: { price: 72 },
  gold: { price: 132 },
  platinum: { price: 205 },
};

const normalizeTier = (name: string): MembershipTier | null => {
  const lower = name.toLowerCase();
  if (lower.includes("bronze")) return "bronze";
  if (lower.includes("silver")) return "silver";
  if (lower.includes("gold")) return "gold";
  if (lower.includes("platinum")) return "platinum";
  return null;
};

const featuresFromOption = (
  option: SubscriptionPackage["options"][number] | undefined,
  fallback: string[],
): string[] => {
  const fromServices = (option?.services ?? [])
    .map((service) => service.service_name?.trim())
    .filter((name): name is string => Boolean(name));
  const fromBenefits = (option?.benefits ?? [])
    .map((benefit) => benefit.description?.trim())
    .filter((description): description is string => Boolean(description));
  const unique = [...new Set([...fromServices, ...fromBenefits])];
  return unique.length > 0 ? unique.slice(0, 4) : fallback;
};

type PlanPickerProps = {
  packages: SubscriptionPackage[];
  initialDuration?: PlanDuration;
  selectTarget?: "offers" | "activate";
};

const PlanPicker = ({
  packages,
  initialDuration = 1,
  selectTarget = "offers",
}: PlanPickerProps) => {
  const { t, locale } = useI18n();
  const [duration, setDuration] = useState<PlanDuration>(initialDuration);

  const plans = useMemo(() => {
    return TIER_ORDER.map((tier) => {
      const match = packages.find((pkg) => normalizeTier(pkg.name) === tier);
      const option =
        match?.options.find((item) => item.duration_months === duration) ??
        match?.options[0];
      const defaultFeatures =
        t.home.planFeatures[tier] ?? t.home.planFeatures.bronze;

      return {
        tier,
        price: option?.price.effective ?? fallbackPlans[tier].price,
        features: featuresFromOption(option, defaultFeatures),
        mostPopular: tier === "platinum",
        bestValue: tier === "gold",
      };
    });
  }, [packages, duration, t.home.planFeatures]);

  const hrefFor = (tier: MembershipTier) => {
    if (selectTarget === "activate") return "#activate";
    return addLocaleToPathname(`/offers?type=${tier}&month=${duration}`, locale);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full max-w-[628px] items-center justify-between gap-2 overflow-x-auto">
        {PLAN_DURATIONS.map((month) => {
          const active = duration === month;
          return (
            <button
              key={month}
              type="button"
              onClick={() => setDuration(month)}
              className={cn(
                "h-11 min-w-[88px] shrink-0 rounded-t-[14px] border-x-[1.5px] border-t-[1.5px] px-7 text-base font-bold leading-6",
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
            className="group relative flex flex-col gap-7 rounded-2xl border border-border-muted bg-page p-7 transition-all hover:border-cyan hover:bg-surface"
          >
            {plan.mostPopular ? (
              <span className="absolute -top-3 right-4 whitespace-nowrap rounded-full bg-turquoise px-[18px] py-[5px] text-xs font-semibold leading-[18px] text-white">
                {t.home.mostPopular}
              </span>
            ) : null}
            {plan.bestValue ? (
              <span className="absolute -top-3 right-4 whitespace-nowrap rounded-full bg-energy px-[18px] py-[5px] text-xs font-semibold leading-[18px] text-white">
                {t.home.bestValue}
              </span>
            ) : null}
            <div className="flex flex-col gap-3">
              <MembershipBadge tier={plan.tier} />
              <div className="flex items-center gap-2">
                <span className="text-[36px] font-bold leading-[52px] text-heading">
                  {plan.price}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-bold leading-5 text-title">
                  <span>₼</span>
                  <span>/ {t.home.monthShort}</span>
                </span>
              </div>
            </div>
            <ul className="flex flex-col gap-2.5">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-sm font-medium leading-5 text-title"
                >
                  <img
                    src="/icons/subscription/check.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="size-3.5 shrink-0"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={hrefFor(plan.tier)}
              className="mt-auto inline-flex h-12 items-center justify-center rounded-lg border border-border-muted bg-surface text-base font-semibold text-ink transition-colors group-hover:border-transparent group-hover:bg-brand group-hover:text-white"
            >
              {t.home.selectPackage}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PlanPicker;

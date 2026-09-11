import { cn } from "@/lib/utils";

export type SubscriptionTierName = "Bronze" | "Silver" | "Gold" | "Platinum";

interface TierStyle {
  name: SubscriptionTierName;
  gradient: string;
  textColor: string;
}

const TIER_STYLES: Record<SubscriptionTierName, TierStyle> = {
  Gold: {
    name: "Gold",
    gradient:
      "linear-gradient(128deg, rgba(231, 183, 95, 0) 0%, rgba(235, 190.50, 103, 0.50) 50%, #A88B5B 100%)",
    textColor: "#724E09",
  },
  Silver: {
    name: "Silver",
    gradient:
      "linear-gradient(128deg, rgba(229, 232, 236, 0) 0%, rgba(191, 200, 217, 0.70) 67%, #9BAAC7 100%)",
    textColor: "#14234B",
  },
  Platinum: {
    name: "Platinum",
    gradient:
      "linear-gradient(180deg, #9F9F9F 0%, #545454 40%, #5B5B5D 55%, #8E8E8E 100%)",
    textColor: "#FFFFFF",
  },
  Bronze: {
    name: "Bronze",
    gradient:
      "linear-gradient(128deg, rgba(216, 166, 115, 0) 0%, rgba(216, 166, 115, 0.70) 67%, #D8A673 100%)",
    textColor: "#FFFFFF",
  },
};

const parsePercent = (value: string) => {
  const match = value.match(/\d+/);
  return match ? match[0] : "";
};

const detectTier = (value: string, index: number): SubscriptionTierName => {
  const lower = value.toLowerCase();
  if (lower.includes("platinum")) return "Platinum";
  if (lower.includes("gold")) return "Gold";
  if (lower.includes("silver")) return "Silver";
  if (lower.includes("bronze")) return "Bronze";

  const percent = Number(parsePercent(value));
  if (!Number.isNaN(percent) && percent > 0) {
    if (percent >= 15) return "Platinum";
    if (percent >= 10) return "Gold";
    if (percent >= 5) return "Silver";
    return "Bronze";
  }

  const fallbackTiers: SubscriptionTierName[] = ["Gold", "Silver", "Platinum", "Bronze"];
  return fallbackTiers[index % fallbackTiers.length];
};

type DiscountBadgesProps = {
  discounts: string[];
  className?: string;
};

export const DEFAULT_TIER_PERCENT: Record<SubscriptionTierName, string> = {
  Bronze: "5",
  Silver: "5",
  Gold: "10",
  Platinum: "15",
};

const DiscountBadges = ({ discounts, className }: DiscountBadgesProps) => {
  if (!discounts || discounts.length === 0) return null;

  return (
    <div className={cn("flex shrink-0 flex-wrap items-center gap-1.5", className)}>
      {discounts.slice(0, 2).map((discount, index) => {
        const tier = detectTier(discount, index);
        const style = TIER_STYLES[tier];
        const parsed = parsePercent(discount);
        const percent = parsed || DEFAULT_TIER_PERCENT[tier];
        const label = `${tier} ${percent} %`;

        return (
          <div
            key={`${discount}-${index}`}
            data-property-1={percent || tier}
            style={{
              background: style.gradient,
            }}
            className="inline-flex shrink-0 items-center justify-center rounded-[32px] px-3 py-1.5"
          >
            <span
              style={{ color: style.textColor }}
              className="whitespace-nowrap text-xs font-bold leading-4"
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DiscountBadges;

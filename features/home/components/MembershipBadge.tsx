import { cn } from "@/lib/utils";

export type MembershipTier = "bronze" | "silver" | "gold" | "platinum";

const solidStyles: Record<MembershipTier, string> = {
  bronze:
    "bg-bronze text-white dark:bg-[linear-gradient(135deg,rgba(216,166,115,0)_0%,#B97A3C_100%)]",
  silver:
    "bg-silver text-brand dark:bg-[linear-gradient(128deg,rgba(229,232,236,0)_0%,rgba(191,200,217,0.7)_67%,#9BAAC7_100%)] dark:text-white",
  gold: "bg-gold text-gold-text dark:bg-[linear-gradient(128deg,rgba(231,183,95,0)_0%,rgba(235,191,103,0.5)_50%,#A88B5B_100%)] dark:text-white",
  platinum:
    "bg-platinum text-white dark:bg-[linear-gradient(180deg,#9F9F9F_0%,#545454_40%,#5B5B5D_55%,#8E8E8E_100%)]",
};

const gradientStyles: Record<MembershipTier, string> = {
  bronze:
    "bg-[linear-gradient(128deg,rgba(216,166,115,0)_0%,rgba(216,166,115,0.7)_67%,#D8A673_100%)] text-white",
  silver:
    "bg-[linear-gradient(128deg,rgba(229,232,236,0)_0%,rgba(191,200,217,0.7)_67%,#9BAAC7_100%)] text-white",
  gold: "bg-[linear-gradient(128deg,rgba(231,183,95,0)_0%,rgba(235,191,103,0.5)_50%,#A88B5B_100%)] text-white",
  platinum:
    "bg-[linear-gradient(180deg,#9F9F9F_0%,#545454_40%,#5B5B5D_55%,#8E8E8E_100%)] text-white",
};

export const MEMBERSHIP_LABELS: Record<MembershipTier, string> = {
  bronze: "Bronze",
  silver: "Silver",
  gold: "Gold",
  platinum: "Platinum",
};

export const MEMBERSHIP_DISCOUNTS: Record<MembershipTier, string> = {
  bronze: "5 %",
  silver: "5 %",
  gold: "10 %",
  platinum: "15 %",
};

type MembershipBadgeProps = {
  tier: MembershipTier;
  size?: "sm" | "lg";
  variant?: "solid" | "gradient";
  className?: string;
  showDiscount?: boolean;
};

const MembershipBadge = ({
  tier,
  size = "sm",
  variant = "solid",
  className,
  showDiscount = true,
}: MembershipBadgeProps) => {
  const label = showDiscount
    ? `${MEMBERSHIP_LABELS[tier]} ${MEMBERSHIP_DISCOUNTS[tier]}`
    : MEMBERSHIP_LABELS[tier];

  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center rounded-full font-bold",
        size === "lg"
          ? "h-9 min-w-[144px] px-3 text-base leading-6"
          : "h-[26px] px-3 text-xs leading-[18px]",
        variant === "gradient" ? gradientStyles[tier] : solidStyles[tier],
        className,
      )}
    >
      {label}
    </span>
  );
};

export default MembershipBadge;

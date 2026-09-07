import { cn } from "@/lib/utils";

export type MembershipTier = "bronze" | "silver" | "gold" | "platinum";

const styles: Record<MembershipTier, string> = {
  bronze: "bg-bronze text-white",
  silver: "bg-silver text-brand",
  gold: "bg-gold text-gold-text",
  platinum: "bg-platinum text-white",
};

const labels: Record<MembershipTier, string> = {
  bronze: "Bronze",
  silver: "Silver",
  gold: "Gold",
  platinum: "Platinum",
};

type MembershipBadgeProps = {
  tier: MembershipTier;
  className?: string;
};

const MembershipBadge = ({ tier, className }: MembershipBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex h-[26px] items-center justify-center rounded-full px-3 text-xs font-bold leading-[18px]",
        styles[tier],
        className,
      )}
    >
      {labels[tier]}
    </span>
  );
};

export default MembershipBadge;

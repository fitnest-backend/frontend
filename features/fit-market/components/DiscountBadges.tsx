const badgeStyles = [
  "bg-[linear-gradient(128deg,rgba(229,232,236,0)_0%,rgba(191,200,217,0.7)_67%,#9BAAC7_100%)] text-[#14234B]",
  "bg-[linear-gradient(128deg,rgba(231,183,95,0)_0%,rgba(235,191,103,0.5)_50%,#A88B5B_100%)] text-[#724E09]",
  "bg-[linear-gradient(180deg,#9F9F9F_0%,#545454_40%,#5B5B5D_55%,#8E8E8E_100%)] text-white",
];

const parsePercent = (value: string) => {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : Number.NaN;
};

export const formatDiscountLabel = (value: string) => {
  const percent = parsePercent(value);
  return Number.isNaN(percent) ? value : `${percent} %`;
};

const styleForDiscount = (value: string, index: number) => {
  const percent = parsePercent(value);
  if (percent <= 5) return badgeStyles[0];
  if (percent <= 10) return badgeStyles[1];
  if (percent >= 15) return badgeStyles[2];
  return badgeStyles[index % badgeStyles.length];
};

type DiscountBadgesProps = {
  discounts: string[];
};

const DiscountBadges = ({ discounts }: DiscountBadgesProps) => {
  if (discounts.length === 0) return null;

  return (
    <div className="flex shrink-0 items-center gap-2">
      {discounts.slice(0, 3).map((discount, index) => (
        <span
          key={`${discount}-${index}`}
          className={`inline-flex size-9 items-center justify-center rounded-full text-xs leading-4 ${styleForDiscount(discount, index)}`}
        >
          {formatDiscountLabel(discount)}
        </span>
      ))}
    </div>
  );
};

export default DiscountBadges;

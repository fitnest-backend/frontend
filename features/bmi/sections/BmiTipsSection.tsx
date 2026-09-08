"use client";

import { useI18n } from "@/lib/i18n/provider";
import BmiThemeIcon from "../components/BmiThemeIcon";

const TIP_ICONS = ["tip-activity", "tip-food"] as const;

const BmiTipsSection = () => {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {t.bmi.tips.map((tip, index) => (
        <div
          key={tip.title}
          className="flex flex-col gap-4 rounded-xl border border-border-muted bg-surface p-4"
        >
          <p className="flex items-center gap-3 text-lg font-semibold leading-7 text-ink">
            <span className="flex size-[38px] items-center justify-center rounded-full">
              <BmiThemeIcon name={TIP_ICONS[index]} className="size-[18px]" />
            </span>
            {tip.title}
          </p>
          <p className="text-base leading-6 text-desc-2">{tip.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BmiTipsSection;

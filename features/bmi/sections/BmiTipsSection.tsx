"use client";

import { useI18n } from "@/lib/i18n/provider";
import { Stagger, TiltCard } from "@/components/animation";
import BmiThemeIcon from "../components/BmiThemeIcon";

const TIP_ICONS = ["tip-activity", "tip-food"] as const;

const BmiTipsSection = () => {
  const { t } = useI18n();

  return (
    <Stagger className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      {t.bmi.tips.map((tip, index) => (
        <TiltCard key={tip.title} maxTilt={5} glare={false} className="h-full">
          <div className="flex h-full flex-col gap-4 rounded-xl border border-border-muted bg-surface p-6 transition-shadow hover:shadow-[0px_4px_16px_rgba(0,164,164,0.1)]">
            <p className="flex items-center gap-3 text-lg font-semibold leading-7 text-ink">
              <span className="flex size-[38px] items-center justify-center rounded-full bg-cyan/10">
                <BmiThemeIcon name={TIP_ICONS[index]} className="size-[18px]" />
              </span>
              {tip.title}
            </p>
            <p className="text-base leading-6 text-desc-2">{tip.description}</p>
          </div>
        </TiltCard>
      ))}
    </Stagger>
  );
};

export default BmiTipsSection;

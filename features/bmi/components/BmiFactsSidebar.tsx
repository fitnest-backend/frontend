"use client";

import { useI18n } from "@/lib/i18n/provider";
import BmiThemeIcon from "./BmiThemeIcon";

const FACT_ICONS = ["fact-check", "fact-risk", "fact-health"] as const;

const BmiFactsSidebar = () => {
  const { t } = useI18n();

  return (
    <aside className="flex flex-col gap-8 rounded-xl border border-border-muted bg-surface p-6 xl:h-[539px] xl:w-[519px]">
      <h3 className="text-[30px] font-medium leading-[46px] text-ink">
        {t.bmi.facts}
      </h3>
      <div className="flex flex-col gap-5">
        {t.bmi.infoItems.map((item, index) => (
          <div
            key={item.title}
            className="flex items-start gap-3 rounded-3xl border border-border-muted px-4 py-3 xl:h-[122px]"
          >
            <BmiThemeIcon
              name={FACT_ICONS[index]}
              className="mt-0.5 size-6 shrink-0"
            />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold leading-7 text-ink">
                {item.title}
              </p>
              <p className="text-base leading-6 text-desc-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default BmiFactsSidebar;

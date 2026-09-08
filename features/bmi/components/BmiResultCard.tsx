"use client";

import { useMemo } from "react";
import { BMI_MAX, BMI_MIN, getBmiMeta } from "../lib/bmi-utils";
import { useI18n } from "@/lib/i18n/provider";
import BmiThemeIcon from "./BmiThemeIcon";

interface BmiResultCardProps {
  bmiResult: number | null;
}

const BmiResultCard = ({ bmiResult }: BmiResultCardProps) => {
  const { t } = useI18n();
  const hasResult = bmiResult !== null;
  const bmiMeta = bmiResult === null ? null : getBmiMeta(bmiResult);
  const bmiLabels = {
    underweight: t.bmi.underweight,
    normal: t.bmi.normal,
    overweight: t.bmi.overweight,
    obesity: t.bmi.obesity,
  } as const;

  const markerLeft = useMemo(() => {
    if (bmiResult === null) return 74;
    const clamped = Math.min(BMI_MAX, Math.max(BMI_MIN, bmiResult));
    const ratio = (clamped - BMI_MIN) / (BMI_MAX - BMI_MIN);
    return Math.round(ratio * (252 - 4));
  }, [bmiResult]);

  return (
    <div className="flex h-[489px] w-full flex-col items-center justify-center rounded-2xl border border-[#CECFD2] dark:border-[#4A4E56] md:w-[284px]">
      {hasResult && bmiMeta ? (
        <div className="flex h-full flex-col items-center justify-center gap-8 px-3">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-normal leading-7 text-title">
              {t.bmi.resultLabel}
            </p>
            <p className="text-center text-[60px] font-bold leading-[1.1] text-ink">
              {bmiResult}
            </p>
            <div
              className={`inline-flex h-11 min-w-[168px] items-center justify-center rounded-4xl px-2.5 ${bmiMeta.chipClass}`}
            >
              <span className="text-sm font-bold leading-5 text-white">
                {bmiLabels[bmiMeta.key]}
              </span>
            </div>
          </div>

          <div className="w-full px-2">
            <div className="relative mx-auto h-4 w-[236px] overflow-hidden rounded-full bg-[#364153]">
              <div className="absolute inset-0 opacity-80 [background:linear-gradient(90deg,#3B82F6_0%,#3B82F6_14%,#10B981_14%,#10B981_40%,#F59E0B_40%,#F59E0B_60%,#EF4444_60%,#EF4444_100%)]" />
              <div
                className="absolute top-0 h-4 w-1 bg-white shadow-[0_0_10px_0_rgba(255,255,255,0.8)]"
                style={{ left: `${Math.min(markerLeft, 232)}px` }}
              />
            </div>

            <div className="mx-auto mt-3 grid w-[236px] grid-cols-4 gap-1 text-center text-[10px] leading-4 text-desc-2">
              <div>
                <p>{t.bmi.underweight}</p>
                <p>{"< 18.5"}</p>
              </div>
              <div>
                <p>{t.bmi.normal}</p>
                <p>18.5 - 24.9</p>
              </div>
              <div>
                <p>{t.bmi.overweight}</p>
                <p>24.9 - 29.9</p>
              </div>
              <div>
                <p>{t.bmi.obesity}</p>
                <p>{"> 30"}</p>
              </div>
            </div>
          </div>

          <p className="w-[207px] text-center text-sm leading-5 text-desc-2">
            {t.bmi.metaMessages[bmiMeta.key]}
          </p>
        </div>
      ) : (
        <div className="flex w-[235px] flex-col items-center gap-4">
          <BmiThemeIcon name="empty-chart" className="size-16" />
          <p className="text-center text-base leading-6 text-title">
            {t.bmi.noResult}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiResultCard;

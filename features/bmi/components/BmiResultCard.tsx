"use client";

import { useMemo } from "react";
import { BMI_MAX, BMI_MIN, getBmiMeta } from "../lib/bmi-utils";
import { useI18n } from "@/lib/i18n/provider";
import BmiThemeIcon from "./BmiThemeIcon";

interface BmiResultCardProps {
  bmiResult: number | null;
}

const SCALE_WIDTH = 235;
const MARKER_WIDTH = 4;

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
    if (bmiResult === null) return 0;
    const clamped = Math.min(BMI_MAX, Math.max(BMI_MIN, bmiResult));
    const ratio = (clamped - BMI_MIN) / (BMI_MAX - BMI_MIN);
    return Math.round(ratio * (SCALE_WIDTH - MARKER_WIDTH));
  }, [bmiResult]);

  return (
    <div className="flex h-[489px] w-full flex-col items-center justify-center rounded-2xl border border-[#CECFD2] dark:border-[#4A4E56] md:w-[284px]">
      {hasResult && bmiMeta ? (
        <div className="flex flex-col items-center gap-8">
          <div className="flex w-[182px] flex-col items-center gap-2">
            <p className="w-full text-lg font-normal leading-7 text-title">
              {t.bmi.resultLabel}
            </p>
            <p className="w-full text-center font-sora text-[52px] font-extrabold leading-[80px] text-ink">
              {bmiResult}
            </p>
            <div
              className={`inline-flex w-[168px] items-center justify-center rounded-[32px] p-2.5 ${bmiMeta.chipClass}`}
            >
              <span className="text-sm font-normal leading-5 text-white">
                {bmiLabels[bmiMeta.key]}
              </span>
            </div>
          </div>

          <div className="flex w-[234px] flex-col gap-[13px]">
            <div className="relative h-4 w-[235px] overflow-hidden rounded-full bg-[#364153]">
              <div className="absolute inset-0 opacity-80 [background:linear-gradient(90deg,#3B82F6_0%,#3B82F6_14%,#10B981_14%,#10B981_40%,#F59E0B_40%,#F59E0B_60%,#EF4444_60%,#EF4444_100%)]" />
              <div
                className="absolute top-0 h-4 w-1 bg-white shadow-[0_0_10px_0_rgba(255,255,255,0.8)]"
                style={{ left: `${markerLeft}px` }}
              />
            </div>
            <div className="flex h-4 items-start justify-between px-1 text-xs font-normal leading-4 text-title">
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>

          <p className="w-[207px] text-center text-sm leading-5 text-[#94979C] dark:text-[#A6A6A6]">
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

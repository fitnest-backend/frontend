"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n/provider";

const VISIT_MIN = 20;
const VISIT_MAX = 400;
const VISIT_STEP = 5;
const VISIT_DEFAULT = 180;

const PACKAGE_RATES = {
  bronze: 3.5,
  silver: 6,
  gold: 3.5,
  platinum: 3.5,
} as const;

type PackageId = keyof typeof PACKAGE_RATES;

const PartnerCalculator = () => {
  const { t, locale } = useI18n();
  const copy = t.partner;
  const [visits, setVisits] = useState(VISIT_DEFAULT);
  const [selected, setSelected] = useState<PackageId>("silver");
  const rate = PACKAGE_RATES[selected];
  const percent = ((visits - VISIT_MIN) / (VISIT_MAX - VISIT_MIN)) * 100;
  const numberLocale = locale === "az" ? "az-AZ" : locale === "ru" ? "ru-RU" : "en-US";

  const formatGrouped = (value: number, fractionDigits: 0 | 1) => {
    if (locale === "az") {
      const [whole, fraction] = value.toFixed(fractionDigits).split(".");
      const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return fractionDigits ? `${grouped}.${fraction}` : grouped;
    }
    return new Intl.NumberFormat(numberLocale, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(value);
  };

  const revenueLabel = useMemo(() => {
    return `${formatGrouped(visits * rate, 0)} ₼`;
  }, [visits, rate, locale, numberLocale]);

  const rateLabel = useMemo(() => {
    const formatted = formatGrouped(rate, rate % 1 === 0 ? 0 : 1);
    return copy.ratePerVisit.replace("{rate}", formatted);
  }, [copy.ratePerVisit, locale, numberLocale, rate]);

  const packages = [
    { id: "bronze" as const, name: copy.bronze, rate: PACKAGE_RATES.bronze },
    { id: "silver" as const, name: copy.silver, rate: PACKAGE_RATES.silver },
    { id: "gold" as const, name: copy.gold, rate: PACKAGE_RATES.gold },
    { id: "platinum" as const, name: copy.platinum, rate: PACKAGE_RATES.platinum },
  ];

  return (
    <div className="flex w-full max-w-[689px] flex-col gap-7 rounded-2xl border border-border-muted bg-page p-7">
      <h2 className="font-manrope text-xl font-extrabold leading-[30px] text-ink">
        {copy.calculatorTitle}
      </h2>

      <div className="flex flex-col gap-[59px]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold leading-6 text-[#5B6B8F]">{copy.visitsLabel}</p>
            <p className="text-base font-bold leading-6 text-turquoise">{visits}</p>
          </div>
          <div className="relative h-2 w-full">
            <div className="absolute inset-0 rounded-xl bg-ink" />
            <div
              className="absolute left-0 top-0 h-full rounded-xl bg-cyan dark:bg-[#00A4A4]"
              style={{ width: `${percent}%` }}
            />
            <input
              type="range"
              min={VISIT_MIN}
              max={VISIT_MAX}
              step={VISIT_STEP}
              value={visits}
              aria-label={copy.visitsLabel}
              onChange={(event) => setVisits(Number(event.target.value))}
              className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-cyan [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <p className="text-base font-bold leading-6 text-title">{copy.levelLabel}</p>
            <p className="text-base font-bold leading-6 text-turquoise">{rateLabel}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {packages.map((item) => {
              const isActive = selected === item.id;
              const itemRate = formatGrouped(item.rate, item.rate % 1 === 0 ? 0 : 1);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item.id)}
                  className={`flex flex-col items-center gap-0.5 rounded-xl px-1.5 py-2.5 outline outline-1 -outline-offset-1 ${
                    isActive
                      ? "bg-[#081D2E] outline-[#22262F] dark:bg-[#F4F8FA] dark:outline-[#EAEAEA]"
                      : "bg-page outline-border-muted"
                  }`}
                >
                  <span
                    className={`text-center text-sm font-bold leading-5 ${
                      isActive ? "text-white dark:text-[#011729]" : "text-ink"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`text-center text-sm font-medium leading-5 opacity-75 ${
                      isActive ? "text-[#8FB1C6] dark:text-[#557C9F]" : "text-title"
                    }`}
                  >
                    {itemRate} ₼
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-heading px-6 py-6 dark:bg-white">
          <p className="text-center text-sm font-bold leading-5 text-desc dark:text-[#10334D]">
            {copy.revenueLabel}
          </p>
          <p className="text-center font-manrope text-[40px] font-extrabold leading-[60px] text-cyan dark:text-[#00A4A4]">
            {revenueLabel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerCalculator;

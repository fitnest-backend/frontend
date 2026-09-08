"use client";

import {
  type Gender,
  normalizeAgeInput,
  normalizeDecimalInput,
} from "../lib/bmi-utils";
import { useI18n } from "@/lib/i18n/provider";
import BmiThemeIcon from "./BmiThemeIcon";

interface BmiFormProps {
  weight: string;
  height: string;
  age: string;
  gender: Gender;
  isFormValid: boolean;
  onWeightChange: (value: string) => void;
  onHeightChange: (value: string) => void;
  onAgeChange: (value: string) => void;
  onGenderChange: (gender: Gender) => void;
  onCalculate: () => void;
}

const fieldClass =
  "flex items-center gap-3 self-stretch rounded-xl border border-border-muted bg-surface p-4";

const labelClass = "text-sm font-medium leading-5 text-desc-2";

const inputClass =
  "h-6 w-full bg-transparent text-base leading-6 text-ink outline-none placeholder:text-[#94979C] dark:placeholder:text-[#A6A6A6]";

const BmiForm = ({
  weight,
  height,
  age,
  gender,
  isFormValid,
  onWeightChange,
  onHeightChange,
  onAgeChange,
  onGenderChange,
  onCalculate,
}: BmiFormProps) => {
  const { t } = useI18n();
  const selectedGender =
    "flex h-10 items-center justify-center rounded-lg bg-brand px-3 text-base font-medium leading-6 text-white dark:bg-cyan";
  const idleGender =
    "flex h-10 w-20 items-center justify-center text-base font-medium leading-6 text-ink";

  return (
    <div className="flex w-full flex-col gap-8 md:w-[370px]">
      <h2 className="text-[30px] font-medium leading-[46px] text-ink">
        {t.bmi.params}
      </h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>{t.bmi.weight}</label>
          <div className={fieldClass}>
            <BmiThemeIcon name="weight" className="size-5 shrink-0" />
            <input
              value={weight}
              onChange={(event) =>
                onWeightChange(normalizeDecimalInput(event.target.value))
              }
              placeholder={t.bmi.weightPlaceholder}
              inputMode="decimal"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>{t.bmi.height}</label>
          <div className={fieldClass}>
            <BmiThemeIcon name="height" className="size-5 shrink-0" />
            <input
              value={height}
              onChange={(event) =>
                onHeightChange(normalizeDecimalInput(event.target.value))
              }
              placeholder={t.bmi.heightPlaceholder}
              inputMode="decimal"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex w-[180px] flex-col gap-2">
            <label className={labelClass}>{t.bmi.age}</label>
            <div className={fieldClass}>
              <BmiThemeIcon name="age" className="size-5 shrink-0" />
              <input
                value={age}
                onChange={(event) =>
                  onAgeChange(normalizeAgeInput(event.target.value))
                }
                placeholder={t.bmi.agePlaceholder}
                inputMode="numeric"
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex w-[180px] flex-col gap-2">
            <label className={labelClass}>{t.bmi.gender}</label>
            <div className="flex h-14 items-center justify-center overflow-hidden rounded-xl border border-border-muted bg-surface px-1">
              <button
                type="button"
                onClick={() => onGenderChange("male")}
                className={gender === "male" ? `${selectedGender} w-[90px]` : idleGender}
              >
                {t.bmi.male}
              </button>
              <button
                type="button"
                onClick={() => onGenderChange("female")}
                className={
                  gender === "female" ? `${selectedGender} w-[90px]` : idleGender
                }
              >
                {t.bmi.female}
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onCalculate}
        disabled={!isFormValid}
        className={`h-11 w-full rounded-lg text-base font-semibold leading-6 text-white transition ${
          isFormValid
            ? "bg-brand dark:bg-cyan dark:text-brand-navy"
            : "cursor-not-allowed bg-[#CECFD2] dark:bg-[#4A4E56]"
        }`}
      >
        {t.bmi.calculate}
      </button>
    </div>
  );
};

export default BmiForm;

export type Gender = "male" | "female";

export const BMI_MIN = 15;
export const BMI_MAX = 40;

export const normalizeDecimalInput = (value: string) =>
  value.replace(/[^\d.,]/g, "").replace(",", ".");

export const normalizeAgeInput = (value: string) =>
  value.replace(/\D/g, "").slice(0, 3);

export const birthDateFromAge = (age: number) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - age);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

export const getBmiMeta = (bmi: number) => {
  if (bmi < 18.5) {
    return {
      key: "underweight" as const,
      chipClass: "bg-[#2B7FFF]",
    };
  }

  if (bmi <= 24.9) {
    return {
      key: "normal" as const,
      chipClass: "bg-[#0B7B10] dark:bg-[#35C83D]",
    };
  }

  if (bmi <= 29.9) {
    return {
      key: "overweight" as const,
      chipClass: "bg-[#F59E0B]",
    };
  }

  return {
    key: "obesity" as const,
    chipClass: "bg-[#EF4444]",
  };
};

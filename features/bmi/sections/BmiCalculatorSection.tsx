"use client";

import { useMemo, useState } from "react";
import BmiFactsSidebar from "../components/BmiFactsSidebar";
import BmiForm from "../components/BmiForm";
import BmiResultCard from "../components/BmiResultCard";
import type { Gender } from "../lib/bmi-utils";
import { birthDateFromAge } from "../lib/bmi-utils";
import { useCalculateBmi } from "../hooks/use-calculate-bmi";

const BmiCalculatorSection = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<Gender>("female");

  const { mutate, data: bmiData, isPending } = useCalculateBmi();

  const bmiResult = bmiData?.bmi ? Number(bmiData.bmi.toFixed(1)) : null;

  const isFormValid = useMemo(() => {
    const weightValue = Number(weight);
    const heightValue = Number(height);
    const ageValue = Number(age);

    if (!Number.isFinite(weightValue) || weightValue <= 0) return false;
    if (!Number.isFinite(heightValue) || heightValue <= 0) return false;
    if (!Number.isInteger(ageValue) || ageValue < 1 || ageValue > 120) {
      return false;
    }

    return true;
  }, [weight, height, age]);

  const handleCalculate = () => {
    if (!isFormValid) return;

    mutate({
      height: Number(height),
      weight: Number(weight),
      birthDate: birthDateFromAge(Number(age)),
      gender,
    });
  };

  return (
    <div className="flex flex-col items-stretch gap-6 xl:flex-row">
      <div className="flex flex-col items-center justify-between gap-8 rounded-xl border border-border-muted bg-surface p-6 md:flex-row xl:h-[539px] xl:w-[737px]">
        <BmiForm
          weight={weight}
          height={height}
          age={age}
          gender={gender}
          isFormValid={isFormValid && !isPending}
          onWeightChange={setWeight}
          onHeightChange={setHeight}
          onAgeChange={setAge}
          onGenderChange={setGender}
          onCalculate={handleCalculate}
        />
        <BmiResultCard bmiResult={bmiResult} />
      </div>

      <BmiFactsSidebar />
    </div>
  );
};

export default BmiCalculatorSection;

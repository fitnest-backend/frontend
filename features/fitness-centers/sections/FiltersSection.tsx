"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n/provider";

const FiltersSection = () => {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState("all");

  const filterCategories = [
    { id: "all", label: "HAMISI" },
    { id: "fitness", label: "FİTNES ZALI" },
    { id: "cardio", label: "CARDİO & AĞIRLIQ" },
    { id: "combat", label: "DÖYÜŞ SƏNƏTLƏRİ" },
    { id: "functional", label: "FUNCTIONAL/CROSSFİT" },
    { id: "comfort", label: "CONFORT ZAL" },
    { id: "vip", label: "VİP ZAL" },
    { id: "standard", label: "STANDART ZAL" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="w-full">
        <Input
          placeholder={t.centers.searchPlace}
          leftIcon="/icons/search.svg"
          className="h-full px-3 text-base text-neutral-50 placeholder:text-neutral-600"
          wrapperClassName="h-12 border-[#373A41] bg-[#0B1218] px-4 rounded-full"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {filterCategories.map((cat) => (
          <Button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`h-8 sm:h-10 md:h-12 px-4 sm:px-5 md:px-6.5 rounded-4xl border text-xs sm:text-sm text-[#FAFAFA] border-[#00B4CC] font-medium transition-all ${activeFilter === cat.id
                ? "bg-[#00B4CC] hover:bg-[#00B4CC]/90"
                : "bg-transparent hover:bg-[#1A2128]"
              }`}
          >
            {cat.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FiltersSection;
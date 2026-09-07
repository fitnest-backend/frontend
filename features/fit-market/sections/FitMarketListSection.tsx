"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n/provider";
import type { LandingStore } from "@/lib/api/landing";
import FitMarketCard from "../components/FitMarketCard";
import FiltersSection, { type StoresFiltersValue } from "./FiltersSection";

const PAGE_SIZE = 9;

const emptyFilters: StoresFiltersValue = {
  query: "",
  city: "",
  category: "",
  membership: "",
};

const uniqueSorted = (values: Array<string | null | undefined>) =>
  [...new Set(values.map((value) => value?.trim()).filter(Boolean) as string[])].sort(
    (a, b) => a.localeCompare(b, "az"),
  );

type FitMarketListSectionProps = {
  stores: LandingStore[];
};

const FitMarketListSection = ({ stores }: FitMarketListSectionProps) => {
  const { t } = useI18n();
  const [filters, setFilters] = useState<StoresFiltersValue>(emptyFilters);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const cities = useMemo(() => uniqueSorted(stores.map((store) => store.city)), [stores]);
  const categories = useMemo(
    () => uniqueSorted(stores.map((store) => store.category)),
    [stores],
  );
  const memberships = useMemo(
    () => uniqueSorted(stores.flatMap((store) => store.discounts ?? [])),
    [stores],
  );

  const filtered = useMemo(() => {
    const query = filters.query.trim().toLocaleLowerCase("az");
    return stores.filter((store) => {
      if (filters.city && store.city !== filters.city) return false;
      if (filters.category && store.category !== filters.category) return false;
      if (filters.membership && !(store.discounts ?? []).includes(filters.membership)) {
        return false;
      }
      if (!query) return true;
      const haystack = [
        store.name,
        store.city,
        store.addressText,
        store.category,
        store.phone,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("az");
      return haystack.includes(query);
    });
  }, [filters, stores]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full flex-col gap-5">
        <FiltersSection
          value={filters}
          cities={cities}
          categories={categories}
          memberships={memberships}
          onChange={(next) => {
            setFilters(next);
            setVisibleCount(PAGE_SIZE);
          }}
          onReset={() => {
            setFilters(emptyFilters);
            setVisibleCount(PAGE_SIZE);
          }}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((store) => (
            <FitMarketCard key={store.storeId} store={store} />
          ))}
        </div>
      </div>

      {visibleCount < filtered.length ? (
        <button
          type="button"
          onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          className="inline-flex h-12 min-w-[194px] items-center justify-center rounded-[32px] border border-border-muted bg-surface px-4 text-base font-semibold leading-6 text-ink"
        >
          {t.centers.loadMore}
        </button>
      ) : null}
    </div>
  );
};

export default FitMarketListSection;

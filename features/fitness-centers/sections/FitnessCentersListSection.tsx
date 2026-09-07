"use client";

import { useMemo, useState } from "react";
import { addLocaleToPathname } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/provider";
import type { LandingGym } from "@/lib/api/landing";
import type { MembershipTier } from "@/features/home/components/MembershipBadge";
import FitnessCenterCard from "../components/FitnessCenterCard";
import FiltersSection, { type GymsFiltersValue } from "./FiltersSection";

const PAGE_SIZE = 12;

const emptyFilters: GymsFiltersValue = {
  query: "",
  city: "",
  category: "",
  membership: "",
  audience: "",
};

const toTier = (membership: LandingGym["membership"]): MembershipTier => {
  if (
    membership === "silver" ||
    membership === "gold" ||
    membership === "platinum"
  ) {
    return membership;
  }
  return "bronze";
};

const uniqueSorted = (values: Array<string | null | undefined>) =>
  [...new Set(values.map((value) => value?.trim()).filter(Boolean) as string[])].sort(
    (a, b) => a.localeCompare(b, "az"),
  );

type FitnessCentersListSectionProps = {
  gyms: LandingGym[];
};

const FitnessCentersListSection = ({ gyms }: FitnessCentersListSectionProps) => {
  const { t, locale } = useI18n();
  const [filters, setFilters] = useState<GymsFiltersValue>(emptyFilters);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const cities = useMemo(() => uniqueSorted(gyms.map((gym) => gym.city)), [gyms]);
  const categories = useMemo(
    () => uniqueSorted(gyms.map((gym) => gym.category)),
    [gyms],
  );
  const audiences: string[] = [];

  const filtered = useMemo(() => {
    const query = filters.query.trim().toLocaleLowerCase("az");
    return gyms.filter((gym) => {
      if (filters.city && gym.city !== filters.city) return false;
      if (filters.category && gym.category !== filters.category) return false;
      if (filters.membership && gym.membership !== filters.membership) return false;
      if (
        filters.audience &&
        filters.audience !== t.centers.allOption &&
        !(gym.category ?? "").includes(filters.audience)
      ) {
        return false;
      }
      if (!query) return true;
      const haystack = [gym.name, gym.location, gym.city, gym.category]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("az");
      return haystack.includes(query);
    });
  }, [filters, gyms, t.centers.allOption]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-10">
      <FiltersSection
        value={filters}
        cities={cities}
        categories={categories}
        audiences={audiences}
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
        {visible.map((gym) => (
          <FitnessCenterCard
            key={gym.gymId}
            name={gym.name}
            location={gym.location || gym.city || "—"}
            phone={gym.phone || ""}
            image={gym.coverImageUrl || ""}
            category={gym.category || ""}
            membership={toTier(gym.membership)}
            href={addLocaleToPathname(`/fitness-centers/${gym.gymId}`, locale)}
          />
        ))}
      </div>

      {visibleCount < filtered.length ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="inline-flex h-12 min-w-[194px] items-center justify-center rounded-[32px] border border-border-muted bg-surface px-4 text-base font-semibold leading-6 text-ink"
          >
            {t.centers.loadMore}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FitnessCentersListSection;

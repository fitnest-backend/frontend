"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/provider";

type FilterSelectProps = {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

const FilterSelect = ({
  label,
  value,
  options,
  onChange,
}: FilterSelectProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  const selected = options.find((option) => option.value === value);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-12 items-center gap-3 rounded-[32px] border border-[#90A1B9] bg-surface px-4 text-base font-semibold leading-6 text-ink"
      >
        <span>{selected?.label ?? label}</span>
        <img
          src="/icons/fitstores/arrow-down.svg"
          alt=""
          width={24}
          height={24}
          className={`size-6 shrink-0 transition-transform dark:brightness-0 dark:invert ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <ul
          id={menuId}
          role="listbox"
          className="absolute z-20 mt-2 max-h-64 min-w-full overflow-auto rounded-2xl border border-border-muted bg-surface py-1 shadow-[0px_8px_24px_rgba(1,23,41,0.12)]"
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                className={`flex w-full px-4 py-2.5 text-left text-sm font-medium text-ink hover:bg-page ${
                  option.value === value ? "text-turquoise" : ""
                }`}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export type StoresFiltersValue = {
  query: string;
  city: string;
  category: string;
  membership: string;
};

type FiltersSectionProps = {
  value: StoresFiltersValue;
  cities: string[];
  categories: string[];
  memberships: string[];
  onChange: (value: StoresFiltersValue) => void;
  onReset: () => void;
};

const FiltersSection = ({
  value,
  cities,
  categories,
  memberships,
  onChange,
  onReset,
}: FiltersSectionProps) => {
  const { t } = useI18n();

  return (
    <div className="flex flex-col gap-3 border-b border-border-muted pb-3 lg:flex-row lg:items-center lg:justify-between">
      <label className="flex h-12 w-full items-center gap-3 rounded-[32px] border border-[#90A1B9] bg-surface px-4 lg:max-w-[674px]">
        <img
          src="/icons/fitstores/search.svg"
          alt=""
          width={24}
          height={24}
          className="size-6 shrink-0"
        />
        <input
          type="search"
          value={value.query}
          onChange={(event) => onChange({ ...value, query: event.target.value })}
          placeholder={t.fitMarket.searchPlace}
          className="h-full w-full bg-transparent text-base font-semibold leading-6 text-ink outline-none placeholder:text-[#A6A9A8]"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <FilterSelect
          label={t.centers.cityDistrict}
          value={value.city}
          onChange={(city) => onChange({ ...value, city })}
          options={[
            { value: "", label: t.centers.cityDistrict },
            ...cities.map((city) => ({ value: city, label: city })),
          ]}
        />
        <FilterSelect
          label={t.centers.trainingTypes}
          value={value.category}
          onChange={(category) => onChange({ ...value, category })}
          options={[
            { value: "", label: t.centers.trainingTypes },
            ...categories.map((category) => ({
              value: category,
              label: category,
            })),
          ]}
        />
        <FilterSelect
          label={t.centers.membership}
          value={value.membership}
          onChange={(membership) => onChange({ ...value, membership })}
          options={[
            { value: "", label: t.centers.membership },
            ...memberships.map((membership) => ({
              value: membership,
              label: membership,
            })),
          ]}
        />
        <button
          type="button"
          onClick={onReset}
          className="inline-flex h-12 items-center gap-3 rounded-[32px] border border-[#90A1B9] bg-surface px-4 text-base font-semibold leading-6 text-desc"
        >
          <img
            src="/icons/fitstores/reset.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 shrink-0"
          />
          {t.centers.reset}
        </button>
      </div>
    </div>
  );
};

export default FiltersSection;

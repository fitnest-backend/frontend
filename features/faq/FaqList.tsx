"use client";

import { useEffect, useMemo, useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type { LandingFaq, LandingFaqCategory } from "@/lib/api/landing";
import { useI18n } from "@/lib/i18n/provider";

type FaqListProps = {
  items: LandingFaq[];
  categories: LandingFaqCategory[];
};

const chipClass = (active: boolean) =>
  [
    "inline-flex h-12 shrink-0 items-center justify-center rounded-[32px] border px-4 text-base font-semibold leading-6 text-ink transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]",
    active ? "border-turquoise bg-cyan/15" : "border-[#90A1B9] bg-surface",
  ].join(" ");

const FaqList = ({ items, categories }: FaqListProps) => {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("az");
    return items.filter((item) => {
      if (categoryId !== null && item.category?.id !== categoryId) return false;
      if (!needle) return true;
      return `${item.question} ${item.answer}`.toLocaleLowerCase("az").includes(needle);
    });
  }, [items, query, categoryId]);

  const [open, setOpen] = useState<string | undefined>(
    items[0] ? String(items[0].id) : undefined,
  );

  useEffect(() => {
    setOpen((current) => {
      if (filtered.length === 0) return undefined;
      if (current && filtered.some((item) => String(item.id) === current)) {
        return current;
      }
      return String(filtered[0].id);
    });
  }, [filtered]);

  if (!items.length) {
    return (
      <p className="text-sm leading-5 text-title">{t.faq.empty}</p>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 border-b border-border-muted pb-3 sm:flex-row sm:flex-wrap sm:items-center">
        <label className="flex h-12 w-full items-center gap-3 rounded-[32px] border border-[#90A1B9] bg-surface px-4 sm:max-w-[302px]">
          <img
            src="/icons/faq/search.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 shrink-0"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.faq.searchPlaceholder}
            className="h-full w-full bg-transparent text-base font-semibold leading-6 text-ink outline-none placeholder:text-[#A6A9A8]"
          />
        </label>
        <button
          type="button"
          className={chipClass(categoryId === null)}
          onClick={() => setCategoryId(null)}
        >
          {t.faq.all}
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={chipClass(categoryId === category.id)}
            onClick={() => setCategoryId(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm leading-5 text-title">{t.faq.emptySearch}</p>
      ) : (
        <AccordionPrimitive.Root
          type="single"
          collapsible
          value={open}
          onValueChange={setOpen}
          className="flex flex-col gap-5"
        >
          {filtered.map((item) => (
            <AccordionPrimitive.Item
              key={item.id}
              value={String(item.id)}
              className="overflow-hidden rounded-2xl border border-border-muted bg-surface transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between gap-4 px-6 py-5 text-left outline-none">
                  <span className="text-base font-bold leading-6 text-ink">
                    {item.question}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[rgba(0,219,219,0.15)]">
                    <img
                      src="/icons/faq/add.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="size-4 group-data-[state=open]:hidden"
                    />
                    <img
                      src="/icons/faq/minus.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="hidden size-4 group-data-[state=open]:block"
                    />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="px-6 pb-[22px] text-sm leading-5 text-title whitespace-pre-line">
                  {item.answer}
                </p>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      )}
    </div>
  );
};

export default FaqList;

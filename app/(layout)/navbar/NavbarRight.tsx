"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useI18n } from "@/lib/i18n/provider";
import { useMemo } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import AzerbaijanFlag from "@/public/images/AzerbaijanFlag.svg";
import EnglishFlag from "@/public/images/EnglishFlag.svg";
import RussianFlag from "@/public/images/RussianFlag.svg";
import ThemeToggle from "./ThemeToggle";
import DownloadAppButton from "./DownloadAppButton";

const NavbarRight = () => {
  const { locale, setLocale } = useI18n();

  const locales = useMemo(
    () => ({
      az: { label: "Azərbaycan", flag: AzerbaijanFlag },
      en: { label: "English", flag: EnglishFlag },
      ru: { label: "Русский", flag: RussianFlag },
    }),
    [],
  );

  const currentLocale = locales[locale as "az" | "en" | "ru"] ?? locales.az;
  const languageOptions = (["az", "en", "ru"] as const).filter(
    (lang) => lang !== locale,
  );

  return (
    <div className="flex items-center gap-3 md:gap-5">
      <div className="flex items-center">
        <div className="flex items-center pr-2">
          <ThemeToggle />
        </div>
        <Select
          value={locale}
          onValueChange={(value) => setLocale(value as "az" | "en" | "ru")}
        >
          <SelectTrigger
            aria-label={`Select language. Current language: ${currentLocale.label}`}
            className="h-12 w-auto cursor-pointer rounded-none border-y-0 border-x border-border-muted bg-transparent px-2 shadow-none [&>svg]:hidden"
          >
            <div className="flex items-center gap-1">
              <span className="relative size-7 overflow-hidden rounded-full">
                <Image
                  src={currentLocale.flag}
                  alt={currentLocale.label}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </span>
              <span className="hidden text-base font-medium text-ink md:inline">
                {locale.toUpperCase()}
              </span>
              <ChevronDown className="size-4 text-ink" />
            </div>
          </SelectTrigger>
          <SelectContent
            align="end"
            side="bottom"
            sideOffset={8}
            className="min-w-[160px] rounded-xl border border-border-muted bg-surface text-ink shadow-lg"
          >
            <SelectGroup>
              {languageOptions.map((lang) => {
                const meta = locales[lang];
                return (
                  <SelectItem
                    key={lang}
                    value={lang}
                    className="rounded-lg py-2 text-ink focus:bg-page focus:text-ink"
                  >
                    <div className="flex items-center gap-3">
                      <span className="relative size-6 overflow-hidden rounded-full">
                        <Image
                          src={meta.flag}
                          alt={meta.label}
                          fill
                          sizes="24px"
                          className="object-cover"
                        />
                      </span>
                      <span className="text-sm">{meta.label}</span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <DownloadAppButton />
    </div>
  );
};

export default NavbarRight;

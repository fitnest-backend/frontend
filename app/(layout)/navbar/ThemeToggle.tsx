"use client";

import Image from "next/image";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();

  return (
    <button
      type="button"
      aria-label={t.nav.toggleTheme}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-xl border border-border-muted text-turquoise transition-colors hover:bg-page",
        className,
      )}
    >
      <Image
        src="/icons/home/moon.png"
        alt=""
        width={24}
        height={24}
        className="size-6 dark:hidden"
      />
      <Sun className="hidden size-6 dark:block" strokeWidth={1.75} />
    </button>
  );
};

export default ThemeToggle;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname, stripLocaleFromPathname } from "@/lib/i18n/config";

const Navication = () => {
  const pathname = usePathname();
  const normalizedPathname = stripLocaleFromPathname(pathname || "/");
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const homePath = addLocaleToPathname("/", locale);

  const navLinks = [
    { name: t.nav.howItWorks, href: `${homePath}#how-it-works` },
    { name: t.nav.halls, href: addLocaleToPathname("/fitness-centers", locale) },
    { name: t.nav.plans, href: `${homePath}#plans` },
  ];

  return (
    <nav className="hidden items-center gap-6 xl:flex">
      {navLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-lg font-medium leading-7 text-ink transition-colors hover:text-turquoise ${
            normalizedPathname === item.href ? "text-turquoise" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 text-lg font-medium leading-7 text-ink hover:text-turquoise"
        >
          {t.nav.business}
          <ChevronDown className="size-4" />
        </button>
        {open ? (
          <div className="absolute top-full right-0 z-20 mt-3 min-w-[200px] rounded-xl border border-border-muted bg-surface p-2 shadow-lg">
            <Link
              href={`${homePath}#business`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-page"
            >
              {t.nav.corporate}
            </Link>
            <Link
              href={`${homePath}#business`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-page"
            >
              {t.nav.becomePartner}
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navication;

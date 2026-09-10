"use client";
import { ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname, stripLocaleFromPathname } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const normalizedPathname = stripLocaleFromPathname(pathname || "/");
  const { t, locale } = useI18n();
  const homePath = addLocaleToPathname("/", locale);
  const navLinks = [
    { name: t.nav.howItWorks, href: `${homePath}#how-it-works` },
    { name: t.nav.halls, href: addLocaleToPathname("/fitness-centers", locale) },
    { name: t.nav.plans, href: addLocaleToPathname("/offers", locale) },
    { name: t.nav.corporate, href: addLocaleToPathname("/corporate", locale) },
    { name: t.nav.becomePartner, href: addLocaleToPathname("/partner", locale) },
    { name: t.nav.bmi, href: addLocaleToPathname("/bmi", locale) },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => {
    const path = stripLocaleFromPathname(href).split("#")[0] || "/";
    if (href.includes("#how-it-works")) {
      return normalizedPathname === "/" && hash === "#how-it-works";
    }
    return (
      normalizedPathname === path || normalizedPathname.startsWith(`${path}/`)
    );
  };

  return (
    <div className="relative z-20 w-auto xl:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative z-20 flex w-auto cursor-pointer justify-end"
        aria-label={open ? "Close menu" : "Menu"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!open ? (
            <motion.div
              key="menu"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="text-heading" />
            </motion.div>
          ) : (
            <motion.div
              key="close"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="text-heading" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.button
            key="menu-backdrop"
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1] bg-brand-navy/30"
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute -top-8 -right-3 z-10 min-h-screen w-screen bg-surface pt-16 shadow-md xs:w-[320px]"
          >
            <div className="flex h-full flex-col p-5 text-ink">
              <ul>
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between border-b border-border-muted px-2 py-4 text-base font-medium leading-6 transition-colors",
                        isActive(item.href) ? "text-turquoise" : "text-ink",
                      )}
                    >
                      {item.name}
                      <ChevronRight />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#download-app"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-cyan px-4 text-base font-semibold text-white transition-colors hover:bg-[#FF6A42]"
              >
                {t.nav.downloadApp}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;

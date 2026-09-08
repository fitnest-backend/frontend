"use client";

import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavbarRight from "./NavbarRight";
import Navication from "./Navication";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky inset-x-0 top-0 z-50 border-b border-border-muted bg-surface transition-shadow duration-300",
        isScrolled && "shadow-sm",
      )}
    >
      <header className="mx-auto flex w-full items-center justify-between gap-3 px-5 py-5 md:px-10 md:py-6 xl:px-20">
        <Logo />
        <div className="flex min-w-0 items-center gap-3 md:gap-10 xl:gap-[95px]">
          <Navication />
          <NavbarRight />
          <HamburgerMenu />
        </div>
      </header>
    </div>
  );
};

export default Navbar;

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
        "sticky inset-x-0 top-0 z-50 border-b border-border-muted bg-surface transition-[box-shadow,background-color] duration-300",
        isScrolled && "bg-surface/90 shadow-sm backdrop-blur-md",
      )}
    >
      <header className="mx-auto grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 px-5 py-5 md:px-10 md:py-6 xl:px-20">
        <div className="justify-self-start">
          <Logo />
        </div>
        <Navication />
        <div className="flex items-center justify-end gap-3 md:gap-5">
          <NavbarRight />
          <HamburgerMenu />
        </div>
      </header>
    </div>
  );
};

export default Navbar;

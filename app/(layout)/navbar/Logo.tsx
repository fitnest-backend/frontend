"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";

const Logo = () => {
  const { locale } = useI18n();

  return (
    <div className="relative h-8 w-[84px] md:h-[38px] md:w-[110px]">
      <Link href={addLocaleToPathname("/", locale)} className="block h-full w-full">
        <img
          src="/icons/home/logo.svg"
          alt="FitNest"
          width={110}
          height={38}
          className="h-full w-full object-contain dark:hidden"
        />
        <img
          src="/icons/home/logo-white.svg"
          alt="FitNest"
          width={110}
          height={38}
          className="hidden h-full w-full object-contain dark:block"
        />
      </Link>
    </div>
  );
};

export default Logo;

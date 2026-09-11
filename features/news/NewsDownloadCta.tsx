"use client";

import { useState } from "react";
import DownloadAppModal from "@/components/common/DownloadAppModal";

interface NewsDownloadCtaProps {
  buttonText: string;
}

export default function NewsDownloadCta({ buttonText }: NewsDownloadCtaProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-cyan px-4 text-base font-semibold leading-6 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#FF6A42] hover:shadow-[0_8px_20px_rgba(0,164,164,0.35)] active:scale-[0.98] dark:text-[#011729]"
      >
        {buttonText}
      </button>
      <DownloadAppModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";

const DownloadAppButton = () => {
  const { t } = useI18n();

  return (
    <Button
      asChild
      className="hidden h-11 rounded-lg bg-cyan px-4 text-base font-semibold text-white hover:bg-[#FF6A42] md:inline-flex"
    >
      <a href="#download-app">
        <Download className="size-6" />
        {t.nav.downloadApp}
      </a>
    </Button>
  );
};

export default DownloadAppButton;

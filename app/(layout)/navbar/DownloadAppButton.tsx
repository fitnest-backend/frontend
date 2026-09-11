import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";
import DownloadAppModal from "@/components/common/DownloadAppModal";

const DownloadAppButton = () => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-11 cursor-pointer rounded-lg bg-cyan px-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF6A42] hover:shadow-[0_8px_20px_rgba(0,164,164,0.35)] active:scale-[0.98] md:inline-flex"
      >
        <Download className="size-6" />
        {t.nav.downloadApp}
      </Button>
      <DownloadAppModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default DownloadAppButton;

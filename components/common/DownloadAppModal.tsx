"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants/app-links";

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadAppModal = ({ isOpen, onClose }: DownloadAppModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[760px] overflow-hidden rounded-xl border border-[#EAEAEA] bg-[#F4F8FA] p-6 shadow-2xl transition-all sm:p-7 md:p-8 dark:border-[#22262F] dark:bg-[#081D2E]">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Bağla"
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-lg text-[#011729] transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
        >
          <X className="size-5" />
        </button>

        <div className="flex flex-col items-center justify-center gap-6 pt-3 sm:flex-row sm:gap-10 sm:pt-2">
          {/* Store Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play"
              className="group inline-flex transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/icons/home/google-play.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-[135px] rounded-[5px] border border-[#A6A6A6] bg-black object-contain"
              />
            </a>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="App Store"
              className="group inline-flex transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/icons/home/app-store.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-[120px] rounded-[7px] border border-[#A6A6A6] bg-[#0C0D10] object-contain"
              />
            </a>
          </div>

          {/* Divider */}
          <div className="hidden h-[34px] w-0.5 bg-[#F0F0F1] sm:block dark:bg-[#22262F]" />

          {/* QR Code Section */}
          <div className="flex items-center gap-3">
            <div className="relative size-[55px] shrink-0 overflow-hidden rounded-xs bg-white p-1 dark:bg-[#011729]">
              <img
                src="/icons/home/app-qr.svg"
                alt=""
                width={47}
                height={47}
                className="size-full object-contain dark:hidden"
              />
              <img
                src="/icons/home/app-qr-dark.svg"
                alt=""
                width={47}
                height={47}
                className="hidden size-full object-contain dark:block"
              />
            </div>

            <div className="flex w-[169px] flex-col justify-start gap-0.5 text-left">
              <span
                id="download-modal-title"
                className="text-sm font-bold leading-5 text-[#011729] dark:text-white"
              >
                QR ilə endir
              </span>
              <span className="text-sm font-medium leading-5 text-[#557C9F] dark:text-[#8FB1C6]">
                Kameranı tut, tətbiqə keç
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppModal;

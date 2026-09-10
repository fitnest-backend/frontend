"use client";

import Link from "next/link";
import { addLocaleToPathname } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/provider";
import RemoteImage from "@/components/common/RemoteImage";
import { storeImageSrc, type LandingStore } from "@/lib/api/landing";
import DiscountBadges from "./DiscountBadges";
import TiltCard from "@/features/home/components/TiltCard";

type FitMarketCardProps = {
  store: LandingStore;
};

const FitMarketCard = ({ store }: FitMarketCardProps) => {
  const { t, locale } = useI18n();
  const address = [store.city, store.addressText].filter(Boolean).join(", ");
  const description = store.category || t.fitMarket.detailsDescription;
  const workHours = store.workHoursText
    ? `${t.fitMarket.workHours}: ${store.workHoursText}`
    : null;

  return (
    <TiltCard intensity={8}>
    <Link
      href={addLocaleToPathname(`/fit-market/${store.storeId}`, locale)}
      className="group flex flex-col gap-6 rounded-[32px] border border-border-muted bg-surface p-5 transition-all hover:border-cyan hover:bg-page hover:shadow-[0px_24px_50px_rgba(0,157,166,0.16)]"
    >
      <div className="relative h-[250px] overflow-hidden rounded-3xl">
        <RemoteImage
          src={storeImageSrc(store.coverImageUrl)}
          fallback="/images/first.png"
          alt={store.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 410px"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[168px] rounded-b-3xl bg-[linear-gradient(180deg,rgba(24,23,26,0)_0%,black_100%)]" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold leading-[30px] text-turquoise">
              {store.name}
            </h3>
            <DiscountBadges discounts={store.discounts ?? []} />
          </div>
          <p className="text-xs font-medium leading-[18px] text-ink">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm font-medium leading-5 text-title">
          {address ? (
            <span className="inline-flex min-w-0 items-center gap-2">
              <img
                src="/icons/fitstores/map-pin.svg"
                alt=""
                width={20}
                height={20}
                className="size-5 shrink-0"
              />
              <span className="line-clamp-1">{address}</span>
            </span>
          ) : null}
          {store.phone ? (
            <span className="inline-flex items-center gap-2">
              <img
                src="/icons/fitstores/call.svg"
                alt=""
                width={18}
                height={18}
                className="size-[18px] shrink-0"
              />
              {store.phone}
            </span>
          ) : null}
          {workHours ? (
            <span className="inline-flex items-center gap-2">
              <img
                src="/icons/fitstores/clock.svg"
                alt=""
                width={18}
                height={18}
                className="size-[18px] shrink-0"
              />
              {workHours}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
    </TiltCard>
  );
};

export default FitMarketCard;

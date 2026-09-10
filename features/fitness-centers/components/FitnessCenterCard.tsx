"use client";

import Link from "next/link";
import MembershipBadge, {
  type MembershipTier,
} from "@/features/home/components/MembershipBadge";
import RemoteImage from "@/components/common/RemoteImage";
import { gymImageSrc } from "@/lib/api/landing";
import TiltCard from "@/features/home/components/TiltCard";

export type FitnessCenterCardProps = {
  name: string;
  location: string;
  phone: string;
  image: string;
  category: string;
  membership: MembershipTier;
  href: string;
};

const FitnessCenterCard = ({
  name,
  location,
  phone,
  image,
  category,
  membership,
  href,
}: FitnessCenterCardProps) => {
  return (
    <TiltCard intensity={9}>
    <Link
      href={href}
      className="group flex min-w-0 flex-col gap-6 rounded-[32px] border border-border-muted bg-surface p-4 transition-all hover:border-cyan hover:bg-page hover:shadow-[0px_24px_50px_rgba(0,157,166,0.16)] sm:p-5"
    >
      <div className="relative h-[200px] overflow-hidden rounded-2xl sm:h-[250px]">
        <RemoteImage
          src={gymImageSrc(image)}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 411px"
        />
      </div>
      <div>
        <div className="flex min-w-0 items-center justify-between gap-3">
          <h3 className="min-w-0 truncate text-lg font-semibold leading-7 text-turquoise group-hover:text-ink sm:text-xl sm:leading-[30px]">
            {name}
          </h3>
          <MembershipBadge tier={membership} />
        </div>
        {category ? (
          <p className="text-sm font-bold leading-5 text-turquoise">{category}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 text-sm font-medium leading-5 text-desc-2 sm:flex-row sm:items-start sm:justify-between">
        <span className="inline-flex min-w-0 items-center gap-2">
          <img
            src="/icons/gyms/map-pin.svg"
            alt=""
            width={20}
            height={20}
            className="size-5 shrink-0"
          />
          <span className="line-clamp-1">{location}</span>
        </span>
        {phone ? (
          <span className="inline-flex shrink-0 items-center gap-2">
            <img
              src="/icons/gyms/call.svg"
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0"
            />
            {phone}
          </span>
        ) : null}
      </div>
    </Link>
    </TiltCard>
  );
};

export default FitnessCenterCard;

import Container from "@/components/common/Container";
import MembershipBadge, {
  MEMBERSHIP_LABELS,
  type MembershipTier,
} from "@/features/home/components/MembershipBadge";
import { addLocaleToPathname } from "@/lib/i18n/config";
import { getLandingGymServer, type LandingGymDetail } from "@/lib/api/landing";
import { getMessages } from "@/lib/i18n/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import FitnessGallery from "./FitnessGallery";

interface FitnessCenterDetailsProps {
  slug: string;
}

const TIERS: MembershipTier[] = ["bronze", "silver", "gold", "platinum"];

const toTier = (value: string | null | undefined): MembershipTier => {
  if (value === "silver" || value === "gold" || value === "platinum") {
    return value;
  }
  return "bronze";
};

const accessTiers = (gym: LandingGymDetail): MembershipTier[] => {
  const fromApi = (gym.accessMemberships ?? []).map(toTier);
  if (fromApi.length > 0) {
    return [...new Set(fromApi)].sort(
      (left, right) => TIERS.indexOf(left) - TIERS.indexOf(right),
    );
  }
  const min = TIERS.indexOf(toTier(gym.membership));
  return TIERS.slice(min);
};

const FitnessCenterDetails = async ({ slug }: FitnessCenterDetailsProps) => {
  const { messages, locale } = await getMessages();
  const gym = await getLandingGymServer(locale, slug);
  if (!gym) notFound();

  const name = gym.name;
  const t = messages.centers;
  const address = [gym.location, gym.city].filter(Boolean).join(", ");
  const hours = gym.workHours.length > 0 ? gym.workHours : [];
  const amenities =
    gym.amenities.length > 0 ? gym.amenities.join(" • ") : t.equipmentText;
  const tiers = accessTiers(gym);
  const lowestTier = MEMBERSHIP_LABELS[tiers[0] ?? toTier(gym.membership)];
  const accessHint = (
    tiers.length > 1 ? t.gymAccessHint : t.gymAccessHintSingle
  ).replace("{tier}", lowestTier);
  const hasCoords =
    gym.latitude != null &&
    gym.longitude != null &&
    Number.isFinite(gym.latitude) &&
    Number.isFinite(gym.longitude);
  const mapSrc = hasCoords
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${gym.longitude! - 0.01}%2C${gym.latitude! - 0.01}%2C${gym.longitude! + 0.01}%2C${gym.latitude! + 0.01}&layer=mapnik&marker=${gym.latitude}%2C${gym.longitude}`
    : null;
  const mapsLink = hasCoords
    ? `https://www.openstreetmap.org/?mlat=${gym.latitude}&mlon=${gym.longitude}#map=16/${gym.latitude}/${gym.longitude}`
    : `https://www.openstreetmap.org/search?query=${encodeURIComponent(address || name)}`;

  const gymSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name,
    address: {
      "@type": "PostalAddress",
      addressLocality: gym.city ?? "Baku",
      streetAddress: gym.location ?? "",
      addressCountry: "AZ",
    },
    telephone: gym.phone ?? undefined,
  };

  return (
    <Container className="pb-16 pt-5 md:pb-24 md:pt-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
      />
      <Link
        href={addLocaleToPathname("/fitness-centers", locale)}
        className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg py-3 text-base font-semibold leading-6 text-turquoise"
      >
        <img
          src="/icons/gym-details/arrow-left.svg"
          alt=""
          width={24}
          height={24}
        />
        {t.eyebrow}
      </Link>

      <section className="flex flex-col gap-10 rounded-2xl border border-border-muted bg-surface p-5 md:p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-[32px] font-semibold leading-[44px] text-heading md:text-[44px] md:leading-[66px]">
                {name}
              </h1>
              <MembershipBadge tier={toTier(gym.membership)} size="lg" />
            </div>
            {gym.category ? (
              <p className="text-2xl font-bold leading-9 text-turquoise">
                {gym.category}
              </p>
            ) : null}
          </div>

          <FitnessGallery
            images={gym.galleryImageUrls}
            name={name}
            previousLabel={t.previousImage}
            nextLabel={t.nextImage}
          />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[32px] font-semibold leading-[48px] text-ink md:text-[40px] md:leading-[60px]">
            {t.aboutGym}
          </h2>
          <p className="text-base font-medium leading-6 text-ink">
            {gym.description || t.aboutText}
          </p>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold leading-[30px] text-ink">
              {t.amenities}
            </h3>
            <p className="text-base font-medium leading-6 text-ink">
              {amenities}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#557C9F] pt-5 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-1">
            <img
              src="/icons/gym-details/call.svg"
              alt=""
              width={16}
              height={16}
              className="mt-0.5 size-4"
            />
            <span className="text-sm font-medium leading-5 text-turquoise">
              {t.contact} :
            </span>
            <span className="text-xs font-medium leading-[18px] text-desc-2">
              {gym.phone || "—"}
            </span>
          </div>
          <div className="flex items-start gap-1 md:max-w-[280px]">
            <img
              src="/icons/gym-details/location.svg"
              alt=""
              width={16}
              height={16}
              className="mt-0.5 size-4 shrink-0"
            />
            <span className="text-sm leading-[18px] text-turquoise">
              {t.address}:
            </span>
            <span className="text-xs font-medium leading-[18px] text-desc-2">
              {address || "—"}
            </span>
          </div>
          <div className="flex items-start gap-1">
            <img
              src="/icons/gym-details/clock.svg"
              alt=""
              width={14}
              height={14}
              className="mt-0.5 size-3.5"
            />
            <span className="text-sm leading-[18px] text-turquoise">
              {t.workHoursTitle}:
            </span>
            <div className="flex flex-col gap-1">
              {hours.length > 0 ? (
                hours.map((line) => (
                  <span
                    key={line}
                    className="text-xs font-medium leading-[18px] text-desc-2"
                  >
                    {line}
                  </span>
                ))
              ) : (
                <span className="text-xs font-medium leading-[18px] text-desc-2">
                  —
                </span>
              )}
            </div>
          </div>
        </div>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl"
        >
          {mapSrc ? (
            <iframe
              title={t.map}
              src={mapSrc}
              className="h-[240px] w-full border-0 md:h-[392px]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <img
              src="/images/gym-details/map.png"
              alt={t.map}
              className="h-[240px] w-full object-cover md:h-[392px]"
            />
          )}
        </a>

        <div className="flex flex-col gap-6 rounded-2xl bg-brand-navy-800 p-7 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-[539px] flex-col gap-3">
            <p className="text-base font-bold leading-6 text-cyan">{t.gymAccess}</p>
            <div className="flex flex-wrap items-center gap-4">
              {tiers.map((tier, index) => (
                <span key={tier} className="flex items-center gap-4">
                  {index > 0 ? (
                    <span className="size-1 rounded-full bg-white" />
                  ) : null}
                  <MembershipBadge tier={tier} variant="gradient" />
                </span>
              ))}
            </div>
            <p className="text-base font-normal leading-6 text-desc">
              {accessHint}
            </p>
          </div>
          <Link
            href={addLocaleToPathname("/offers", locale)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cyan px-4 text-base font-semibold text-white"
          >
            {t.viewSubscriptions}
            <img
              src="/icons/gym-details/arrow-right.svg"
              alt=""
              width={24}
              height={24}
            />
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default FitnessCenterDetails;

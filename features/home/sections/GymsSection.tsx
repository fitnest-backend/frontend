import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import MembershipBadge, {
  type MembershipTier,
} from "../components/MembershipBadge";
import {
  getHomeGymsServer,
  gymImageSrc,
  type LandingGym,
} from "@/lib/api/landing";

const toTier = (membership: LandingGym["membership"]): MembershipTier => {
  if (
    membership === "silver" ||
    membership === "gold" ||
    membership === "platinum"
  ) {
    return membership;
  }
  return "bronze";
};

const GymsSection = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.home;
  const gyms = await getHomeGymsServer(locale);

  return (
    <section id="gyms" className="scroll-mt-28 py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={t.gymsEyebrow}
          title={t.gymsHeading}
          action={
            <Link
              href={addLocaleToPathname("/fitness-centers", locale)}
              className="inline-flex items-center gap-2 text-base font-semibold text-turquoise"
            >
              {t.allGyms}
              <img src="/icons/home/arrow-right.svg" alt="" width={24} height={24} />
            </Link>
          }
        />
        {gyms.length === 0 ? null : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gyms.map((gym) => (
              <Link
                key={gym.gymId}
                href={addLocaleToPathname(`/fitness-centers/${gym.gymId}`, locale)}
                className="group flex flex-col gap-6 rounded-[32px] border border-border-muted bg-surface p-5 transition-all hover:border-cyan hover:bg-page hover:shadow-[0px_2px_2px_rgba(0,0,0,0.25)]"
              >
                <div className="relative h-[250px] overflow-hidden rounded-2xl">
                  <Image
                    src={gymImageSrc(gym.coverImageUrl)}
                    alt={gym.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 411px"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold leading-[30px] text-turquoise group-hover:text-ink">
                      {gym.name}
                    </h3>
                    <MembershipBadge tier={toTier(gym.membership)} />
                  </div>
                  {gym.category ? (
                    <p className="text-sm font-bold leading-5 text-turquoise">
                      {gym.category}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2 text-sm font-medium leading-5 text-desc-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src="/icons/home/map-pin.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 shrink-0"
                    />
                    {gym.location || gym.city || "—"}
                  </span>
                  {gym.phone ? (
                    <span className="inline-flex items-center gap-2">
                      <img
                        src="/icons/home/call.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-5 shrink-0"
                      />
                      {gym.phone}
                    </span>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default GymsSection;

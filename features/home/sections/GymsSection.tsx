import Link from "next/link";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import FitnessCenterCard from "@/features/fitness-centers/components/FitnessCenterCard";
import type { MembershipTier } from "../components/MembershipBadge";
import SectionHeading from "../components/SectionHeading";
import HomeArrow from "../components/HomeArrow";
import { Stagger } from "../components/Reveal";
import { getHomeGymsServer, type LandingGym } from "@/lib/api/landing";

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
    <section id="gyms" className="scroll-mt-28 bg-page py-16 md:py-20">
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
              <HomeArrow className="size-6" />
            </Link>
          }
        />
        {gyms.length === 0 ? null : (
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" variant="scale" delay={0.09}>
            {gyms.map((gym) => (
              <FitnessCenterCard
                key={gym.gymId}
                name={gym.name}
                location={gym.location || gym.city || "—"}
                phone={gym.phone || ""}
                image={gym.coverImageUrl || ""}
                category={gym.category || ""}
                membership={toTier(gym.membership)}
                href={addLocaleToPathname(`/fitness-centers/${gym.gymId}`, locale)}
              />
            ))}
          </Stagger>
        )}
      </Container>
    </section>
  );
};

export default GymsSection;

import { getLandingStatsServer } from "@/lib/api/landing";
import { getMessages } from "@/lib/i18n/server";
import AboutHeroSection from "./sections/AboutHeroSection";
import AboutMissionSection from "./sections/AboutMissionSection";
import AboutValuesSection from "./sections/AboutValuesSection";

const AboutPage = async () => {
  const { locale } = await getMessages();
  const stats = await getLandingStatsServer(locale);

  return (
    <div className="bg-page text-ink">
      <AboutHeroSection
        gymCount={stats?.gymCount}
        packageCount={stats?.packageCount}
      />
      <AboutMissionSection />
      <AboutValuesSection />
    </div>
  );
};

export default AboutPage;

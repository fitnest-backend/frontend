import Container from "@/components/common/Container";
import { getMessages } from "@/lib/i18n/server";
import {
  getLandingGymsPageServer,
  getLandingStatsServer,
} from "@/lib/api/landing";
import FitnessCentersHeroSection from "./sections/FitnessCentersHeroSection";
import FitnessCentersListSection from "./sections/FitnessCentersListSection";

const FitnessCentersPage = async () => {
  const { locale } = await getMessages();
  const [stats, gymsPage] = await Promise.all([
    getLandingStatsServer(locale),
    getLandingGymsPageServer(locale, 1, 50),
  ]);

  return (
    <div className="bg-page text-ink">
      <FitnessCentersHeroSection
        gymCount={stats?.gymCount ?? (gymsPage.items.length || null)}
      />
      <Container className="flex flex-col gap-10 pb-16 pt-6 md:pb-24 md:pt-8">
        <FitnessCentersListSection gyms={gymsPage.items} />
      </Container>
    </div>
  );
};

export default FitnessCentersPage;

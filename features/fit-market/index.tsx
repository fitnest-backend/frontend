import Container from "@/components/common/Container";
import { getMessages } from "@/lib/i18n/server";
import { getLandingStoresPageServer } from "@/lib/api/landing";
import FitMarketHeroSection from "./sections/FitMarketHeroSection";
import FitMarketListSection from "./sections/FitMarketListSection";

const FitMarketPage = async () => {
  const { locale } = await getMessages();
  const storesPage = await getLandingStoresPageServer(locale, 1, 200);

  return (
    <div className="bg-page text-ink">
      <FitMarketHeroSection />
      <Container className="flex flex-col gap-10 pb-16 pt-6 md:pb-24 md:pt-8">
        <FitMarketListSection stores={storesPage.items} />
      </Container>
    </div>
  );
};

export default FitMarketPage;

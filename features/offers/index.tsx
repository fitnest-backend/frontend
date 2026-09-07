import Container from "@/components/common/Container";
import { getMessages } from "@/lib/i18n/server";
import { getSubscriptionPackagesServerCached } from "@/features/offers/api/subscription-packages";
import OffersHero from "@/features/offers/components/OffersHero";
import OffersDurationsSection from "@/features/offers/components/OffersDurationsSection";
import OffersActivateBanner from "@/features/offers/components/OffersActivateBanner";
import PlanPicker, {
  type PlanDuration,
} from "@/features/offers/components/PlanPicker";

type OffersPageProps = {
  searchParams: Promise<{
    type?: string | string[];
    month?: string | string[];
  }>;
};

const toDuration = (value?: string): PlanDuration => {
  const month = Number(value);
  if (month === 3 || month === 6 || month === 12) return month;
  return 1;
};

const OffersPage = async ({ searchParams }: OffersPageProps) => {
  const search = await searchParams;
  const selectedMonth = Array.isArray(search.month)
    ? search.month[0]
    : search.month;
  const { locale } = await getMessages();

  let packages: Awaited<
    ReturnType<typeof getSubscriptionPackagesServerCached>
  >["items"] = [];
  try {
    packages = (await getSubscriptionPackagesServerCached(locale)).items;
  } catch {
    packages = [];
  }

  return (
    <div className="bg-page text-ink">
      <OffersHero />
      <section className="bg-surface pb-16 pt-10 md:pb-20">
        <Container>
          <PlanPicker
            packages={packages}
            initialDuration={toDuration(selectedMonth)}
            selectTarget="activate"
          />
        </Container>
      </section>
      <Container className="flex flex-col gap-[68px] py-16 md:py-20">
        <OffersDurationsSection />
        <OffersActivateBanner />
      </Container>
    </div>
  );
};

export default OffersPage;

import Container from "@/components/common/Container";
import SectionHeading from "@/features/home/components/SectionHeading";
import { getMessages } from "@/lib/i18n/server";

const FitMarketHeroSection = async () => {
  const { messages } = await getMessages();

  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-14 -top-80 h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
      />
      <Container className="relative py-16 md:py-20">
        <SectionHeading
          eyebrow={messages.fitMarket.eyebrow}
          title={messages.fitMarket.heroTitle}
          description={messages.fitMarket.heroDescription}
          titleAs="h1"
        />
      </Container>
    </section>
  );
};

export default FitMarketHeroSection;

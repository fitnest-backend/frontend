import Container from "@/components/common/Container";
import SectionHeading from "@/features/home/components/SectionHeading";
import { getMessages } from "@/lib/i18n/server";

import { Reveal } from "@/components/animation";

type FitnessCentersHeroSectionProps = {
  gymCount: number | null;
};

const FitnessCentersHeroSection = async ({
  gymCount,
}: FitnessCentersHeroSectionProps) => {
  const { messages } = await getMessages();
  const countLabel = gymCount == null ? "—" : String(gymCount);
  const title = messages.centers.heroTitle.replace("{n}", countLabel);

  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-14 -top-80 h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
      />
      <Container className="relative py-16 md:py-20">
        <Reveal variant="blur" duration={0.8}>
          <SectionHeading
            eyebrow={messages.centers.eyebrow}
            title={title}
            description={messages.centers.heroDescription}
            titleAs="h1"
          />
        </Reveal>
      </Container>
    </section>
  );
};

export default FitnessCentersHeroSection;

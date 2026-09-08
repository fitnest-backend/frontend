import Container from "@/components/common/Container";
import SectionHeading from "@/features/home/components/SectionHeading";
import { getMessages } from "@/lib/i18n/server";

type AboutHeroSectionProps = {
  gymCount: number | null | undefined;
  packageCount: number | null | undefined;
};

const formatStat = (value: number | null | undefined) => {
  if (value === null || value === undefined) return "—";
  return new Intl.NumberFormat("en-US").format(value);
};

const AboutHeroSection = async ({
  gymCount,
  packageCount,
}: AboutHeroSectionProps) => {
  const { messages } = await getMessages();
  const t = messages.about;
  const items = [
    { value: formatStat(gymCount), label: t.gymsLabel },
    { value: formatStat(packageCount), label: t.packagesLabel },
    { value: "3", label: t.languagesLabel },
    { value: "11", label: t.teamLabel },
  ];

  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-14 -top-80 h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
      />
      <Container className="relative flex flex-col gap-10 py-16 md:py-20">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          titleAs="h1"
        />
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {items.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <p className="font-manrope text-[36px] font-extrabold leading-[52px] text-ink">
                {stat.value}
              </p>
              <p className="text-sm font-semibold leading-5 text-title">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutHeroSection;

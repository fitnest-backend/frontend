import Container from "@/components/common/Container";
import IconBox from "@/features/home/components/IconBox";
import SectionHeading from "@/features/home/components/SectionHeading";
import { getMessages } from "@/lib/i18n/server";
import { Reveal, Stagger, TiltCard } from "@/components/animation";

const VALUE_ICONS = [
  "/icons/about/user.svg",
  "/icons/about/eye.svg",
  "/icons/about/flash.svg",
  "/icons/about/house.svg",
] as const;

const AboutValuesSection = async () => {
  const { messages } = await getMessages();
  const t = messages.about;

  return (
    <section className="bg-surface py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal variant="blur">
          <SectionHeading eyebrow={t.valuesEyebrow} title={t.valuesTitle} />
        </Reveal>
        <Stagger className="grid grid-cols-1 items-stretch gap-[22px] sm:grid-cols-2 xl:grid-cols-4">
          {t.values.map((value, index) => (
            <TiltCard key={value.title} maxTilt={6} glare={false} className="h-full">
              <article className="flex h-full flex-col gap-1.5 rounded-[20px] border border-border-muted bg-page p-6 transition-shadow hover:shadow-[0px_4px_16px_rgba(0,164,164,0.12)]">
                <IconBox className="size-[46px] rounded-[13px]">
                  <img
                    src={VALUE_ICONS[index]}
                    alt=""
                    width={24}
                    height={24}
                  />
                </IconBox>
                <h3 className="pt-2.5 text-lg font-bold leading-7 text-ink">
                  {value.title}
                </h3>
                <p className="text-sm leading-5 text-title">{value.text}</p>
              </article>
            </TiltCard>
          ))}
        </Stagger>
      </Container>
    </section>
  );
};

export default AboutValuesSection;

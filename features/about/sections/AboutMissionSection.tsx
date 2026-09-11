import Container from "@/components/common/Container";
import IconBox from "@/features/home/components/IconBox";
import { getMessages } from "@/lib/i18n/server";
import { Stagger, TiltCard } from "@/components/animation";

const AboutMissionSection = async () => {
  const { messages } = await getMessages();
  const t = messages.about;

  return (
    <section className="bg-page py-16 md:py-20">
      <Container>
        <Stagger className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <TiltCard maxTilt={6} glare={false} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-border-muted bg-surface p-8 transition-shadow hover:shadow-[0px_4px_16px_rgba(0,164,164,0.12)]">
              <IconBox>
                <img src="/icons/about/mission.svg" alt="" width={22} height={22} />
              </IconBox>
              <h2 className="pt-[22px] font-manrope text-2xl font-extrabold leading-9 text-ink">
                {t.missionTitle}
              </h2>
              <p className="pt-2.5 text-sm leading-5 text-desc-2">{t.missionText}</p>
            </article>
          </TiltCard>
          <TiltCard maxTilt={6} glare={false} className="h-full">
            <article className="flex h-full flex-col rounded-3xl bg-brand-navy-800 p-8 transition-shadow hover:shadow-[0px_4px_16px_rgba(0,0,0,0.35)] dark:bg-[#F4F7FB]">
              <IconBox tone="navy">
                <img src="/icons/about/target.svg" alt="" width={24} height={24} />
              </IconBox>
              <h2 className="pt-[22px] font-manrope text-2xl font-extrabold leading-9 text-white dark:text-[#011729]">
                {t.goalsTitle}
              </h2>
              <p className="pt-2.5 text-sm leading-5 text-desc dark:text-[#10334D]">{t.goalsText}</p>
            </article>
          </TiltCard>
        </Stagger>
      </Container>
    </section>
  );
};

export default AboutMissionSection;

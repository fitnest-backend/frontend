import Container from "@/components/common/Container";
import IconBox from "@/features/home/components/IconBox";
import { getMessages } from "@/lib/i18n/server";

const AboutMissionSection = async () => {
  const { messages } = await getMessages();
  const t = messages.about;

  return (
    <section className="bg-page py-16 md:py-20">
      <Container className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
        <article className="flex flex-col rounded-3xl border border-border-muted bg-surface p-8 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <IconBox>
            <img src="/icons/about/mission.svg" alt="" width={22} height={22} />
          </IconBox>
          <h2 className="pt-[22px] font-sora text-2xl font-extrabold leading-9 text-ink">
            {t.missionTitle}
          </h2>
          <p className="pt-2.5 text-sm leading-5 text-desc-2">{t.missionText}</p>
        </article>
        <article className="flex flex-col rounded-3xl bg-brand-navy-800 p-8 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <IconBox tone="navy">
            <img src="/icons/about/target.svg" alt="" width={24} height={24} />
          </IconBox>
          <h2 className="pt-[22px] font-sora text-2xl font-extrabold leading-9 text-white">
            {t.goalsTitle}
          </h2>
          <p className="pt-2.5 text-sm leading-5 text-desc">{t.goalsText}</p>
        </article>
      </Container>
    </section>
  );
};

export default AboutMissionSection;

import Link from "next/link";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";
import HomeArrow from "../components/HomeArrow";

const EcosystemSection = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.home;

  return (
    <section id="business" className="scroll-mt-28 bg-surface py-16 md:py-20 dark:bg-[#012438]">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={t.ecoEyebrow} title={t.ecoHeading} />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          <article className="flex min-h-0 flex-col rounded-3xl bg-brand-navy-800 p-6 sm:min-h-[300px] sm:p-8">
            <IconBox tone="navy">
              <img
                src="/icons/home/briefcase.svg"
                alt=""
                width={22}
                height={22}
              />
            </IconBox>
            <h3 className="pt-[22px] font-manrope text-2xl font-extrabold leading-9 text-white">
              {t.corporateTitle}
            </h3>
            <p className="pt-2.5 text-sm leading-5 text-desc">
              {t.corporateDesc}
            </p>
            <Link
              href={addLocaleToPathname("/contact", locale)}
              className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-bold text-cyan"
            >
              {t.corporateCta}
              <HomeArrow className="size-5" />
            </Link>
          </article>
          <article className="flex min-h-0 flex-col rounded-3xl border border-border-muted bg-surface p-6 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-[300px] sm:p-8">
            <IconBox>
              <img src="/icons/home/house.svg" alt="" width={22} height={22} />
            </IconBox>
            <h3 className="pt-[22px] font-manrope text-2xl font-extrabold leading-9 text-ink">
              {t.partnerTitle}
            </h3>
            <p className="pt-2.5 text-sm leading-5 text-title">{t.partnerDesc}</p>
            <Link
              href={addLocaleToPathname("/contact", locale)}
              className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-bold text-turquoise"
            >
              {t.partnerCta}
              <HomeArrow className="size-5" />
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;

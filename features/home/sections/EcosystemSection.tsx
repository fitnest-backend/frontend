import Link from "next/link";
import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";

const EcosystemSection = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.home;

  return (
    <section id="business" className="scroll-mt-28 bg-surface py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow={t.ecoEyebrow} title={t.ecoHeading} />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          <article className="flex min-h-[300px] flex-col rounded-3xl bg-brand-navy-800 p-8 dark:bg-white">
            <IconBox tone="navy">
              <img
                src="/icons/home/briefcase.svg"
                alt=""
                width={22}
                height={22}
              />
            </IconBox>
            <h3 className="pt-[22px] font-sora text-2xl font-extrabold leading-9 text-white dark:text-ink">
              {t.corporateTitle}
            </h3>
            <p className="pt-2.5 text-sm leading-5 text-desc dark:text-title">
              {t.corporateDesc}
            </p>
            <Link
              href={addLocaleToPathname("/contact", locale)}
              className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-bold text-cyan"
            >
              {t.corporateCta}
              <img src="/icons/home/arrow-right.svg" alt="" width={20} height={20} />
            </Link>
          </article>
          <article className="flex min-h-[300px] flex-col rounded-3xl border border-border-muted bg-surface p-8 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <IconBox>
              <img src="/icons/home/house.svg" alt="" width={22} height={22} />
            </IconBox>
            <h3 className="pt-[22px] font-sora text-2xl font-extrabold leading-9 text-ink">
              {t.partnerTitle}
            </h3>
            <p className="pt-2.5 text-sm leading-5 text-title">{t.partnerDesc}</p>
            <Link
              href={addLocaleToPathname("/contact", locale)}
              className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-bold text-turquoise"
            >
              {t.partnerCta}
              <img
                src="/icons/home/arrow-right.svg"
                alt=""
                width={20}
                height={20}
                className="[filter:brightness(0)_saturate(100%)_invert(48%)_sepia(73%)_saturate(497%)_hue-rotate(131deg)_brightness(95%)_contrast(101%)]"
              />
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;

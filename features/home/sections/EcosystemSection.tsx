import Link from "next/link";
import { ArrowRight, Building2, Dumbbell } from "lucide-react";
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
          <article className="flex min-h-[300px] flex-col rounded-3xl bg-brand-navy-800 p-8">
            <IconBox tone="navy">
              <Building2 className="size-[22px]" />
            </IconBox>
            <h3 className="pt-[22px] font-sora text-2xl font-extrabold leading-9 text-white">
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
              <ArrowRight className="size-5" />
            </Link>
          </article>
          <article className="flex min-h-[300px] flex-col rounded-3xl border border-border-muted bg-surface p-8 shadow-[0px_4px_4px_rgba(0,0,0,0.08)]">
            <IconBox>
              <Dumbbell className="size-[22px]" />
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
              <ArrowRight className="size-5" />
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;

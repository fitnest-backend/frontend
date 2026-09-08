"use client";

import Container from "@/components/common/Container";
import { useI18n } from "@/lib/i18n/provider";

const BmiHeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-14 -top-80 h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
      />
      <Container className="relative py-16 md:py-20">
        <div className="flex max-w-[800px] flex-col gap-4">
          <p className="text-lg font-bold leading-7 text-turquoise">
            {t.home.bmiEyebrow}
          </p>
          <h1 className="font-sora text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
            {t.bmi.heroTitle}
          </h1>
          <p className="max-w-[800px] text-base leading-6 text-title">
            {t.bmi.heroDescription}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default BmiHeroSection;

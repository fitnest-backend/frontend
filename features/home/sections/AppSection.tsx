import Image from "next/image";
import { getMessages } from "@/lib/i18n/server";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";
import StoreBadges from "../components/StoreBadges";

const FEATURE_ICONS = [
  "/icons/home/search.svg",
  "/icons/home/qr-cyan.svg",
  "/icons/home/bag.svg",
  "/icons/home/chart.svg",
];

const AppSection = async () => {
  const { messages } = await getMessages();
  const t = messages.home;

  return (
    <section className="overflow-hidden bg-brand-navy py-16 md:py-20">
      <Container className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex w-full max-w-[640px] shrink flex-col gap-5 lg:max-w-[52%]">
          <SectionHeading
            light
            eyebrow={t.appEyebrow}
            title={t.appHeading}
            description={t.appDescription}
          />
          <ul className="mt-2 flex flex-col gap-[18px]">
            {t.appFeatures.map((feature, index) => (
              <li key={feature.title} className="flex items-center gap-4">
                <IconBox size="sm" tone="navy">
                  <img src={FEATURE_ICONS[index]} alt="" width={18} height={18} />
                </IconBox>
                <div>
                  <p className="text-base font-bold leading-6 text-white">
                    {feature.title}
                  </p>
                  <p className="text-sm leading-5 text-desc">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <StoreBadges dark className="mt-2" />
        </div>
        <div className="relative w-full max-w-[520px] shrink lg:max-w-[46%]">
          <Image
            src="/images/home/iphones.png"
            alt="FitNest mobile app"
            width={608}
            height={538}
            className="h-auto max-h-[538px] w-full object-contain object-right"
          />
        </div>
      </Container>
    </section>
  );
};

export default AppSection;

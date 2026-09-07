import Image from "next/image";
import { Search, QrCode, ShoppingBag, LineChart } from "lucide-react";
import { getMessages } from "@/lib/i18n/server";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import IconBox from "../components/IconBox";
import StoreBadges from "../components/StoreBadges";

const featureIcons = [Search, QrCode, ShoppingBag, LineChart];

const AppSection = async () => {
  const { messages } = await getMessages();
  const t = messages.home;

  return (
    <section className="overflow-hidden bg-brand-navy py-16 md:py-20">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-[640px] flex-col gap-5">
          <SectionHeading
            light
            eyebrow={t.appEyebrow}
            title={t.appHeading}
            description={t.appDescription}
          />
          <ul className="mt-2 flex flex-col gap-[18px]">
            {t.appFeatures.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <li key={feature.title} className="flex items-center gap-4">
                  <IconBox size="sm" tone="navy">
                    <Icon className="size-[18px]" />
                  </IconBox>
                  <div>
                    <p className="text-base font-bold leading-6 text-white">
                      {feature.title}
                    </p>
                    <p className="text-sm leading-5 text-desc">{feature.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <StoreBadges dark className="mt-2" />
        </div>
        <div className="relative w-full max-w-[608px] shrink-0">
          <Image
            src="/images/home/iphones.png"
            alt="FitNest mobile app"
            width={608}
            height={538}
            className="h-auto w-full object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default AppSection;

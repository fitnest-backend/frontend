import { Suspense } from "react";
import HeroSection from "./sections/HeroSection";
import StatsBar from "./sections/StatsBar";
import HowItWorks from "./sections/HowItWorks";
import WhySubscribe from "./sections/WhySubscribe";
import GymsSection from "./sections/GymsSection";
import SubscriptionSectionServer from "./sections/SubscriptionSectionServer";
import PaymentBanner from "./sections/PaymentBanner";
import AppSection from "./sections/AppSection";
import EcosystemSection from "./sections/EcosystemSection";
import FitStoreSection from "./sections/FitStoreSection";
import BmiPreviewSection from "./sections/BmiPreviewSection";
import Reveal from "./components/Reveal";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 bg-[#F4F8FA] pb-12 text-ink md:gap-16 md:pb-20">
      <div>
        <HeroSection />
        <StatsBar />
        <HowItWorks />
      </div>
      <Reveal>
        <WhySubscribe />
      </Reveal>
      <Reveal>
        <GymsSection />
      </Reveal>
      <Reveal>
        <Suspense fallback={null}>
          <SubscriptionSectionServer />
        </Suspense>
      </Reveal>
      <Reveal>
        <PaymentBanner />
      </Reveal>
      <Reveal>
        <AppSection />
      </Reveal>
      <Reveal>
        <EcosystemSection />
      </Reveal>
      <Reveal>
        <FitStoreSection />
      </Reveal>
      <Reveal>
        <BmiPreviewSection />
      </Reveal>
    </div>
  );
}

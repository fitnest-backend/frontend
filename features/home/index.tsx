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
    <div className="flex flex-col gap-12 bg-page pb-12 text-ink md:gap-16 md:pb-20">
      <div>
        <HeroSection />
        <Reveal variant="blur" amount={0.2}>
          <StatsBar />
        </Reveal>
        <Reveal variant="tilt">
          <HowItWorks />
        </Reveal>
      </div>
      <Reveal variant="left">
        <WhySubscribe />
      </Reveal>
      <Reveal variant="tilt">
        <GymsSection />
      </Reveal>
      <Reveal variant="tilt">
        <Suspense fallback={null}>
          <SubscriptionSectionServer />
        </Suspense>
      </Reveal>
      <Reveal variant="blur">
        <PaymentBanner />
      </Reveal>
      <Reveal variant="right">
        <AppSection />
      </Reveal>
      <Reveal variant="left">
        <EcosystemSection />
      </Reveal>
      <Reveal variant="scale">
        <FitStoreSection />
      </Reveal>
      <Reveal variant="blur">
        <BmiPreviewSection />
      </Reveal>
    </div>
  );
}

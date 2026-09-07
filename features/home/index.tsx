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

export default function HomePage() {
  return (
    <div className="bg-page text-ink">
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <WhySubscribe />
      <GymsSection />
      <Suspense fallback={null}>
        <SubscriptionSectionServer />
      </Suspense>
      <PaymentBanner />
      <AppSection />
      <EcosystemSection />
      <FitStoreSection />
      <BmiPreviewSection />
    </div>
  );
}

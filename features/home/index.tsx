import { Suspense } from "react";
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import MobileAppSection from "./sections/MobileAppSection";
import SubscriptionSectionServer from "./sections/SubscriptionSectionServer";

export default function HomePage() {
  return (
    <div className="text-gray-50">
      <HeroSection />
      {/* <DownloadAppSection /> */}
      <HowItWorks />
      <Suspense fallback={null}>
        <SubscriptionSectionServer />
      </Suspense>
      <MobileAppSection />
      {/* <BalancedLifeSection /> */}
    </div>
  );
}

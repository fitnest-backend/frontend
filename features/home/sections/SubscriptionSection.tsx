"use client";

import PlanPicker from "@/features/offers/components/PlanPicker";
import { useI18n } from "@/lib/i18n/provider";
import Container from "@/components/common/Container";
import SectionHeading from "../components/SectionHeading";
import type { SubscriptionPackage } from "@/features/offers/api/types";

type SubscriptionSectionProps = {
  packages: SubscriptionPackage[];
};

const SubscriptionSection = ({ packages }: SubscriptionSectionProps) => {
  const { t } = useI18n();

  return (
    <section id="plans" className="scroll-mt-28 bg-surface py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={t.home.plansEyebrow}
          title={t.home.plansHeading}
          description={t.home.plansDescription}
        />
        <PlanPicker packages={packages} />
      </Container>
    </section>
  );
};

export default SubscriptionSection;

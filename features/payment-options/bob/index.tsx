import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import PaymentDetailHero from "../components/PaymentDetailHero";
import PaymentHowToSection from "../components/PaymentHowToSection";
import PaymentStatsBar from "../components/PaymentStatsBar";
import PaymentTermsSection from "../components/PaymentTermsSection";

const ICON_BASE = "/icons/bob-detail";

const BobDetailPage = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.paymentOptions.bobDetail;
  const backHref = addLocaleToPathname("/payment-options", locale);

  return (
    <div className="bg-page text-ink">
      <PaymentDetailHero
        imageSrc="/images/payment-options/bob-hero.png"
        title={t.heroTitle}
        backLabel={t.back}
        backHref={backHref}
        arrowSrc={`${ICON_BASE}/arrow-left.svg`}
      />
      <PaymentStatsBar
        cardsValue={t.cardsValue}
        cardsLabel={t.cardsLabel}
        iconBase={ICON_BASE}
      />
      <PaymentHowToSection
        howTitle={t.howTitle}
        howDescription={t.howDescription}
        steps={t.steps}
        iconBase={ICON_BASE}
      />
      <PaymentTermsSection
        termsTitle={t.termsTitle}
        termsDescription={t.termsDescription}
        periodColumn={t.periodColumn}
        commissionColumn={t.commissionColumn}
        rows={t.rows}
      />
    </div>
  );
};

export default BobDetailPage;

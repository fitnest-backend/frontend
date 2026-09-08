import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import PaymentDetailHero from "../components/PaymentDetailHero";
import PaymentHowToSection from "../components/PaymentHowToSection";
import PaymentStatsBar from "../components/PaymentStatsBar";
import PaymentTermsSection from "../components/PaymentTermsSection";

const ICON_BASE = "/icons/abb-detail";

const AbbDetailPage = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.paymentOptions.abbDetail;
  const backHref = addLocaleToPathname("/payment-options", locale);

  return (
    <div className="bg-page text-ink">
      <PaymentDetailHero
        imageSrc="/images/payment-options/abb-hero.png"
        imageSrcDark="/images/payment-options/abb-dark.webp"
        title={t.heroTitle}
        backLabel={t.back}
        backHref={backHref}
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

export default AbbDetailPage;

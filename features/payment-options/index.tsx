import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import PaymentHeroPanel, {
  type PaymentStat,
} from "./components/PaymentHeroPanel";
import QrDownloadBar from "./components/QrDownloadBar";

const PaymentOptionsPage = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.paymentOptions;
  const abbHref = addLocaleToPathname("/payment-options/abb", locale);
  const coinHref = addLocaleToPathname("/payment-options/coin", locale);
  const bobHref = addLocaleToPathname("/payment-options/bob", locale);
  const stats: PaymentStat[] = [
    { icon: "percent", value: t.zeroPercent, label: t.commission },
    { icon: "calendar", value: t.upTo12Months, label: t.installment },
    { icon: "flash", value: t.fast, label: t.easyPayment },
  ];

  return (
    <div className="flex flex-col bg-page text-ink">
      <PaymentHeroPanel
        imageSrc="/images/payment-options/abb.png"
        imageAlt={t.abbTitle}
        imageWidth={1672}
        imageHeight={941}
        eyebrow={t.eyebrow}
        title={t.abbTitle}
        description={t.abbDescription}
        variant="light"
        stats={stats}
        ctaHref={abbHref}
        ctaLabel={t.learnMore}
        titleAs="h1"
        priority
      />
      <PaymentHeroPanel
        imageSrc="/images/payment-options/coin.png"
        imageAlt={t.coinTitle}
        imageWidth={1978}
        imageHeight={795}
        eyebrow={t.coinEyebrow}
        title={t.coinTitle}
        description={t.coinDescription}
        variant="dark"
        ctaHref={coinHref}
        ctaLabel={t.learnMore}
      />
      <PaymentHeroPanel
        imageSrc="/images/payment-options/bob.png"
        imageAlt={t.bobTitle}
        imageWidth={1672}
        imageHeight={941}
        eyebrow={t.eyebrow}
        title={t.bobTitle}
        description={t.bobDescription}
        variant="light"
        stats={stats}
        ctaHref={bobHref}
        ctaLabel={t.learnMore}
      />
      <QrDownloadBar />
    </div>
  );
};

export default PaymentOptionsPage;

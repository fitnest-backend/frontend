import { getMessages } from "@/lib/i18n/server";
import { addLocaleToPathname } from "@/lib/i18n/config";
import PaymentDetailHero from "../components/PaymentDetailHero";
import Container from "@/components/common/Container";

const CoinDetailPage = async () => {
  const { messages, locale } = await getMessages();
  const t = messages.paymentOptions.coinDetail;
  const backHref = addLocaleToPathname("/payment-options", locale);

  return (
    <div className="bg-page text-ink">
      <PaymentDetailHero
        imageSrc="/images/payment-options/coin.png"
        title={t.heroTitle}
        backLabel={t.back}
        backHref={backHref}
        arrowSrc="/icons/coin-details/arrow-left.svg"
        imageWidth={1978}
        imageHeight={795}
        lightText
      />
      <section className="pb-20 pt-10 md:pb-[80px] md:pt-10">
        <Container>
          <div className="mx-auto flex w-full max-w-[846px] flex-col gap-10">
            {t.sections.map((section) => (
              <article key={section.title} className="flex flex-col gap-4">
                <h2 className="font-manrope text-[26px] font-extrabold leading-10 text-ink">
                  {section.title}
                </h2>
                <p className="text-lg font-medium leading-7 text-ink">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CoinDetailPage;

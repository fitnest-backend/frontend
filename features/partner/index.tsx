import Container from "@/components/common/Container";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/server";
import PartnerCalculator from "./PartnerCalculator";
import PartnerForm from "./PartnerForm";

type PartnerPageProps = {
  locale: Locale;
};

const PartnerPage = async ({ locale }: PartnerPageProps) => {
  const { messages } = await getMessages(locale);
  const t = messages.partner;

  return (
    <div className="bg-page text-ink">
      <section className="relative overflow-hidden bg-brand-navy-800 dark:bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[137px] -top-[401px] h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
        />
        <Container className="relative py-16 md:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-full max-w-[515px] flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-manrope text-2xl font-extrabold leading-9 text-cyan dark:text-[#00A4A4]">
                  {t.eyebrow}
                </p>
                <h1 className="font-manrope text-[32px] font-extrabold leading-[1.3] text-white md:text-[40px] md:leading-[60px] dark:text-[#011729]">
                  {t.title}
                </h1>
                <p className="max-w-[488px] text-base leading-6 text-title">{t.description}</p>
              </div>
              <a
                href="#partner-apply"
                className="inline-flex h-11 w-fit items-center justify-center rounded-lg bg-cyan px-4 text-base font-semibold leading-6 text-white transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] dark:text-[#011729]"
              >
                {t.heroCta}
              </a>
            </div>
            <PartnerCalculator />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="flex flex-col items-center gap-10">
          <h2 className="text-center font-manrope text-[30px] font-extrabold leading-[46px] text-heading">
            {t.whyTitle}
          </h2>
          <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {t.reasons.map((reason) => (
              <article
                key={reason.title}
                className="flex flex-col gap-2 rounded-[20px] border border-border-muted bg-surface p-8 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              >
                <h3 className="pt-2.5 font-manrope text-lg font-extrabold text-ink">
                  {reason.title}
                </h3>
                <p className="text-[15px] leading-[24.75px] text-title">{reason.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <Container className="flex justify-center">
          <PartnerForm />
        </Container>
      </section>
    </div>
  );
};

export default PartnerPage;

import Container from "@/components/common/Container";
import type { LandingFaqs } from "@/lib/api/landing";
import type { Locale } from "@/lib/i18n/config";
import { CONTACT_EMAIL, toMailtoHref } from "@/lib/constants/app-links";
import { getMessages } from "@/lib/i18n/server";
import FaqList from "./FaqList";

type FaqPageProps = {
  locale: Locale;
  faqs: LandingFaqs;
  email?: string | null;
};

const FaqPage = async ({ locale, faqs, email }: FaqPageProps) => {
  const { messages } = await getMessages(locale);
  const t = messages.faq;
  const contactEmail = email?.trim() || CONTACT_EMAIL;

  return (
    <div className="bg-page text-ink">
      <section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[57px] -top-[321px] h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
        />
        <Container className="relative py-16 md:py-20">
          <div className="flex max-w-[1280px] flex-col gap-4">
            <p className="text-lg font-bold leading-7 text-[#009DA6]">{t.eyebrow}</p>
            <h1 className="font-manrope text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
              {t.title}
            </h1>
            <p className="max-w-[800px] text-base leading-6 text-title">
              {t.contactBefore}{" "}
              <a
                href={toMailtoHref(contactEmail)}
                className="font-bold text-turquoise underline"
              >
                {contactEmail}
              </a>{" "}
              {t.contactAfter}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-page pb-16 pt-10 md:pb-20 md:pt-12">
        <Container>
          <div className="mx-auto w-full max-w-[849px]">
            <FaqList items={faqs.items} categories={faqs.categories} />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FaqPage;

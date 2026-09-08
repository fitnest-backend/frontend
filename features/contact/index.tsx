import Container from "@/components/common/Container";
import { getLandingContactServer } from "@/lib/api/landing";
import type { Locale } from "@/lib/i18n/config";
import { CONTACT_EMAIL, toMailtoHref } from "@/lib/constants/app-links";
import { getMessages } from "@/lib/i18n/server";
import ContactForm from "./ContactForm";
import ContactThemeIcon from "./ContactThemeIcon";

type ContactPageProps = {
  locale: Locale;
};

const ContactPage = async ({ locale }: ContactPageProps) => {
  const [{ messages }, contact] = await Promise.all([
    getMessages(locale),
    getLandingContactServer(),
  ]);
  const t = messages.contact;
  const email = contact.email?.trim() || CONTACT_EMAIL;

  const details = [
    {
      icon: "sms",
      label: t.emailLabel,
      value: email,
      href: toMailtoHref(email),
    },
    {
      icon: "location",
      label: t.addressLabel,
      value: t.address,
    },
    {
      icon: "clock",
      label: t.hoursLabel,
      value: t.hours,
    },
  ];

  return (
    <div className="bg-page text-ink">
      <section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[137px] -top-[401px] h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
        />
        <Container className="relative py-16 md:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex max-w-[488px] flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-bold leading-7 text-turquoise">{t.eyebrow}</p>
                <h1 className="font-manrope text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
                  {t.title}
                </h1>
                <p className="text-base leading-6 text-title">{t.description}</p>
              </div>
              <ul className="flex max-w-[251px] flex-col gap-5">
                {details.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-[13px] bg-turquoise/15">
                      <ContactThemeIcon name={item.icon} className="size-6" />
                    </span>
                    <div className="flex min-w-0 flex-col">
                      <span className="text-base font-medium leading-6 text-title">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="truncate text-lg font-bold leading-7 text-ink"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-lg font-bold leading-7 text-ink">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;

import { getLandingLegalDocumentServer } from "@/lib/api/landing";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/server";
import LegalDocumentView from "@/features/legal/LegalDocumentView";

type TermsPageProps = {
  locale: Locale;
};

const TermsPage = async ({ locale }: TermsPageProps) => {
  const { messages } = await getMessages(locale);
  const t = messages.terms;
  const document = await getLandingLegalDocumentServer(locale, "terms-of-use");

  return (
    <LegalDocumentView
      locale={locale}
      eyebrow={t.eyebrow}
      title={t.title}
      subtitle={t.subtitle}
      updatedLabel={t.updatedLabel}
      empty={t.empty}
      document={document}
    />
  );
};

export default TermsPage;

import { getLandingLegalDocumentServer } from "@/lib/api/landing";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/server";
import LegalDocumentView from "@/features/legal/LegalDocumentView";

type PrivacyPolicyPageProps = {
  locale: Locale;
};

const PrivacyPolicyPage = async ({ locale }: PrivacyPolicyPageProps) => {
  const { messages } = await getMessages(locale);
  const t = messages.privacy;
  const document = await getLandingLegalDocumentServer(locale, "privacy-policy");

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

export default PrivacyPolicyPage;

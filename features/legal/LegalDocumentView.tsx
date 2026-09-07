import Container from "@/components/common/Container";
import type { LandingLegalDocument } from "@/lib/api/landing";
import type { Locale } from "@/lib/i18n/config";
import {
  formatLegalUpdatedAt,
  looksLikeHtml,
  sanitizeLegalHtml,
  stripLeadingHtmlTitle,
} from "./legal-content";

type LegalDocumentViewProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  subtitle: string;
  updatedLabel: string;
  empty: string;
  document: LandingLegalDocument | null;
};

const contentClassName = [
  "legal-html max-w-none text-lg font-medium leading-7 text-ink",
  "[&_h1]:mt-10 [&_h1]:font-sora [&_h1]:text-[22px] [&_h1]:font-extrabold [&_h1]:leading-8 [&_h1]:md:text-[26px] [&_h1]:md:leading-10",
  "[&_h2]:mt-10 [&_h2]:font-sora [&_h2]:text-[22px] [&_h2]:font-extrabold [&_h2]:leading-8 [&_h2]:md:text-[26px] [&_h2]:md:leading-10",
  "[&_h3]:mt-8 [&_h3]:font-sora [&_h3]:text-xl [&_h3]:font-extrabold [&_h3]:leading-8",
  "[&_p]:mt-4 [&_p]:first:mt-0",
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:mt-1",
  "[&_a]:text-turquoise [&_a]:underline",
  "[&_:first-child]:mt-0",
].join(" ");

const LegalDocumentView = ({
  locale,
  eyebrow,
  title,
  subtitle,
  updatedLabel,
  empty,
  document,
}: LegalDocumentViewProps) => {
  const formattedDate = formatLegalUpdatedAt(document?.updatedAt, locale);
  const rawContent = document?.content?.trim() ?? "";
  const content = looksLikeHtml(rawContent)
    ? stripLeadingHtmlTitle(sanitizeLegalHtml(rawContent))
    : rawContent;

  return (
    <div className="bg-surface text-ink">
      <section className="relative overflow-hidden bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[57px] -top-[321px] h-[523px] w-[668px] rounded-full bg-[linear-gradient(180deg,rgba(4,34,86,0.61)_0%,rgba(0,106,133,0.38)_55%,rgba(0,163,179,0.01)_100%)] blur-[150px]"
        />
        <Container className="relative py-16 md:py-20">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold leading-7 text-turquoise">{eyebrow}</p>
            <h1 className="font-sora text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
              {title}
            </h1>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[800px] whitespace-pre-line text-base leading-6 text-title">
                {subtitle}
              </p>
              {formattedDate ? (
                <p className="shrink-0 text-base leading-6 text-desc-2">
                  {updatedLabel} {formattedDate}
                </p>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface pb-16 md:pb-20">
        <Container>
          <div className="mx-auto max-w-[846px]">
            {content ? (
              looksLikeHtml(content) ? (
                <div
                  className={contentClassName}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                <p className="whitespace-pre-line text-lg font-medium leading-7 text-ink">
                  {content}
                </p>
              )
            ) : (
              <p className="text-lg font-medium leading-7 text-title">{empty}</p>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LegalDocumentView;

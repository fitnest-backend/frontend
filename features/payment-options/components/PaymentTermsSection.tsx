import Container from "@/components/common/Container";

type TermsRow = {
  period: string;
  fee: string;
};

type PaymentTermsSectionProps = {
  termsTitle: string;
  termsDescription: string;
  periodColumn: string;
  commissionColumn: string;
  rows: TermsRow[];
};

const PaymentTermsSection = ({
  termsTitle,
  termsDescription,
  periodColumn,
  commissionColumn,
  rows,
}: PaymentTermsSectionProps) => {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-[640px] flex-col gap-4">
          <h2 className="font-sora text-[30px] font-extrabold leading-[46px] text-heading">
            {termsTitle}
          </h2>
          <p className="max-w-[489px] text-base leading-6 text-title">
            {termsDescription}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[846px] overflow-hidden rounded-xl border border-border-muted">
            <div className="grid grid-cols-2 border-b border-border-muted bg-page">
              <div className="flex h-[60px] items-center px-3">
                <p className="text-lg font-bold leading-7 text-ink">{periodColumn}</p>
              </div>
              <div className="flex h-[60px] items-center border-l border-border-muted px-3">
                <p className="text-lg font-bold leading-7 text-ink">
                  {commissionColumn}
                </p>
              </div>
            </div>
            {rows.map((row, index) => (
              <div
                key={row.period}
                className={`grid grid-cols-2 bg-surface ${
                  index < rows.length - 1 ? "border-b border-border-muted" : ""
                }`}
              >
                <div className="flex h-[60px] items-center px-3">
                  <p className="text-lg font-bold leading-7 text-ink">{row.period}</p>
                </div>
                <div className="flex h-[60px] items-center border-l border-border-muted px-3">
                  <p className="text-lg font-bold leading-7 text-ink">{row.fee}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaymentTermsSection;

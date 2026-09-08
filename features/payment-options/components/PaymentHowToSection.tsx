import Container from "@/components/common/Container";

type HowToStep = {
  title: string;
  description: string;
};

type PaymentHowToSectionProps = {
  howTitle: string;
  howDescription: string;
  steps: HowToStep[];
  iconBase: string;
};

const STEP_ICONS = ["layers.svg", "card.svg", "tick-circle.svg"];

const PaymentHowToSection = ({
  howTitle,
  howDescription,
  steps,
  iconBase,
}: PaymentHowToSectionProps) => {
  return (
    <section className="py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-[640px] flex-col gap-4">
          <h2 className="font-manrope text-[30px] font-extrabold leading-[46px] text-heading">
            {howTitle}
          </h2>
          <p className="max-w-[489px] text-base leading-6 text-title">
            {howDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="flex min-h-[216px] flex-col gap-1 rounded-[20px] border border-border-muted bg-surface px-[26px] py-7 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl bg-cyan/15">
                  <img
                    src={`${iconBase}/${STEP_ICONS[index]}`}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-[15px] font-extrabold text-gray-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="pt-3 font-manrope text-xl font-extrabold leading-[30px] text-ink">
                {step.title}
              </h3>
              <p className="whitespace-pre-line text-sm leading-5 text-title">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PaymentHowToSection;

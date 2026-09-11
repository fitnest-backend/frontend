import { getMessages } from "@/lib/i18n/server";
import { Reveal, Stagger, TiltCard } from "@/components/animation";

const OffersDurationsSection = async () => {
  const { messages } = await getMessages();
  const items = messages.offers.durationCards;

  return (
    <section className="flex flex-col gap-10">
      <Reveal variant="blur">
        <div className="flex max-w-[733px] flex-col gap-4">
          <p className="text-lg font-bold leading-7 text-turquoise">
            {messages.offers.durationsEyebrow}
          </p>
          <h2 className="font-manrope text-[32px] font-extrabold leading-[1.3] text-heading md:text-[36px] md:leading-[52px]">
            {messages.offers.durationsHeading}
          </h2>
        </div>
      </Reveal>
      <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4" variant="scale" delay={0.08}>
        {items.map((item) => (
          <TiltCard key={item.months} intensity={6}>
            <article
              className="flex h-full flex-col items-center justify-between gap-4 rounded-xl border border-border-muted bg-surface px-4 py-5 transition-shadow hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <div className="flex flex-col gap-0.5 text-center">
                <p className="text-[30px] font-bold leading-[46px] text-ink">
                  {item.months} {messages.home.monthShort}
                </p>
                <p className="text-lg font-semibold leading-7 text-turquoise">
                  {item.label}
                </p>
              </div>
              <p className="mt-auto max-w-[161px] text-center text-sm leading-5 text-title">
                {item.description}
              </p>
            </article>
          </TiltCard>
        ))}
      </Stagger>
    </section>
  );
};

export default OffersDurationsSection;

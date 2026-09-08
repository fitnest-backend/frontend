import Container from "@/components/common/Container";
import { getMessages } from "@/lib/i18n/server";

type PaymentStatsBarProps = {
  cardsValue: string;
  cardsLabel: string;
  iconBase: string;
};

const PaymentStatsBar = async ({
  cardsValue,
  cardsLabel,
  iconBase,
}: PaymentStatsBarProps) => {
  const { messages } = await getMessages();
  const t = messages.paymentOptions;
  const stats = [
    { icon: "percent" as const, value: t.zeroPercent, label: t.commission },
    { icon: "calendar" as const, value: t.upTo12Months, label: t.installment },
    { icon: "cards" as const, value: cardsValue, label: cardsLabel },
    { icon: "flash" as const, value: t.fast, label: t.easyPayment },
  ];

  const iconSrc = {
    calendar: `${iconBase}/calendar.svg`,
    cards: `${iconBase}/cards.svg`,
    flash: `${iconBase}/flash.svg`,
  };

  return (
    <section className="border-y border-border-muted bg-surface py-10">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="flex items-center gap-3">
              <div className="flex size-[46px] shrink-0 items-center justify-center rounded-[13px] bg-cyan/15">
                {stat.icon === "percent" ? (
                  <span className="text-lg font-bold leading-7 text-turquoise">
                    %
                  </span>
                ) : (
                  <img src={iconSrc[stat.icon]} alt="" width={24} height={24} />
                )}
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-lg font-bold leading-7 text-ink">{stat.value}</p>
                <p className="text-sm leading-5 text-title">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PaymentStatsBar;

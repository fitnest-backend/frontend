import { getMessages } from "@/lib/i18n/server";
import Container from "@/components/common/Container";
import { getLandingStatsServer } from "@/lib/api/landing";

const formatStat = (value: number | null | undefined) => {
  if (value === null || value === undefined) return "—";
  return new Intl.NumberFormat("en-US").format(value);
};

const StatsBar = async () => {
  const { messages, locale } = await getMessages();
  const stats = await getLandingStatsServer(locale);
  const items = [
    { value: formatStat(stats?.gymCount), label: messages.home.stats[0]?.label },
    {
      value: formatStat(stats?.platinumGymCount),
      label: messages.home.stats[1]?.label,
    },
    {
      value: formatStat(stats?.monthlyVisitLimit),
      label: messages.home.stats[2]?.label,
    },
    {
      value: formatStat(stats?.packageCount),
      label: messages.home.stats[3]?.label,
    },
  ];

  return (
    <section className="border-y border-border-muted bg-surface">
      <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:justify-between">
        {items.map((stat, index) => {
          const isLast = index === items.length - 1;
          const [title, range] = (stat.label ?? "").split("\n");
          const [from, to] = (range ?? "").split(/\s+/).filter(Boolean);

          return (
            <div
              key={`${stat.label}-${index}`}
              className="flex items-center gap-4"
            >
              <p className="font-manrope text-[36px] font-extrabold leading-[52px] text-ink">
                {stat.value}
              </p>
              {isLast && from && to ? (
                <div className="text-sm font-semibold leading-5 text-title">
                  <p>{title}</p>
                  <p className="flex items-center gap-1.5">
                    {from}
                    <img
                      src="/icons/home/arrow-right.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="size-3 [filter:brightness(0)_saturate(100%)_invert(47%)_sepia(18%)_saturate(746%)_hue-rotate(169deg)_brightness(94%)_contrast(88%)]"
                    />
                    {to}
                  </p>
                </div>
              ) : (
                <p className="whitespace-pre-line text-sm font-semibold leading-5 text-title">
                  {stat.label}
                </p>
              )}
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default StatsBar;

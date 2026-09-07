import { getMessages } from "@/lib/i18n/server";
import Container from "@/components/common/Container";
import { ArrowRight } from "lucide-react";
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
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-10">
        {items.map((stat, index) => (
          <div key={`${stat.label}-${index}`} className="flex items-center gap-4">
            <p className="font-sora text-[36px] font-extrabold leading-[52px] text-ink">
              {stat.value}
            </p>
            <p className="whitespace-pre-line text-sm font-semibold leading-5 text-title">
              {stat.label}
            </p>
            {index === items.length - 1 ? (
              <ArrowRight className="hidden size-3 text-title lg:block" />
            ) : null}
          </div>
        ))}
      </Container>
    </section>
  );
};

export default StatsBar;

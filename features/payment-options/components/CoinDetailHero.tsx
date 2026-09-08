import Link from "next/link";
import Container from "@/components/common/Container";

type CoinDetailHeroProps = {
  title: string;
  backLabel: string;
  backHref: string;
};

const CoinDetailHero = ({ title, backLabel, backHref }: CoinDetailHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[min(72%,808px)] md:w-[min(56%,808px)]">
        <img
          src="/images/payment-options/coin-hero-dark.svg"
          alt=""
          className="h-full w-full object-cover object-left"
        />
      </div>
      <Container className="relative z-10 flex min-h-[280px] flex-col gap-10 py-10 md:h-[460px] md:gap-20">
        <Link
          href={backHref}
          className="inline-flex w-fit items-center gap-2 rounded-lg py-3 text-base font-semibold leading-6 text-[#00A4A4]"
        >
          <img
            src="/icons/coin-details/arrow-left.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 dark:hidden"
          />
          <img
            src="/icons/coin-details/arrow-left-dark.svg"
            alt=""
            width={24}
            height={24}
            className="hidden size-6 dark:block"
          />
          {backLabel}
        </Link>
        <h1 className="max-w-[608px] whitespace-pre-line font-manrope text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
          {title}
        </h1>
      </Container>
    </section>
  );
};

export default CoinDetailHero;

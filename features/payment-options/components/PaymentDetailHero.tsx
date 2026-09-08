import Link from "next/link";
import Container from "@/components/common/Container";
import PaymentEllipse from "./PaymentEllipse";

type PaymentDetailHeroProps = {
  ellipseSrc: string;
  title: string;
  backLabel: string;
  backHref: string;
  arrowSrc?: string;
  arrowSrcDark?: string;
};

const PaymentDetailHero = ({
  ellipseSrc,
  title,
  backLabel,
  backHref,
  arrowSrc = "/icons/abb-detail/arrow-left.svg",
  arrowSrcDark = "/icons/coin-details/arrow-left-dark.svg",
}: PaymentDetailHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-surface">
      <PaymentEllipse src={ellipseSrc} />
      <Container className="relative z-10 flex min-h-[220px] flex-col gap-8 py-10 md:min-h-[320px] md:gap-16 lg:h-[clamp(400px,32vw,720px)] lg:gap-20">
        <Link
          href={backHref}
          className="inline-flex w-fit items-center gap-2 rounded-lg py-3 text-base font-semibold leading-6 text-[#00A4A4]"
        >
          <img
            src={arrowSrc}
            alt=""
            width={24}
            height={24}
            className="size-6 dark:hidden"
          />
          <img
            src={arrowSrcDark}
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

export default PaymentDetailHero;

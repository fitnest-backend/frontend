import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";

type PaymentDetailHeroProps = {
  imageSrc: string;
  imageSrcDark?: string;
  title: string;
  backLabel: string;
  backHref: string;
  arrowSrc?: string;
};

const PaymentDetailHero = ({
  imageSrc,
  imageSrcDark,
  title,
  backLabel,
  backHref,
  arrowSrc = "/icons/abb-detail/arrow-left.svg",
}: PaymentDetailHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(56vw,808px)] md:block">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 0px, 56vw"
          className={`object-cover object-left ${imageSrcDark ? "dark:hidden" : ""}`}
        />
        {imageSrcDark ? (
          <Image
            src={imageSrcDark}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 0px, 56vw"
            className="hidden object-cover object-left dark:block"
          />
        ) : null}
      </div>
      <Container className="relative z-10 flex min-h-[280px] flex-col justify-between gap-10 py-10 md:min-h-[460px] md:py-10">
        <Link
          href={backHref}
          className="inline-flex w-fit items-center gap-2 rounded-lg py-3 text-base font-semibold leading-6 text-turquoise"
        >
          <img src={arrowSrc} alt="" width={24} height={24} />
          {backLabel}
        </Link>
        <h1 className="max-w-[608px] whitespace-pre-line font-sora text-[32px] font-extrabold leading-[1.3] text-heading md:text-[40px] md:leading-[60px]">
          {title}
        </h1>
      </Container>
      <div className="relative mx-auto h-[220px] w-full max-w-[420px] md:hidden">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="420px"
          className={`object-contain ${imageSrcDark ? "dark:hidden" : ""}`}
        />
        {imageSrcDark ? (
          <Image
            src={imageSrcDark}
            alt=""
            fill
            sizes="420px"
            className="hidden object-contain dark:block"
          />
        ) : null}
      </div>
    </section>
  );
};

export default PaymentDetailHero;

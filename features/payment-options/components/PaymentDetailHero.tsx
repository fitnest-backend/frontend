import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";

type PaymentDetailHeroProps = {
  imageSrc: string;
  title: string;
  backLabel: string;
  backHref: string;
  arrowSrc?: string;
  imageAlign?: "left" | "right";
};

const PaymentDetailHero = ({
  imageSrc,
  title,
  backLabel,
  backHref,
  arrowSrc = "/icons/abb-detail/arrow-left.svg",
  imageAlign = "left",
}: PaymentDetailHeroProps) => {
  const align = imageAlign === "right" ? "object-right" : "object-left";

  return (
    <section className="relative overflow-hidden bg-[#f4f8fa]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(56vw,808px)] md:block">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 0px, 56vw"
          className={`object-cover ${align}`}
        />
      </div>
      <Container className="relative z-10 flex min-h-[280px] flex-col justify-between gap-10 py-10 md:min-h-[460px] md:py-10">
        <Link
          href={backHref}
          className="inline-flex w-fit items-center gap-2 rounded-lg py-3 text-base font-semibold leading-6 text-turquoise"
        >
          <img src={arrowSrc} alt="" width={24} height={24} />
          {backLabel}
        </Link>
        <h1 className="max-w-[608px] whitespace-pre-line font-manrope text-[32px] font-extrabold leading-[1.3] text-[#14234b] md:text-[40px] md:leading-[60px]">
          {title}
        </h1>
      </Container>
      <div className="relative mx-auto h-[220px] w-full max-w-[420px] md:hidden">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="420px"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default PaymentDetailHero;

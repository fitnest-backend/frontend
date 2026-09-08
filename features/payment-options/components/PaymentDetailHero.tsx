import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

type PaymentDetailHeroProps = {
  imageSrc: string;
  title: string;
  backLabel: string;
  backHref: string;
  arrowSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  lightText?: boolean;
};

const PaymentDetailHero = ({
  imageSrc,
  title,
  backLabel,
  backHref,
  arrowSrc = "/icons/abb-detail/arrow-left.svg",
  imageWidth = 1672,
  imageHeight = 941,
  lightText = false,
}: PaymentDetailHeroProps) => {
  return (
    <section className="relative">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <Container className="relative z-10 flex h-full flex-col justify-between gap-10 py-10">
          <Link
            href={backHref}
            className={cn(
              "inline-flex w-fit items-center gap-2 rounded-lg py-3 text-base font-semibold leading-6",
              lightText ? "text-cyan" : "text-turquoise",
            )}
          >
            <img src={arrowSrc} alt="" width={24} height={24} />
            {backLabel}
          </Link>
          <h1
            className={cn(
              "max-w-[608px] whitespace-pre-line font-manrope text-[32px] font-extrabold leading-[1.3] md:text-[40px] md:leading-[60px]",
              lightText ? "text-white" : "text-[#14234b]",
            )}
          >
            {title}
          </h1>
        </Container>
      </div>
    </section>
  );
};

export default PaymentDetailHero;

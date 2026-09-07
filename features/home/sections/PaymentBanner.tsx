"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

const SLIDES = ["curve", "wide"] as const;

const PaymentBanner = () => {
  const { t, locale } = useI18n();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [slide]);

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="relative min-h-[360px] md:min-h-[460px]">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 hidden transition-opacity duration-500 md:block",
            slide === 0 ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={slide !== 0}
        >
          <div className="absolute top-1/2 left-[42%] size-[min(82vw,1191px)] -translate-y-[46%] overflow-hidden rounded-full">
            <Image
              src="/images/home/abb-cards.png"
              alt=""
              fill
              className="object-cover object-[58%_42%]"
              sizes="(max-width: 768px) 0px, 80vw"
            />
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-0 hidden transition-opacity duration-500 md:block",
            slide === 1 ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={slide !== 1}
        >
          <div className="absolute inset-0 bg-[#1F5EFF]" />
          <Image
            src="/images/home/abb-cards.png"
            alt=""
            fill
            className="object-cover object-[72%_center]"
            sizes="(max-width: 768px) 0px, 100vw"
          />
          <div className="absolute inset-y-0 left-0 w-[48%] bg-gradient-to-r from-surface via-surface/95 to-transparent" />
        </div>

        <Container className="relative z-10 flex min-h-[360px] flex-col justify-between gap-10 py-16 md:min-h-[460px] md:py-20">
          <div className="max-w-[507px]">
            <p className="text-lg font-bold leading-7 text-turquoise">
              {t.home.paymentEyebrow}
            </p>
            <h2 className="mt-8 font-sora text-[32px] font-extrabold leading-[1.3] text-heading md:mt-16 md:text-[40px] md:leading-[60px]">
              {t.home.paymentHeading}
            </h2>
            <p className="mt-2 text-base leading-6 text-title">
              {t.home.paymentSubtitle}
            </p>
          </div>

          <div className="relative mx-auto h-[220px] w-full max-w-[420px] md:hidden">
            <Image
              src="/images/home/abb-cards.png"
              alt=""
              fill
              className="object-contain"
              sizes="420px"
            />
          </div>

          <div className="flex max-w-[507px] items-center justify-between gap-6">
            <Link
              href={addLocaleToPathname("/offers", locale)}
              className="inline-flex items-center gap-2 text-base font-semibold text-turquoise"
            >
              {t.home.details}
              <ArrowRight className="size-5" />
            </Link>
            <div className="flex items-center gap-3">
              {SLIDES.map((id, index) => (
                <button
                  key={id}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  aria-current={slide === index}
                  onClick={() => setSlide(index)}
                  className={cn(
                    "rounded-full transition-all",
                    slide === index
                      ? "size-4 bg-cyan"
                      : "size-3 bg-brand",
                  )}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PaymentBanner;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";
import HomeArrow from "../components/HomeArrow";
import PaymentEllipse from "@/features/payment-options/components/PaymentEllipse";

const SLIDES = [
  {
    id: "abb",
    ellipse: "/images/payment-options/abb-hero-ellipse.svg",
  },
  {
    id: "coin",
    ellipse: "/images/payment-options/coin-hero-dark.svg",
  },
  {
    id: "bob",
    ellipse: "/images/payment-options/bob-hero-ellipse.svg",
  },
] as const;

const PaymentBanner = () => {
  const { t, locale } = useI18n();
  const [slide, setSlide] = useState(0);
  const copy = {
    abb: {
      title: t.paymentOptions.abbTitle,
      subtitle: t.paymentOptions.abbDescription,
    },
    coin: {
      title: t.paymentOptions.coinTitle,
      subtitle: t.paymentOptions.coinDescription,
    },
    bob: {
      title: t.paymentOptions.bobTitle,
      subtitle: t.paymentOptions.bobDescription,
    },
  } as const;
  const current = SLIDES[slide];
  const currentCopy = copy[current.id];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((currentSlide) => (currentSlide + 1) % SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [slide]);

  return (
    <section className="relative overflow-hidden bg-surface">
      {SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            slide === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={slide !== index}
        >
          <PaymentEllipse src={item.ellipse} />
        </div>
      ))}

      <Container className="relative z-10 flex min-h-[280px] flex-col justify-between gap-8 py-10 md:min-h-[360px] md:py-12 lg:h-[clamp(400px,32vw,720px)]">
        <div className="relative max-w-[507px]">
          <p className="text-lg font-bold leading-7 text-turquoise">
            {current.id === "coin"
              ? t.paymentOptions.coinEyebrow
              : t.home.paymentEyebrow}
          </p>
          <h2 className="mt-4 whitespace-pre-line font-manrope text-[32px] font-extrabold leading-[1.3] text-heading md:mt-8 md:text-[40px] md:leading-[60px]">
            {currentCopy.title}
          </h2>
          <p className="mt-2 whitespace-pre-line text-base leading-6 text-title">
            {currentCopy.subtitle}
          </p>
        </div>

        <div className="flex max-w-[507px] items-center justify-between gap-6">
          <Link
            href={addLocaleToPathname("/payment-options", locale)}
            className="inline-flex items-center gap-2 text-base font-semibold text-turquoise transition-colors hover:text-cyan"
          >
            {t.home.details}
            <HomeArrow className="size-6" />
          </Link>
          <div className="flex items-center gap-3">
            {SLIDES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Slide ${index + 1}`}
                aria-current={slide === index}
                onClick={() => setSlide(index)}
                className={cn(
                  "cursor-pointer rounded-full transition-all",
                  slide === index
                    ? "size-4 bg-cyan"
                    : "size-3 bg-heading/40 hover:bg-heading/70",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaymentBanner;

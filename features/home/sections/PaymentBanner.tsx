"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: "abb",
    image: "/images/payment-options/abb.png",
    dark: false,
  },
  {
    id: "coin",
    image: "/images/payment-options/coin.png",
    dark: true,
  },
  {
    id: "bob",
    image: "/images/payment-options/bob.png",
    dark: false,
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
    <section
      className={cn(
        "relative overflow-hidden",
        current.dark ? "bg-brand-navy" : "bg-surface",
      )}
    >
      <div className="relative min-h-[360px] md:min-h-[460px]">
        {SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "pointer-events-none absolute inset-0 hidden transition-opacity duration-500 md:block",
              slide === index ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={slide !== index}
          >
            <Image
              src={item.image}
              alt=""
              fill
              className={cn(
                "object-cover object-right",
                item.id === "abb" && "dark:hidden",
              )}
              sizes="100vw"
            />
            {item.id === "abb" ? (
              <Image
                src="/images/home/abb-cards.png"
                alt=""
                fill
                className="hidden object-cover object-right dark:block"
                sizes="100vw"
              />
            ) : null}
            <div
              className={cn(
                "absolute inset-y-0 left-0 w-full md:w-[52%]",
                item.dark
                  ? "bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent"
                  : "bg-gradient-to-r from-surface via-surface/90 to-transparent",
              )}
            />
          </div>
        ))}

        <Container className="relative z-10 flex min-h-[360px] flex-col justify-between gap-10 py-16 md:min-h-[460px] md:py-20">
          <div className="max-w-[507px]">
            <p
              className={cn(
                "text-lg font-bold leading-7",
                current.dark ? "text-cyan" : "text-turquoise",
              )}
            >
              {current.id === "coin"
                ? t.paymentOptions.coinEyebrow
                : t.home.paymentEyebrow}
            </p>
            <h2
              className={cn(
                "mt-4 whitespace-pre-line font-sora text-[32px] font-extrabold leading-[1.3] md:mt-8 md:text-[40px] md:leading-[60px]",
                current.dark ? "text-white" : "text-heading",
              )}
            >
              {currentCopy.title}
            </h2>
            <p
              className={cn(
                "mt-2 whitespace-pre-line text-base leading-6",
                current.dark ? "text-desc" : "text-title",
              )}
            >
              {currentCopy.subtitle}
            </p>
          </div>

          <div className="relative mx-auto h-[200px] w-full max-w-[420px] md:hidden">
            <Image
              src={current.image}
              alt=""
              fill
              className={cn(
                "object-contain object-right",
                current.id === "abb" && "dark:hidden",
              )}
              sizes="420px"
            />
            {current.id === "abb" ? (
              <Image
                src="/images/home/abb-cards.png"
                alt=""
                fill
                className="hidden object-contain object-right dark:block"
                sizes="420px"
              />
            ) : null}
          </div>

          <div className="flex max-w-[507px] items-center justify-between gap-6">
            <Link
              href={addLocaleToPathname("/payment-options", locale)}
              className={cn(
                "inline-flex items-center gap-2 text-base font-semibold",
                current.dark ? "text-cyan" : "text-turquoise",
              )}
            >
              {t.home.details}
              <img src="/icons/home/arrow-right.svg" alt="" width={24} height={24} />
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
                    "rounded-full transition-all",
                    slide === index
                      ? "size-4 bg-cyan"
                      : current.dark
                        ? "size-3 bg-white/40"
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

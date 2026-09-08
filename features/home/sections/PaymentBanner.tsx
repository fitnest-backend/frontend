"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";
import HomeArrow from "../components/HomeArrow";

const SLIDES = [
  {
    id: "abb",
    image: "/images/payment-options/abb.png",
    dark: false,
    width: 1672,
    height: 941,
  },
  {
    id: "coin",
    image: "/images/payment-options/coin.png",
    dark: true,
    width: 1978,
    height: 795,
  },
  {
    id: "bob",
    image: "/images/payment-options/bob.png",
    dark: false,
    width: 1672,
    height: 941,
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
    <section className="relative">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${current.width} / ${current.height}` }}
      >
        {SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              slide === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={slide !== index}
          >
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}

        <Container className="relative z-10 flex h-full flex-col justify-between gap-8 py-12 md:py-16">
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
                "mt-4 whitespace-pre-line font-manrope text-[32px] font-extrabold leading-[1.3] md:mt-8 md:text-[40px] md:leading-[60px]",
                current.dark ? "text-white" : "text-brand",
              )}
            >
              {currentCopy.title}
            </h2>
            <p
              className={cn(
                "mt-2 whitespace-pre-line text-base leading-6",
                current.dark ? "text-desc" : "text-[#557c9f]",
              )}
            >
              {currentCopy.subtitle}
            </p>
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

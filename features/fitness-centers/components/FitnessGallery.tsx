"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

const FALLBACK_GALLERY = [
  "/images/gym-details/zal.png",
  "/images/gym-details/bar.png",
  "/images/gym-details/hamam.png",
  "/images/gym-details/thumbnails.png",
];

interface FitnessGalleryProps {
  images: string[];
  name: string;
  previousLabel: string;
  nextLabel: string;
}

const FitnessGallery = ({
  images,
  name,
  previousLabel,
  nextLabel,
}: FitnessGalleryProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides =
    images.length >= 2 ? images : [...images, ...FALLBACK_GALLERY].slice(0, 4);
  const showNav = slides.length > 1;

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="relative overflow-hidden rounded-2xl">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-[260px] w-full md:h-[520px]"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={`${img}-${index}`}>
              <div className="relative h-full w-full">
                <Image
                  src={img}
                  alt={`${name} ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1232px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showNav ? (
          <>
            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label={previousLabel}
              className="absolute left-4 top-1/2 z-10 flex size-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-white"
            >
              <img
                src="/icons/gym-details/chevron-left.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label={nextLabel}
              className="absolute right-4 top-1/2 z-10 flex size-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-white"
            >
              <img
                src="/icons/gym-details/chevron-right.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
          </>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {slides.map((image, index) => (
          <button
            key={`thumb-${image}-${index}`}
            type="button"
            onClick={() => swiperInstance?.slideTo(index)}
            className={`relative h-[110px] overflow-hidden rounded-xl md:h-[185px] ${
              activeIndex === index ? "ring-2 ring-turquoise" : "opacity-80 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt={`${name} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 302px"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FitnessGallery;

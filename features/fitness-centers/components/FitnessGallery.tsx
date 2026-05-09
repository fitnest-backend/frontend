"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface FitnessGalleryProps {
    images: string[];
    name: string;
}

const FitnessGallery = ({ images, name }: FitnessGalleryProps) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="space-y-5">
            <div className="relative group overflow-hidden rounded-3xl h-[260px] md:h-[520px]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="h-full w-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-full w-full">
                                <Image
                                    src={img}
                                    alt={`${name} gallery ${index}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, 1280px"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Button
                    onClick={() => swiperInstance?.slidePrev()}
                    size="icon"
                    className="absolute left-3 top-1/2 z-10 size-10 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50 md:left-5 md:size-14"
                >
                    <ChevronLeft className="size-6" />
                </Button>
                <Button
                    onClick={() => swiperInstance?.slideNext()}
                    size="icon"
                    className="absolute right-3 top-1/2 z-10 size-10 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50 md:right-5 md:size-14"
                >
                    <ChevronRight className="size-6" />
                </Button>
            </div>

            <div className="grid grid-cols-5 gap-3 md:gap-6">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => swiperInstance?.slideTo(index)}
                        className={`relative h-20 md:h-[180px] overflow-hidden rounded-xl transition-all duration-300 ${activeIndex === index
                                ? "ring-4 ring-[#C6A7F5] scale-95"
                                : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`${name} thumb ${index}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 25vw, 300px"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FitnessGallery;
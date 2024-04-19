"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import i1 from "@/public/assets/i1.jpg";
import i2 from "@/public/assets/i2.jpg";
import i3 from "@/public/assets/i3.jpeg";
import i4 from "@/public/assets/i4.jpg";
import i5 from "@/public/assets/i5.jpg";
import i7 from "@/public/assets/i7.webp";

import Image from "next/image";

function ImageSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center pt-14  text-black">
      <div className="w-2/3  md:w-1/2 ">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                src={i1}
                className="cursor-pointer border-2 border-black rounded-3xl w-full h-full object-cover"
                alt="InfiniteHealings image 1"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={i2}
                className="cursor-pointer border-2 border-black rounded-3xl w-full h-full object-cover"
                alt="InfiniteHealings image 2"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={i3}
                className="cursor-pointer border-2 border-black rounded-3xl w-full h-full object-cover"
                alt="InfiniteHealings image 3"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={i4}
                className="cursor-pointer border-2 border-black rounded-3xl w-full h-full object-cover"
                alt="InfiniteHealings image 3"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={i5}
                className="cursor-pointer border-2 border-black rounded-3xl w-full h-full object-cover"
                alt="InfiniteHealings image 3"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={i7}
                className="cursor-pointer border-2 border-black rounded-3xl w-full h-full object-cover"
                alt="InfiniteHealings image 3"
              ></Image>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="px-4 pt-8 text-lg md:text-2xl font-normal text-center">
        At InfiniteHealings, we believe in the beauty of healing and the
        strength it brings to your soul.
      </div>
    </div>
  );
}

export default ImageSection;

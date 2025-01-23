"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import coolBox from "@/public/cool-box.svg";
import delayBox from "@/public/delay-box.svg";
import dottedBox from "@/public/dotted-box.svg";
import ultrathinBox from "@/public/ultrathin.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmblaCarousel({ children }) {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      {children}
      <div id="products" className="embla">
        <div className="embla__viewport max-w-sm mx-auto" ref={emblaRef}>
          <div className="embla__container h-full">
            <div className="embla__slide">
              <Image
                src={ultrathinBox}
                priority
                alt="ultra thin box"
                className="h-full"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={delayBox}
                priority
                alt="delay box"
                className="h-full"
              />
            </div>
            <div className="embla__slide">
              <Image src={coolBox} priority alt="cool box" className="h-full" />
            </div>
            <div className="embla__slide">
              <Image
                src={dottedBox}
                priority
                alt="dotted box"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

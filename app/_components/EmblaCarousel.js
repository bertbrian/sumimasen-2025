"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import coolBox from "@/public/cool-box.svg";
import delayBox from "@/public/delay-box.svg";
import dottedBox from "@/public/dotted-box.svg";
import ultrathinBox from "@/public/ultrathin.svg";
import Image from "next/image";
import Modal from "./Modal";

export default function EmblaCarousel({ children }) {
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
      <div id="products" className="embla py-6">
        <div className="embla__viewport mx-auto max-w-sm" ref={emblaRef}>
          <div className="embla__container h-full">
            <div className="embla__slide cursor-pointer">
              <Modal variant="ultrathin">
                <Image
                  src={ultrathinBox}
                  priority
                  alt="ultra thin box"
                  className="h-full"
                />
              </Modal>
            </div>

            <div className="embla__slide cursor-pointer">
              <Modal variant="delay">
                <Image
                  src={delayBox}
                  priority
                  alt="delay box"
                  className="h-full"
                />
              </Modal>
            </div>
            <div className="embla__slide cursor-pointer">
              <Modal variant="cool">
                <Image
                  src={coolBox}
                  priority
                  alt="cool box"
                  className="h-full"
                />
              </Modal>
            </div>
            <div className="embla__slide cursor-pointer">
              <Modal variant="dotted">
                <Image
                  src={dottedBox}
                  priority
                  alt="dotted box"
                  className="h-full"
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

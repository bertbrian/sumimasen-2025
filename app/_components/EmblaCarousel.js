"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import Image from "next/image";
import Modal from "./Modal";
import ultrasafe from "@/public/Ultra Safe.jpeg";
import ultrathinBox from "@/public/Ultra Thin.png";
import dottedBox from "@/public/Dotted.png";
import coolBox from "@/public/Cool.png";
import delayBox from "@/public/Delay.png";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div id="products" className="embla py-6">
      <div
        className="embla__viewport mx-auto max-w-sm rounded-2xl"
        ref={emblaRef}
      >
        <div className="embla__container h-full select-none">
          <div className="embla__slide -z-10 cursor-pointer">
            <Modal variant="ultrasafe">
              <Image
                src={ultrasafe}
                width={400}
                height={400}
                priority
                alt="ultra safe"
                className="scale-125"
              />
            </Modal>
          </div>
          <div className="embla__slide cursor-pointer">
            <Modal variant="ultrathin">
              <Image
                src={ultrathinBox}
                width={400}
                height={400}
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
                width={400}
                height={400}
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
                width={400}
                height={400}
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
                width={400}
                height={400}
                priority
                alt="dotted box"
                className="h-full"
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

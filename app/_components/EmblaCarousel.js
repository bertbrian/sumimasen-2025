"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import Image from "next/image";
import Modal from "./Modal";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  //image url
  const coolBox =
    "https://pamfuuctmarnncksxvym.supabase.co/storage/v1/object/public/product-images/cool-box.svg";
  const delayBox =
    "https://pamfuuctmarnncksxvym.supabase.co/storage/v1/object/public/product-images/delay-box.svg";
  const dottedBox =
    "https://pamfuuctmarnncksxvym.supabase.co/storage/v1/object/public/product-images/dotted-box.svg";
  const ultrathinBox =
    "https://pamfuuctmarnncksxvym.supabase.co/storage/v1/object/public/product-images/ultrathin.svg";
  const ultrasafe =
    "https://pamfuuctmarnncksxvym.supabase.co/storage/v1/object/public/product-images/ultrasafe.svg";

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div id="products" className="embla py-6">
      <div className="embla__viewport mx-auto max-w-sm" ref={emblaRef}>
        <div className="embla__container h-full select-none">
          <div className="embla__slide cursor-pointer">
            <Modal variant="ultrasafe">
              <Image
                src={ultrasafe}
                width={400}
                height={400}
                priority
                alt="ultra safe"
                className="ml-4 mt-10 scale-125"
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

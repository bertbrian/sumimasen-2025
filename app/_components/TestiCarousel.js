"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import coolBox from "@/public/cool-box.svg";
import delayBox from "@/public/delay-box.svg";
import dottedBox from "@/public/dotted-box.svg";
import ultrathinBox from "@/public/ultrathin.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const reviews = [
  {
    name: "Home",
    href: "/account",
    // icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Print Receipt",
    href: "/account/reservations",
    // icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    // icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

export default function TestiCarousel({ children }) {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      {children}
      <div className="embla" dir="rtl">
        <div
          className="embla__viewport mx-auto mt-12 h-56 max-w-sm flex"
          ref={emblaRef}
        >
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
                alt="ultra thin box"
                className="h-full"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={coolBox}
                priority
                alt="ultra thin box"
                className="h-full"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={dottedBox}
                priority
                alt="ultra thin box"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

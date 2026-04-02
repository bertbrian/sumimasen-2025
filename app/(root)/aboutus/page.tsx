import Image from "next/image";

import mascotStrong from "@/public/mascot-strong.png";
import mascotHi from "@/public/mascot-hi.png";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "About Us",
};

export default function Page() {
  return (
    <section id="aboutus" className="pt-4 lg:pt-12">
      <div className="container mx-auto px-6 lg:space-y-0 pb-8">
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 items-center pt-6">
          <div>
            <h3 className="text-center lg:text-left text-3xl font-semibold lg:text-4xl pb-4">
              About Us
            </h3>
            <p className="text-lg text-center w-full lg:text-justify lg:px-0 lg:w-full lg:text-xl leading-relaxed">
              <b>PT SUMIMASEN TETRAJAYA INDONESIA</b> is a importer and
              distributor of high-quality condoms dedicated to provide
              individuals with reliable protection and peace of mind.
            </p>
          </div>
          <div className="h-full size-1/2 lg:size-1/4">
            <Image
              src={mascotHi}
              alt="mascott-hi"
              placeholder="blur"
              width={300}
              height={700}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:space-y-0 py-8">
        <div className="flex flex-col-reverse space-y-4 space-y-reverse lg:flex-row lg:space-y-0 lg:space-x-4 space-x-0 items-end pt-6 leading-relaxed">
          <div className="hidden lg:block h-full size-3/4 px-8">
            <Image
              src={mascotStrong}
              alt="mascott-strong"
              placeholder="blur"
              width={300}
              height={700}
            />
          </div>

          <div>
            <h3 className="text-center lg:text-right text-3xl font-semibold lg:text-4xl pb-4">
              Mission
            </h3>
            <p className="text-lg text-center lg:leading-normal w-full px-4 lg:text-justify lg:px-0 lg:m-0 lg:w-full lg:text-xl">
              to empower individuals to make informed choices about their sexual
              health by offering a wide range of high-quality condoms that are
              effective, comfortable, and affordable. We believe that everyone
              deserves access to reliable protection to enjoy healthy and
              fulfilling relationships. <br /> we prioritize quality and safety
              in all our products. Our condoms undergo rigorous testing to meet
              international standards for strength, durability, and
              effectiveness. We use premium materials and advanced manufacturing
              processes to ensure that each condom provides reliable protection
              against sexually transmitted infections and unintended
              pregnancies.
            </p>
          </div>
        </div>
        <div className="text-lg text-center lg:leading-normal w-full px-4 lg:text-justify lg:px-0 lg:w-full lg:text-xl"></div>
      </div>

      <div className="container mx-auto px-8 flex flex-col-reverse items-center space-y-8 space-y-reverse text-center lg:text-left lg:text-2xl lg:flex-col lg:space-y-4 lg:items-start py-20 text-lg">
        <div className="flex flex-col justify-center items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-3">
          <MapPinIcon className="w-[30px]" />
          <p>Jakarta, Indonesia</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-3">
          <PhoneIcon className="w-[30px]" />
          <p>+62-851-7968-6686</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-3">
          <Link href="mailto:sumimasentetrajayaid@gmail.com">
            <EnvelopeIcon className="w-[30px]" />
          </Link>
          <p>
            <Link href="mailto:sumimasentetrajayaid@gmail.com">
              sumimasentetrajayaid@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

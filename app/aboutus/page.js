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
      <div className="container mx-auto px-6 lg:space-y-0">
        <h3 className="text-center text-4xl font-semibold lg:text-6xl">
          About Us
        </h3>

        <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-8 items-center pt-6">
          <p className="text-lg text-center w-full px-4 lg:text-justify lg:px-0 lg:w-full lg:text-xl leading-relaxed">
            <b>PT SUMIMASEN TETRAJAYA INDONESIA</b> is a importer and
            distributor of high-quality condoms dedicated to provide individuals
            with reliable protection and peace of mind.
          </p>
          <div className="relative size-[50%] lg:size-1/4">
            <Image src={mascotHi} alt="mascott-hi" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:space-y-0 py-8">
        <h3 className="text-center text-4xl font-semibold lg:text-6xl">
          Mission
        </h3>

        <div className="flex flex-col-reverse space-y-4 space-y-reverse lg:flex-row lg:space-y-0 items-center pt-6 leading-relaxed">
          <div className="hidden relative lg:flex lg:size-1/4 size-20">
            <Image src={mascotStrong} alt="mascott-strong" />
          </div>
          <p className="text-lg text-center lg:leading-normal w-full px-4 lg:text-justify lg:px-0 lg:m-0 lg:w-full lg:text-xl">
            to empower individuals to make informed choices about their sexual
            health by offering a wide range of high-quality condoms that are
            effective, comfortable, and affordable. We believe that everyone
            deserves access to reliable protection to enjoy healthy and
            fulfilling relationships.
          </p>
        </div>
        <div className="text-lg text-center lg:leading-normal w-full px-4 lg:text-justify lg:px-0 lg:w-full lg:text-xl">
          <p>
            we prioritize quality and safety in all our products. Our condoms
            undergo rigorous testing to meet international standards for
            strength, durability, and effectiveness. We use premium materials
            and advanced manufacturing processes to ensure that each condom
            provides reliable protection against sexually transmitted infections
            and unintended pregnancies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-8 flex flex-col-reverse items-center space-y-8 space-y-reverse text-center lg:text-left lg:text-2xl lg:flex-col lg:space-y-4 lg:items-start py-6 text-lg">
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

import logoText from "@/public/logo-cropped.svg";
import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";
import Partner from "./Partner";

export default function Hero() {
  return (
    <section id="hero">
      <div className="max-w-7xl flex flex-col mx-auto md:flex-row md:justify-around md:p-6 md:mb-20 md:mt-16 ">
        <div>
          <Image
            src={logoText}
            alt="logo-text"
            width={500}
            className="block mx-auto select-none aspect-auto"
          />
          <h1 className="gradient-text text-xl md:text-2xl font-semibold text-center lg:text-2xl uppercase select-none">
            #BeSafeorBeSorry
          </h1>
          <div className="text-center pt-3.5 mt-3.5 gap-4 flex justify-center">
            <button className="w-44 text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-violet-300 shadow-lg shadow-violet-500/50 font-medium rounded-full text-xl px-4 py-2 text-center">
              Buy Now
            </button>
            <button className="w-44 text-white hover:bg-gradient-to-l outline-violet-400 outline shadow-lg shadow-violet-500/50 font-medium rounded-full text-xl px-4 py-2 text-center">
              Open Reseller
            </button>
          </div>
          <div>
            <Partner />
          </div>
        </div>
        <EmblaCarousel />
      </div>
    </section>
  );
}

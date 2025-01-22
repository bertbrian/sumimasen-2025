import logoText from "@/public/logo-cropped.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero">
      {/*<!-- Container For Image & Content -->*/}

      <div className="container flex flex-col mx-auto md:p-6 md:mb-20 md:mt-16">
        <Image
          src={logoText}
          alt="logo-text"
          className="block mx-auto size-3/4 lg:size-1/2"
        />

        <div className="flex flex-col my-4 lg:mb-10 justify-center">
          <h1 className="gradient-text text-xl md:text-2xl font-semibold text-center lg:text-2xl uppercase select-none">
            #BeSafeorBeSorry
          </h1>
        </div>

        <div
          id="products-mobile"
          className="flex flex-col mx-auto space-y-4 p-6 pb-24 md:pb-0 lg:flex-row lg:space-x-12 lg:space-y-0"
        >
          <a
            href="https://www.tokopedia.com/sumimasen-indonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-full text-2xl px-5 py-2.5 text-center me-2"
          >
            Tokopedia
          </a>
          <a
            href="https://s.shopee.co.id/AKGSwFHnL3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-orange-300 shadow-lg shadow-orange-500/50 font-medium rounded-full text-2xl px-5 py-2.5 text-center me-2"
          >
            Shopee
          </a>
          <a
            href="https://s.lazada.co.id/s.wR7pu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-violet-300 shadow-lg shadow-violet-500/50 font-medium rounded-full text-2xl px-5 py-2.5 text-center me-2"
          >
            Lazada
          </a>
        </div>
      </div>
    </section>
  );
}

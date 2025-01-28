import logoText from "@/public/logo-cropped.svg";
import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";
import Partner from "./Partner";
import Modal from "./Modal";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="max-w-7xl flex flex-col mx-auto md:flex-row md:justify-around md:p-6 md:mb-10 md:mt-8 ">
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
            <Modal isBuyNow={true}>
              <button className="w-44 text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-violet-300 shadow-lg shadow-violet-500/50 font-medium rounded-full text-xl px-4 py-2 text-center">
                Buy Now
              </button>
            </Modal>
            <Link
              href="https://wa.me/+6285179686686?text=Hai%20sumin%2C%20saya%20tertarik%20menjadi%20Reseller%2C%20apa%20saja%20syaratnya%3F%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-44 text-white hover:bg-gradient-to-l outline-violet-400 outline shadow-lg shadow-violet-500/50 font-medium rounded-full text-xl px-4 py-2 text-center">
                Open Reseller
              </button>
            </Link>
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

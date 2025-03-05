import logoText from "@/public/logo-cropped.svg";
import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";
import Partner from "./Partner";
import Modal from "./Modal";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto flex max-w-7xl flex-col md:mb-10 md:mt-8 md:flex-row md:justify-around md:p-6">
        <div>
          <Image
            src={logoText}
            alt="logo-text"
            width={500}
            className="mx-auto block aspect-auto select-none"
          />
          <h1 className="gradient-text select-none text-center text-xl font-semibold uppercase md:text-2xl lg:text-2xl">
            #BeSafeorBeSorry
          </h1>
          <div className="mt-3.5 flex justify-center gap-4 pt-3.5 text-center">
            <Modal isBuyNow={true}>
              <button className="w-44 rounded-full bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-4 py-2 text-center text-xl font-medium text-white shadow-lg shadow-violet-500/50 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-violet-300">
                Buy Now
              </button>
            </Modal>
            <Link
              href="https://wa.me/+6285179686686?text=Hai%20sumin%2C%20saya%20tertarik%20menjadi%20Reseller%2C%20apa%20saja%20syaratnya%3F%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-44 rounded-full px-4 py-2 text-center text-xl font-medium text-white shadow-lg shadow-violet-500/50 outline outline-violet-400 hover:bg-gradient-to-l">
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

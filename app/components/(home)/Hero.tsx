import logoText from "@/public/logo-cropped.svg";
import Image from "next/image";
import Modal from "../shared/Modal";
import Partner from "../shared/Partner";
import EmblaCarousel from "../shared/product/EmblaCarousel";

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto flex max-w-7xl flex-col md:mt-8 md:mb-10 md:flex-row md:justify-around md:p-6">
        <div>
          <Image
            src={logoText}
            alt="logo-text"
            width={500}
            className="mx-auto block aspect-auto select-none"
          />
          <h1 className="gradient-text text-center text-xl font-semibold uppercase select-none md:text-2xl lg:text-2xl">
            #BeSafeorBeSorry
          </h1>
          <div className="mt-3.5 flex justify-center gap-4 pt-3.5 text-center">
            <Modal isBuyNow={true}>Buy Now</Modal>
          </div>
          <Partner />
        </div>
        <EmblaCarousel />
      </div>
    </section>
  );
}

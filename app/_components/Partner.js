import trisaktiImg from "@/public/partnerships/apotek-trisakti.png";
import nesFarmaImg from "@/public/partnerships/NesFarma.png";
import favoLogo from "@/public/partnerships/favoLogo.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section id="partner">
      <div className="mb-4 mt-8 grid grid-cols-1 gap-2 text-center">
        <small className="text-center">Our Official Partners</small>
        <div className="flex items-center justify-center space-x-2">
          <Link href="https://g.co/kgs/JQrH4wJ">
            <Image
              src={trisaktiImg}
              alt="trisakti logo"
              width={96}
              height={96}
              className="mx-auto h-auto rounded-lg"
            />
          </Link>
          <Link href="https://share.google/3YvN0rA4Dgly1Bu0f">
            <Image
              src={nesFarmaImg}
              alt="Apotek Nes Farma"
              width={85}
              height={85}
              className="mx-auto h-auto rounded-lg"
            />
          </Link>
          <Link href="https://favo.id/collections/sumimasen">
            <Image
              src={favoLogo}
              alt="Favo"
              width={100}
              height={100}
              className="mx-auto h-auto rounded-lg"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

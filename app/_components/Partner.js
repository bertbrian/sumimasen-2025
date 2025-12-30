import trisaktiImg from "@/public/partnerships/apotek-trisakti.png";
import nesFarmaImg from "@/public/partnerships/NesFarma.png";
import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section id="partner">
      <div className="mt-8 text-center">
        <small className="text-center">Our Official Partners</small>

        <div className="flex items-center justify-center gap-2">
          <Link href="https://g.co/kgs/JQrH4wJ">
            <Image
              src={trisaktiImg}
              alt="trisakti logo"
              width={20}
              height={20}
              sizes="full"
              className="m-2 mx-auto h-auto w-24 rounded-lg"
            />
          </Link>
          <Link href="https://share.google/3YvN0rA4Dgly1Bu0f">
            <Image
              src={nesFarmaImg}
              alt="Apotek Nes Farma"
              width={30}
              height={30}
              sizes="full"
              className="m-2 mx-auto h-auto w-24 rounded-lg"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

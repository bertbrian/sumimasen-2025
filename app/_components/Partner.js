import trisaktiImg from "@/public/partnerships/apotek-trisakti.png";
import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section id="partner">
      <div className="mt-8 text-center">
        <small className="text-center">Our Official Partners</small>
        <Link href="https://g.co/kgs/JQrH4wJ">
          <Image
            src={trisaktiImg}
            width={80}
            height={80}
            alt="trisakti logo"
            className="mx-auto m-2 rounded-lg max-w-md aspect-auto"
          />
        </Link>
      </div>
    </section>
  );
}

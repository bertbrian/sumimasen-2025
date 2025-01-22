import trisaktiImg from "@/public/partnerships/apotek-trisakti.png";
import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section id="partner">
      <h3 className="text-center text-4xl font-semibold lg:text-6xl">
        Our Partner
      </h3>
      <div className="p-4 mb-8">
        <Link href="https://g.co/kgs/JQrH4wJ">
          <Image
            src={trisaktiImg}
            alt="Privasi Aman"
            className="size-[30%] mx-auto m-4 rounded-lg max-w-md"
          />
        </Link>
      </div>
    </section>
  );
}

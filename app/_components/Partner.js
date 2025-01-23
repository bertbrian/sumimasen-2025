import trisaktiImg from "@/public/partnerships/apotek-trisakti.png";
import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section id="partner">
      {/* <h3 className="text-center text-4xl font-semibold lg:text-6xl">
        Our Partner
      </h3> */}
      <div className="p-4 mb-8">
        <Link href="https://g.co/kgs/JQrH4wJ">
          <Image
            src={trisaktiImg}
            width={100}
            height={100}
            alt="Privasi Aman"
            className="mx-auto m-4 rounded-lg max-w-md aspect-auto"
          />
        </Link>
      </div>
    </section>
  );
}

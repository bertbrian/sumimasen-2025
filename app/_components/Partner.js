import trisaktiImg from "@/public/partnerships/apotek-trisakti.png";
import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section id="partner">
      <div className="mt-8 text-center">
        <small className="text-center">Our Official Partners</small>

        <div className="flex justify-center">
          <Link href="https://g.co/kgs/JQrH4wJ">
            <Image
              src={trisaktiImg}
              alt="trisakti logo"
              width={20}
              height={20}
              sizes="full"
              className="m-2 rounded-lg w-20 h-auto mx-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

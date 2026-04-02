import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={logo}
        width={100}
        quality={80}
        alt="Yuta - Sumimasen Mascot"
        className="w-12 md:w-20"
      />
    </Link>
  );
}

export default Logo;

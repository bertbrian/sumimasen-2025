import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image src={logo} width="60" height="60" alt="Yuta - Sumimasen Mascot" />
    </Link>
  );
}

export default Logo;

import icon from "@/public/footer/icon-whatsapp.svg";
import Image from "next/image";
import Link from "next/link";

const href =
  "https://wa.me/+6285179686686?text=Halo%20Sumin%2C%20saya%20mau%20tanya";
function WhatsAppSide() {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-[20dvh] right-0 z-50 inline-flex rounded-s-md bg-violet-700 p-3">
        <Image
          src={icon}
          width={20}
          height={20}
          alt={icon}
          className="size-10"
        />
      </div>
    </Link>
  );
}

export default WhatsAppSide;

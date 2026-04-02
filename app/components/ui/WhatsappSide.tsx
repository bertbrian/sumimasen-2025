import Link from "next/link";
import Image from "next/image";
import { WhatsappHref, WAIcon } from "@/app/lib/constants";

export default function WhatsAppSide() {
  return (
    <Link href={WhatsappHref} target="_blank" rel="noopener noreferrer">
      <div className="fixed right-0 bottom-[20dvh] z-50 inline-flex rounded-s-md bg-violet-700 p-3">
        <Image
          src={WAIcon}
          width={20}
          height={20}
          alt={WAIcon}
          className="size-10"
        />
      </div>
    </Link>
  );
}

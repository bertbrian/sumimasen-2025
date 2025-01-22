import Link from "next/link";
import Image from "next/image";

import iconShopee from "@/public/footer/iconShopee.svg";
import iconinstagram from "@/public/footer/icon-instagram.svg";
import iconTwitter from "@/public/footer/icon-twitter.svg";
import iconTiktok from "@/public/footer/icon-tiktok.svg";
import iconLazada from "@/public/footer/icon-lazada.webp";
import iconWhatsapp from "@/public/footer/icon-whatsapp.svg";

export default function Footer() {
  return (
    <footer className="py-6 ">
      {/*<!-- Footer Flex Container -->*/}
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
        {/*<!-- Social Container -->*/}
        <div className="flex space-x-10">
          <Link
            href="https://s.shopee.co.id/AKGSwFHnL3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={iconShopee}
              alt="icon-shopee"
              className="size-6 ficon"
            />
          </Link>
          <Link
            href="https://x.com/sumimasen_id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={iconTwitter}
              alt="icon-twitter"
              className="size-6 ficon"
            />
          </Link>
          <Link
            href="https://www.instagram.com/sumimasen_id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={iconinstagram}
              alt="icon-instagram"
              className="size-6 ficon"
            />
          </Link>
          <Link
            href="https://tiktok.com/@sumimasen_id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={iconTiktok}
              alt="icon-tiktok"
              className="size-6 ficon"
            />
          </Link>
          <Link
            href="https://s.lazada.co.id/s.wR7pu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={iconLazada} alt="Lazada" className="h-6 w-7 ficon" />
          </Link>
          <Link
            href="https://wa.me/+6285179686686"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={iconWhatsapp} alt="whatsapp" className="size-6 ficon" />
          </Link>
        </div>
        {/*<!-- Logo-cropped/Menu Container -->*/}
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
          <small>© 2023, Sumimasen, Inc. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

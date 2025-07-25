import Image from "next/image";
import Link from "next/link";

import footerLogos from "@/app/db/footerLogos.json";

export default function Footer() {
  return (
    <footer className="py-6">
      {/*<!-- Footer Flex Container -->*/}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0">
        {/*<!-- Social Container -->*/}
        <div className="flex space-x-10">
          {footerLogos.map((icon) => (
            <Link
              key={icon.name}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                width={20}
                height={20}
                alt={icon.src}
                className="ficon h-6 w-7"
              />
            </Link>
          ))}
        </div>
        {/*<!-- Logo-cropped/Menu Container -->*/}
        {/* <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue"> */}
        <div className="flex flex-col text-center md:justify-end md:text-right">
          <small>Made with ❤️ from Sumimasen</small>
          <small>© 2023, Sumimasen, Inc. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

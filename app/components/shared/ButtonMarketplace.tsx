import productLinks from "@/app/db/productLinks.json";
import { Variant } from "@/types";

import Link from "next/link";

export default function ButtonMarketplace({ variant }: { variant: Variant }) {
  return (
    <div className="grid gap-4 select-none">
      <Link
        href={productLinks[variant].tokopedia}
        target="_blank"
        rel="noopener noreferrer"
        className="me-2 rounded-full bg-linear-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-xl font-medium text-white shadow-lg shadow-green-500/30 transition hover:bg-linear-to-l focus:ring-4 focus:ring-green-300 focus:outline-none"
      >
        Tokopedia
      </Link>
      <Link
        href={productLinks[variant].shopee}
        target="_blank"
        rel="noopener noreferrer"
        className="me-2 rounded-full bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 px-5 py-2 text-center text-xl font-medium text-white shadow-lg shadow-orange-500/30 hover:bg-linear-to-l focus:ring-4 focus:ring-orange-300 focus:outline-none"
      >
        Shopee
      </Link>
      <Link
        href={productLinks[variant].lazada}
        target="_blank"
        rel="noopener noreferrer"
        className="me-2 rounded-full bg-linear-to-r from-violet-400 via-violet-500 to-violet-600 px-5 py-2 text-center text-xl font-medium text-white shadow-lg shadow-violet-500/30 hover:bg-linear-to-l focus:ring-4 focus:ring-violet-300 focus:outline-none"
      >
        Lazada
      </Link>
    </div>
  );
}

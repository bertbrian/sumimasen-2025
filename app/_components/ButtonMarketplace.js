import productLinks from "@/app/db/productLinks.json";
import Link from "next/link";

export default function ButtonMarketplace({ variant }) {
  return (
    <div className="grid select-none gap-4">
      <Link href={productLinks[variant].tokopedia} passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="me-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2 text-center text-xl font-medium text-white shadow-lg shadow-green-500/30 transition hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Tokopedia
        </a>
      </Link>
      <Link href={productLinks[variant].shopee} passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="me-2 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-5 py-2 text-center text-xl font-medium text-white shadow-lg shadow-orange-500/30 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Shopee
        </a>
      </Link>
      <Link href={productLinks[variant].lazada} passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="me-2 rounded-full bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-5 py-2 text-center text-xl font-medium text-white shadow-lg shadow-violet-500/30 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-violet-300"
        >
          Lazada
        </a>
      </Link>
    </div>
  );
}

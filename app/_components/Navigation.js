import Image from "next/image";
import Link from "next/link";
import { auth } from "../_lib/auth";

const navLinks = [
  // {
  //   name: "Products",
  //   href: "/products",
  // },
  {
    name: "About us",
    href: "/aboutus",
  },
  {
    name: "Certification",
    href: "/certification",
  },
  {
    name: "Fun walk",
    href: "/funwalk",
  },
];

export default async function Navigation() {
  const session = await auth();

  return (
    <div className="hidden items-center space-x-8 uppercase lg:flex">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="tracking-widest hover:text-violet-400"
        >
          <span>{link.name}</span>
        </Link>
      ))}
      {session?.user?.image ? (
        <Link
          href="./account"
          className="flex items-center gap-2 tracking-widest hover:text-blue-300"
        >
          <Image
            className="size-8 rounded-full"
            src={session.user.image}
            alt={session.user.name}
            width={80}
            height={80}
            referrerPolicy="no-referrer"
          />
          <span>{session.user.name}</span>
        </Link>
      ) : (
        <Link
          href="./account"
          className="hidden tracking-widest hover:text-blue-300"
        >
          Account
        </Link>
      )}
      {!session?.user && (
        <Link
          href="https://wa.me/+6285179686686?text=Hai%20sumin%2C%20saya%20tertarik%20menjadi%20Reseller%2C%20apa%20saja%20syaratnya%3F%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="me-2 w-48 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Open Reseller
        </Link>
      )}
    </div>
  );
}

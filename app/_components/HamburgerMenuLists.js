import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HamburgerMenuLists({ toggled, toggle, onclicklink }) {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    // {
    //   name: "Products",
    //   href: "/#products",
    // },
    {
      name: "About Us",
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

  return (
    <nav className="fixed right-0 top-0 z-10 h-screen w-full rounded-md bg-gray-900/80 py-16">
      <ul className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white">
        <li className="absolute right-4 top-8">
          <Hamburger size={30} toggled={toggled} toggle={toggle} />
        </li>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`hover:text-primary-100 text-primary-200 flex items-center gap-4 px-5 font-semibold transition-colors ${
                pathname === link.href ? "text-violet-400" : ""
              }`}
              href={link.href}
              onClick={onclicklink}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

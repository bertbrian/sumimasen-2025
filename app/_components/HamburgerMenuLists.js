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
    {
      name: "Products",
      href: "/#products",
    },
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
    <nav className="fixed top-0 right-0 w-full py-16 h-screen z-10 bg-gray-900/80 rounded-md">
      <ul className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
        <li className="absolute top-8 right-4">
          <Hamburger size={30} toggled={toggled} toggle={toggle} />
        </li>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`px-5 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
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

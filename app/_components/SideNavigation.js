"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="text-primary-600 h-5 w-5" />,
  },
  {
    name: "Print Receipt",
    href: "/account/printbill",
    icon: <CalendarDaysIcon className="text-primary-600 h-5 w-5" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="text-primary-600 h-5 w-5" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-slate-400/10 pt-4">
      <ul className="flex h-full flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`hover:text-primary-100 flex items-center gap-4 rounded px-5 py-3 font-semibold transition-colors hover:bg-slate-200/10 ${
                pathname === link.href ? "bg-slate-200/10" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;

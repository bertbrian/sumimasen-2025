"use client";
import Hamburger from "hamburger-react";
import { useState } from "react";
import HamburgerMenuLists from "./HamburgerMenuLists";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden focus:outline-none hamburger">
      <Hamburger size={30} toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <HamburgerMenuLists
          toggled={isOpen}
          toggle={setIsOpen}
          onclicklink={(open) => setIsOpen(!open)}
        />
      )}
    </div>
  );
}

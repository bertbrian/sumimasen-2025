"use client";
import { Description, Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import links from "@/app/db/links.json";

import LinkNewTab from "./LinkNewTab";
import ModalProduct from "./ModalProduct";
import { Variant } from "@/types";

interface ModalProps {
  variant?: Variant;
  isBuyNow?: boolean; // Made optional since you have a default
  children: React.ReactNode;
}

interface SocialLink {
  url: string;
  name: string;
  icon: string;
}

export default function Modal({
  children,
  variant,
  isBuyNow = false,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`${isBuyNow && "w-52 cursor-pointer rounded-full bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 px-4 py-2 text-center text-xl font-medium text-white shadow-lg shadow-violet-500/50 hover:bg-gradient-to-l focus:ring-4 focus:ring-violet-300 focus:outline-none"}`}
      >
        {children}
      </button>
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="max-w-lg grow space-y-4 rounded-md bg-slate-600/65 p-8 backdrop-blur duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="flex items-center justify-between">
              <XMarkIcon
                className="absolute top-4 right-4 size-8 cursor-pointer"
                onClick={closeModal}
              />
            </div>
            {isBuyNow ? (
              <>
                <Description>
                  <span className="flex justify-center text-center text-xl font-semibold capitalize">
                    our official stores :
                  </span>
                </Description>
                <div className="grid justify-center gap-4 text-center md:flex md:items-end md:gap-12 md:p-4 md:px-8">
                  {links.map((link: SocialLink) => (
                    <LinkNewTab
                      href={link.url}
                      onClick={closeModal}
                      key={link.name}
                      icon={link.icon}
                    >
                      {link.name}
                    </LinkNewTab>
                  ))}
                </div>
              </>
            ) : (
              variant && <ModalProduct variant={variant} />
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

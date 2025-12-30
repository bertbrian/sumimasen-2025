"use client";
import { Description, Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import LinkNewTab from "./LinkNewTab";

import links from "@/app/db/links.json";

import ModalProduct from "./ModalProduct";

export default function Modal({ children, variant, isBuyNow = false }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a onClick={() => setIsOpen(true)}>{children}</a>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="max-w-lg grow space-y-4 rounded-md bg-slate-600/65 p-8 backdrop-blur duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="flex items-center justify-between">
              <XMarkIcon
                className="absolute right-4 top-4 size-8 cursor-pointer"
                onClick={() => setIsOpen(false)}
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
                  {links.map((link) => (
                    <LinkNewTab
                      href={link.url}
                      onClick={() => setIsOpen(false)}
                      key={link.name}
                      icon={link.icon}
                    >
                      {link.name}
                    </LinkNewTab>
                  ))}
                </div>
              </>
            ) : (
              <>
                <ModalProduct variant={variant} />
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

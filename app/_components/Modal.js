"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import LinkNewTab from "./LinkNewTab";

import links from "@/app/db/links.json";

export default function Modal({ children, isBuyNow = false }) {
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
            className="max-w-lg space-y-4 bg-slate-600/65 backdrop-blur p-8 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 rounded-md"
          >
            <div className="flex justify-between items-center">
              {!isBuyNow && (
                <DialogTitle className="font-bold">
                  Sumimasen Ultra Thin (3pcs)
                </DialogTitle>
              )}
              <XMarkIcon
                className="size-8 cursor-pointer absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              />
            </div>
            {isBuyNow ? (
              <>
                <Description>our official stores :</Description>
                <div className="grid gap-4 text-center justify-center md:flex md:gap-12 md:p-4 md:px-8 md:items-end">
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
                <Description>
                  Extra thin as if you are not wearing a condom
                  <br />
                  <b>0.03 mm</b>
                </Description>
                <div className="grid gap-4">
                  <button onClick={handleTokped}>Tokopedia</button>
                  <button onClick={handleShopee}>Shopee</button>
                  <button onClick={handleLazada}>Lazada</button>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

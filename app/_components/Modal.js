"use client";
import {
  CloseButton,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  function handleTokped() {
    console.log("tokped");
    return setIsOpen(false);
  }
  function handleShopee() {
    console.log("shopee");
    return setIsOpen(false);
  }
  function handleLazada() {
    console.log("lazada");
    return setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
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
              <DialogTitle className="font-bold">
                Sumimasen Ultra Thin (3pcs)
              </DialogTitle>
              <XMarkIcon
                className="size-8 cursor-pointer absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              />
            </div>
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
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

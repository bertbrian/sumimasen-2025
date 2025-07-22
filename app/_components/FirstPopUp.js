// components/FirstTimeModal.jsx
"use client";

import { Description, Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import warning from "@/public/firstPopUp/warning.jpg";

export default function FirstTimeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-slate-900/70 p-4">
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
          <Description>
            <span className="flex justify-center pb-4 text-center text-5xl font-semibold capitalize">
              ATTENTION !!!
            </span>
            <p className="text-center text-xl">
              our instagram just <b>got hacked</b>
            </p>
            <p className="text-center text-xl">
              we&apos;re still on process to recover
            </p>

            <Image
              src={warning}
              width={300}
              height={200}
              priority
              alt="warning"
              className="m-8 mx-auto rounded-lg"
            />
            <p className="text-justify text-xl">
              don&apos;t receive / response any messages from our instagram
              right now
            </p>
            <p className="mt-4 text-xl">Thank You 🙏</p>
            <p className="text-xl">Yuta</p>
          </Description>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

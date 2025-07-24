"use client";

import { Description, Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import warning from "@/public/firstPopUp/warning.jpg";

const MODAL_EXPIRE_MINUTES = 2;

export default function FirstTimeModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const seenAt = localStorage.getItem("hasSeenModalAt");

    if (!seenAt || isExpired(seenAt)) {
      setIsOpen(true);
      localStorage.setItem("hasSeenModalAt", Date.now());
    }
  }, []);

  const isExpired = (timestamp) => {
    const timePassed = Date.now() - parseInt(timestamp, 10);
    return timePassed > MODAL_EXPIRE_MINUTES * 60 * 1000; // 3 minutes
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-slate-900/70 p-4">
        <DialogPanel
          transition
          className="max-w-md grow space-y-4 rounded-md bg-slate-600/65 p-8 backdrop-blur duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <div className="flex items-center justify-between">
            <XMarkIcon
              className="absolute right-4 top-4 size-8 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <Description as="div">
            <span className="flex justify-center pb-2 text-center text-3xl font-semibold uppercase">
              attention !!!
            </span>
            <p className="text-center">
              our instagram just <b>got hacked</b>
            </p>
            <p className="text-center">
              but don&apos;t worry, we&apos;re still on process to recover
            </p>

            <div className="flex items-center justify-center">
              <Image
                src={warning}
                width={300}
                height={300}
                priority
                alt="warning image"
                className="m-2 mx-auto w-48 rounded-lg md:my-4"
              />
            </div>
            <p className="text-justify">
              <b>don&apos;t respond</b> any links / messages from our instagram
              for now 🙏
            </p>
            <p className="mt-2 md:mt-4">Thank you,</p>
            <p>Yuta</p>
          </Description>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

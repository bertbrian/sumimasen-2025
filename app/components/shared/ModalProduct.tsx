import { Description, DialogTitle } from "@headlessui/react";
import productLinks from "@/app/db/productLinks.json";
import Image from "next/image";

import { Variant } from "@/types";
import ButtonMarketplace from "./ButtonMarketplace";

export default function ModalProduct({ variant }: { variant: Variant }) {
  return (
    <>
      {/* Pre load images */}
      {Object.values(productLinks).map((item) => (
        <img key={item.url} src={item.url} alt="" className="hidden" />
      ))}
      <DialogTitle className="font-bold">
        {productLinks[variant].title} (3pcs)
      </DialogTitle>
      <Description className="text-center">
        <span>
          {productLinks[variant].description}
          <br />
          {variant === "ultrathin" ? (
            <b>0.03 mm</b>
          ) : variant === "ultrasafe" ? (
            <b>0.08 mm</b>
          ) : (
            <b>0.06 mm</b>
          )}
        </span>
      </Description>
      <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-red-200 py-3 select-none">
        <Image
          src={productLinks[variant].url}
          alt={variant}
          priority
          width={400}
          height={400}
          className={` ${variant === "ultrasafe" ? "scale-150" : "scale-110"} object-cover`}
        />
      </div>

      <ButtonMarketplace variant={variant} />
    </>
  );
}

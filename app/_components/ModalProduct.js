import { Description, DialogTitle } from "@headlessui/react";
import productLinks from "@/app/db/productLinks.json";
import Image from "next/image";
import ButtonMarketplace from "./ButtonMarketplace";

export default function ModalProduct({ variant }) {
  return (
    <>
      <DialogTitle className="font-bold">
        {productLinks[variant].title} (3pcs)
      </DialogTitle>
      <Description>
        <p className="text-center">
          {productLinks[variant].description}
          <br />
          {variant === "ultrathin" ? (
            <b>0.03 mm</b>
          ) : variant === "ultrasafe" ? (
            <b>0.08 mm</b>
          ) : (
            <b>0.06 mm</b>
          )}
        </p>
      </Description>
      <div className="select-none py-3">
        <Image
          src={productLinks[variant].url}
          alt={variant}
          width={400}
          height={400}
          className={`w-full ${productLinks[variant].title === "ultrasafe" ? "mt-10 scale-125" : ""}`}
        />
      </div>

      <ButtonMarketplace variant={variant} />
    </>
  );
}

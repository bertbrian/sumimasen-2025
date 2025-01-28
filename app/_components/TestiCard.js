"use client";
import Image from "next/image";

function TestiCard({ src }) {
  return (
    <div className="h-full w-80 rounded flex justify-center items-center">
      <Image src={src} alt={src} width={800} height={800} className="rounded" />
    </div>
  );
}

export default TestiCard;

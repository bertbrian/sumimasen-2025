"use client";
import Image from "next/image";

function TestiCard({ src }) {
  return (
    <div className="flex h-full w-80 items-center justify-center rounded">
      <Image src={src} alt={src} width={800} height={800} className="rounded" />
    </div>
  );
}

export default TestiCard;

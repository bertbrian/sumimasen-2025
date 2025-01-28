import Image from "next/image";

function TestiCard({ src }) {
  return (
    <div className="border relative overflow-hidden min-h-[200px] min-w-[400px] rounded flex justify-center items-center">
      <Image src={src} alt={src} fill className="rounded object-contain" />
    </div>
  );
}

export default TestiCard;

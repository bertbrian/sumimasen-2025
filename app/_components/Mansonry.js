import photos from "@/app/db/funwalk.json";

import Image from "next/image";

export default function MasonryGridGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-7xl mx-auto pt-8">
      {photos.map((item) => (
        <div key={item.index}>
          <Image
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src={item.src}
            width={900}
            height={100}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}

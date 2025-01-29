"use client";

import Mansonry from "@/app/_components/Mansonry";

export default function Page() {
  // const products = await getProducts();

  return (
    <div>
      {/* {products.length > 0 && (
        <div>
          {products.map((item) => (
            <span key={item.name}>
              {item.name},&nbsp;{item.description}
            </span>
          ))}
        </div>
      )} */}
      <Mansonry />
    </div>
  );
}

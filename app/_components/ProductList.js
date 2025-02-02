import Image from "next/image";
import { getProducts } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

export default async function ProductList() {
  noStore();
  const products = await getProducts();

  if (!products.length) return null;

  return (
    <div className="flex gap-6 justify-center items-end max-w-7xl mx-auto pt-12">
      {products.map((item) => (
        <div key={item.name} className="flex-col mx-auto text-center">
          <h3 className="text-3xl">{item.name}</h3>
          <span>{item.description}</span>
          <div className="size-80 mx-auto">
            <Image src={item.image1} width={400} height={400} alt="image" />
          </div>
        </div>
      ))}
    </div>
  );
}

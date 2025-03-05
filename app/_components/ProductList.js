import Image from "next/image";
import { getProducts } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

export default async function ProductList() {
  noStore();
  const products = await getProducts();

  if (!products.length) return null;

  return (
    <div className="mx-auto flex max-w-7xl items-end justify-center gap-6 pt-12">
      {products.map((item) => (
        <div key={item.name} className="mx-auto flex-col text-center">
          <h3 className="text-3xl">{item.name}</h3>
          <span>{item.description}</span>
          <div className="mx-auto size-80">
            <Image src={item.image1} width={400} height={400} alt="image" />
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import { getProducts } from "../_lib/data-service";

export const metadata = {
  title: "Products",
};

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      {products.length > 0 && (
        <div className="flex gap-6 justify-center items-end max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.name}
              className="flex-col mx-auto text-center border"
            >
              <h3 className="text-3xl">{item.name}</h3>
              <span>{item.description}</span>
              <div className="size-80 mx-auto">
                <Image src={item.image1} width={400} height={400} alt="image" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { getProducts } from "../_lib/data-service";

export const metadata = {
  title: "Products",
};

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      {products.length > 0 && (
        <div>
          {products.map((item) => (
            <span key={item.name}>
              {item.name},&nbsp;{item.description}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

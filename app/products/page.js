import { Suspense } from "react";
import ProductList from "../_components/ProductList";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Products",
};

export default function Page() {
  return (
    <>
      <span className="flex justify-center text-center">deksripsi</span>
      <Suspense fallback={<Spinner />}>
        <ProductList />;
      </Suspense>
    </>
  );
}

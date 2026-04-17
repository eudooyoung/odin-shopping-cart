import { useEffect, useState } from "react";

import { Outlet } from "react-router";
import type { ProductItem } from "../../utils/type";

export default function Main() {
  const { productItems, shopError, shopLoading } = useFakeStore();

  return (
    <>
      <Outlet context={[productItems, shopError, shopLoading]} />
    </>
  );
}

function useFakeStore() {

  const [productItems, setProductItems] = useState<ProductItem[] | null>(null);
  const [shopError, setShopError] = useState<Error | null>(null);
  const [shopLoading, setShopLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response: ProductItem[]) => setProductItems(response))
      .catch((error: Error) => setShopError(error))
      .finally(() => setShopLoading(false));
  }, []);

  return { productItems, shopError, shopLoading };
}

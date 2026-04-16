import { useEffect, useState } from "react";

import { Outlet } from "react-router";

export default function Main() {
  const { productItems, shopError, shopLoading } = useFakeStore();

  return (
    <>
      <Outlet context={[productItems, shopError, shopLoading]} />
    </>
  );
}

function useFakeStore() {
  const [productItems, setProductItems] = useState<Array<JSON> | null>(null);
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
      .then((response: Array<JSON>) => setProductItems(response))
      .catch((error: Error) => setShopError(error))
      .finally(() => setShopLoading(false));
  }, []);

  return { productItems, shopError, shopLoading };
}

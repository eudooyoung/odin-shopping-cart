import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import type { ProductItem } from "../../utils/types";
import styles from "./Shop.module.css";

export default function Shop() {
  const { productItems, shopError, shopLoading } = useFakeStore();

  return (
    <>
      <h2>Shop Page</h2>
      <div className={styles.cardContainer}>
        {productItems.map((productItem) => (
          <Card key={productItem.id} productItem={productItem} />
        ))}
      </div>
    </>
  );
}

function useFakeStore() {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [shopError, setShopError] = useState<Error | null>(null);
  const [shopLoading, setShopLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response: ProductItem[]) => {
        if (!ignore) {
          setProductItems(response);
        }
      })
      .catch((error: Error) => {
        if (!ignore) {
          setShopError(error);
        }
      })
      .finally(() => {
        if (!ignore) {
          setShopLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return { productItems, shopError, shopLoading };
}

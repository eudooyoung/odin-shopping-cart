import styles from "./Shop.module.css";
import { useEffect, useState } from "react";
import Card from "../../components/product-card/ProductCard";
import type { ProductItem } from "../../utils/types";

export default function Shop() {
  const { productItems, shopError, shopLoading } = useFakeStore();

  return (
    <section className={styles.shop}>
      <header className={styles.header}>
        <h2>Shop Page</h2>
      </header>
      {shopLoading && <header>Loading...</header>}
      {shopError && <header>{shopError.message}</header>}
      <div className={styles.cardContainer}>
        {productItems.map((productItem) => (
          <Card key={productItem.id} productItem={productItem} />
        ))}
      </div>
    </section>
  );
}

function useFakeStore() {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [shopError, setShopError] = useState<Error | null>(null);
  const [shopLoading, setShopLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Server Error: ${response.status}`);
        }

        const productItems = (await response.json()) as ProductItem[];
        setProductItems(productItems);
        
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            return;
          }
          setShopError(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setShopLoading(false);
        }
      }
    };

    void fetchData();

    /* fetch("https://fakestoreapi.com/products", { signal: controller.signal })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response: ProductItem[]) => {
        setProductItems(response);
      })
      .catch((error: Error) => {
        if (error.name === "AbortError") {
          return;
        }
        setShopError(error);
      })
      .finally(() => {
        setShopLoading(false);
      }); */

    return () => {
      controller.abort();
    };
  }, []);

  return { productItems, shopError, shopLoading };
}

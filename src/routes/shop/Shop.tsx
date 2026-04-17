import Card from "../../components/card/Card";
import type { ProductItem } from "../../utils/type";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";

export default function Shop() {
  const [productItems, shopError, shopLoading] =
    useOutletContext<[ProductItem[], Error, boolean]>();

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

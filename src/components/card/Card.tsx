import type { ProductItem } from "../../utils/type";
import styles from "./Shop.module.css";

export default function Card({ productItem }: { productItem: ProductItem }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={productItem.image} alt={`image of ${productItem.title}`} />
      </div>
      <h3>{productItem.title}</h3>
    </div>
  );
}

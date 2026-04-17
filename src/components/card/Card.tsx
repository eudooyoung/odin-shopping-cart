import { useState, type ChangeEvent, type MouseEvent } from "react";
import type { ProductItem } from "../../utils/type";
import styles from "./Card.module.css";

export default function Card({
  productItem,
  onAddToCart,
}: {
  productItem: ProductItem;
  onAddToCart: VoidFunction;
}) {
  const [quantity, setQuantity] = useState(0);

  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let input = e.target.value;
    if (Number.isNaN(Number(input))) {
      return;
    }
    if (input.startsWith("0")) {
      input = input.slice(1);
    }
    setQuantity(Number(input));
  };

  const handleIncrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity((quantity) => quantity + 1);
  };

  const handleDecrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity === 0) {
      return;
    }
    setQuantity((quantity) => quantity - 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={productItem.image} alt={`image of ${productItem.title}`} />
      </div>
      <h3>{productItem.title}</h3>
      <span className={styles.productPrice}>$ {productItem.price}</span>
      <p className={styles.productDescription}>{productItem.description}</p>
      <form action="post">
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="text"
          id="quantity"
          itemType="number"
          value={quantity}
          onChange={inputHandle}
        />
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
        <button onClick={onAddToCart}>Add to cart</button>
      </form>
    </div>
  );
}

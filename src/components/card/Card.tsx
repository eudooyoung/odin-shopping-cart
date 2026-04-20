import { useState, type ChangeEvent, type MouseEvent } from "react";
import type { Card, ShopContext } from "../../utils/types";
import styles from "./Card.module.css";
import { useOutletContext } from "react-router";

export default function Card({ productItem }: Card) {
  const [_, setCartItems] = useOutletContext<ShopContext>();
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

  const onAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity === 0) {
      return;
    }
    setQuantity(0);
    setCartItems((prevCart) => {
      const newCart = new Map(prevCart);
      if (!newCart.has(productItem.id)) {
        newCart.set(productItem.id, {
          id: productItem.id,
          title: productItem.title,
          price: productItem.price,
          quantity: quantity,
        });
        return newCart;
      }
      const cartItem = newCart.get(productItem.id);
      cartItem!.quantity += quantity;
      return newCart;
    });
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

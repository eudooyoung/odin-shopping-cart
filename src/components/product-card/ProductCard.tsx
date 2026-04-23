import { Icon } from "@mdi/react";
import { mdiCartPlus, mdiMinusBox, mdiPlusBox } from "@mdi/js";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import type { ProductCard, MainContext } from "../../utils/types";
import styles from "./ProductCard.module.css";
import { useOutletContext } from "react-router";

export default function ProductCard({ productItem }: ProductCard) {
  const [_, setCartItems] = useOutletContext<MainContext>();
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
      const newCart = structuredClone(prevCart);
      if (!newCart.has(productItem.id)) {
        newCart.set(productItem.id, {
          id: productItem.id,
          title: productItem.title,
          price: productItem.price,
          image: productItem.image,
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
    <article className={styles.card}>
      <img
        className={styles.img}
        src={productItem.image}
        alt={`image of ${productItem.title}`}
      />
      <h3 className={styles.h3}>{productItem.title}</h3>
      <span className={styles.productPrice}>$ {productItem.price}</span>
      <form className={styles.form} action="post">
        <label htmlFor="quantity">Quantity: </label>
        <input
          className={styles.input}
          type="text"
          id="quantity"
          itemType="number"
          value={quantity}
          onChange={inputHandle}
        />
        <button className={styles.button} onClick={handleIncrease}>
          <Icon className={styles.icon} path={mdiPlusBox} size={1} />
          <span className={styles.visuallyHidden}>Plus one</span>
        </button>
        <button className={styles.button} onClick={handleDecrease}>
          <Icon className={styles.icon} path={mdiMinusBox} size={1} />
          <span className={styles.visuallyHidden}>Minus one</span>
        </button>
        <button className={styles.button} onClick={onAddToCart}>
          <Icon className={styles.icon} path={mdiCartPlus} size={1} />
          <span className={styles.visuallyHidden}>Add to cart</span>
        </button>
      </form>
    </article>
  );
}

import styles from "./Order.module.css";
import type { MainContext, Order } from "../../utils/types";
import { useOutletContext } from "react-router";
import type { MouseEvent } from "react";

export default function Order({ cartItem }: Order) {
  const [_, setCartItems] = useOutletContext<MainContext>();

  const handleIncrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCartItems((prevCart) => {
      const newCart = structuredClone(prevCart);
      newCart.get(cartItem.id)!.quantity += 1;
      return newCart;
    });
  };

  const handleDecrease = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (cartItem.quantity === 1) {
      return;
    }
    setCartItems((prevCart) => {
      const newCart = structuredClone(prevCart);
      newCart.get(cartItem.id)!.quantity -= 1;
      return newCart;
    });
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCartItems((prevCart) => {
      const newCart = structuredClone(prevCart);
      newCart.delete(cartItem.id);
      return newCart;
    });
  };

  return (
    <div className={styles.order}>
      <img
        className={styles.img}
        src={cartItem.image}
        alt={`image of ${cartItem.title}`}
      />
      <h3 className={styles.h3}>{cartItem.title}</h3>
      <form className={styles.form} action="post">
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="text"
          id="quantity"
          itemType="number"
          value={cartItem.quantity}
          readOnly={true}
        />
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleDelete}>x</button>
      </form>
      <span className={styles.subTotal}>
        Sub Total: $ {cartItem.price * cartItem.quantity}
      </span>
    </div>
  );
}

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
    if (cartItem.quantity < 1) {
      return;
    }
    setCartItems((prevCart) => {
      const newCart = structuredClone(prevCart);
      newCart.get(cartItem.id)!.quantity -= 1;
      return newCart;
    });
  };

  return (
    <div className={styles.order}>
      <div className={styles.imageWrapper}>
        <img src={cartItem.image} alt={`image of ${cartItem.title}`} />
      </div>
      <h3>{cartItem.title}</h3>
      <span className={styles.cartItemTotalPrice}>
        $ {cartItem.price * cartItem.quantity}
      </span>
      <form action="post">
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="text"
          id="quantity"
          itemType="number"
          value={cartItem.quantity}
          // onChange={inputHandle}
        />
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        {/* <button onClick={onAddToCart}>Add to cart</button> */}
      </form>
    </div>
  );
}

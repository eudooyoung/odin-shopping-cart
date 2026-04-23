import { Icon } from "@mdi/react";
import { mdiTrashCan, mdiMinusBox, mdiPlusBox } from "@mdi/js";
import styles from "./OrderCard.module.css";
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
    <article className={styles.order}>
      <img
        className={styles.img}
        src={cartItem.image}
        alt={`image of ${cartItem.title}`}
      />
      <h3 className={styles.h3}>{cartItem.title}</h3>
      <form className={styles.form} action="post">
        <label htmlFor="quantity">Quantity: </label>
        <div className={styles.buttonContainer}>
          <button onClick={handleDecrease} className={styles.button}>
            <Icon className={styles.icon} path={mdiMinusBox} size={1} />
            <span className={styles.visuallyHidden}>Minus one</span>
          </button>
          <input
            type="text"
            id="quantity"
            itemType="number"
            value={cartItem.quantity}
            readOnly={true}
            className={styles.input}
          />
          <button onClick={handleIncrease} className={styles.button}>
            <Icon className={styles.icon} path={mdiPlusBox} size={1} />
            <span className={styles.visuallyHidden}>Plus one</span>
          </button>
          <button onClick={handleDelete} className={styles.button}>
            <Icon className={styles.icon} path={mdiTrashCan} size={1} />
            <span className={styles.visuallyHidden}>Remove item</span>
          </button>
        </div>
      </form>
      <span className={styles.subTotal}>
        Sub Total: <span>$ {cartItem.price * cartItem.quantity}</span>
      </span>
    </article>
  );
}

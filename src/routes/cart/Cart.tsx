import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";
import type { MainContext } from "../../utils/types";
import Order from "../../components/order-card/OrderCard";

export default function Cart() {
  const [cartItems, _] = useOutletContext<MainContext>();
  const cartItemsArr = [...cartItems.values()];

  return (
    <section className={styles.cart}>
      <header className={styles.header}>
        <h2>Cart Page</h2>
      </header>
      <div className={styles.orderContainer}>
        {cartItemsArr.map((cartItem) => (
          <Order key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </section>
  );
}

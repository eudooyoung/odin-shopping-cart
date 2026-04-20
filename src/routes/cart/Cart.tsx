import { useOutletContext } from "react-router";
import type { MainContext } from "../../utils/types";
import Order from "../../components/order/Order";

export default function Cart() {
  const [cartItems, setCartItems] = useOutletContext<MainContext>();
  const cartItemsArr = [...cartItems.values()];

  return (
    <>
      <h2>Cart Page</h2>
      {cartItemsArr.map((cartItem) => (
        <Order key={cartItem.id} cartItem={cartItem} />
      ))}
    </>
  );
}

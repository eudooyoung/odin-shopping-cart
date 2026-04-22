import "./Main.css";
import { Outlet } from "react-router";
import NavBar from "../navbar/NavBar";
import { useState } from "react";
import type { CartItem } from "../../utils/types";

export default function Main() {
  const [cartItems, setCartItems] = useState(new Map<number, CartItem>());
  const totalItem = cartItems.size;

  return (
    <main>
      <NavBar totalItem={totalItem} />
      <Outlet context={[cartItems, setCartItems]} />
    </main>
  );
}

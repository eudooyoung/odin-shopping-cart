import { Outlet } from "react-router";
import NavBar from "../navbar/NavBar";
import { useState } from "react";
import type { CartItem } from "../../utils/types";

export default function Main() {
  const [cartItems, setCartItems] = useState(new Map<number, CartItem>());
  const totalItems = cartItems.size;

  return (
    <>
      <NavBar totalItems={totalItems} />
      <Outlet context={[cartItems, setCartItems]} />
    </>
  );
}

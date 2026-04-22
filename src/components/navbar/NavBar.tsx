import "./NavBar.css";
import { NavLink } from "react-router";

export default function NavBar({ totalItem }: { totalItem: number }) {
  return (
    <nav>
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/shop">
        <span>Shop</span>
      </NavLink>
      <NavLink to="/cart">
        <span>Cart {totalItem > 0 && totalItem}</span>
      </NavLink>
    </nav>
  );
}

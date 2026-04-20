import { Link } from "react-router";

export default function NavBar({ totalItems }: { totalItems: number }) {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">
        Cart <span>{totalItems > 0 && totalItems}</span>
      </Link>
    </>
  );
}

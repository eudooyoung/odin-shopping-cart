import { Link } from "react-router";

export default function NavBar({ totalItem }: { totalItem: number }) {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">
        Cart <span>{totalItem > 0 && totalItem}</span>
      </Link>
    </>
  );
}

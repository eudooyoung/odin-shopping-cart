import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}

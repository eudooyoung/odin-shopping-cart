import styles from "./NavBar.module.css";
import { NavLink } from "react-router";

export default function NavBar({ totalItem }: { totalItem: number }) {
  const isActiveClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={isActiveClass} to="/">
        <span>Home</span>
      </NavLink>
      <NavLink className={isActiveClass} to="/shop">
        <span>Shop</span>
      </NavLink>
      <NavLink className={isActiveClass} to="/cart">
        <span>
          Cart{" "}
          {totalItem > 0 && (
            <span className={styles.totalItem}>{totalItem}</span>
          )}
        </span>
      </NavLink>
    </nav>
  );
}

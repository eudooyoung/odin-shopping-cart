import Card from "../../components/card/Card";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";

export default function Shop() {
  const [productItems, shopError, ShopLoading] =
    useOutletContext<[Array<JSON>, Error, boolean]>();

  return (
    <>
      <h2>Shop Page</h2>
      <div className={styles.cardContainer}></div>
    </>
  );
}

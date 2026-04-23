import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Product data by{" "}
        <a
          className={styles.link}
          href="https://fakestoreapi.com/"
          target="_blank"
          rel="noreferer"
        >
          Fake Store API
        </a>{" "}
        ·
      </span>
      <span>&nbsp;© 2026 all rights reserved ·</span>
      <span>
        &nbsp;
        <a
          className={styles.link}
          href="https://github.com/eudooyoung/odin-shopping-cart.git"
          target="_blank"
          rel="noreferer"
          aria-label="Link to github repository"
        >
          <i className="devicon-github-original"></i>
        </a>
      </span>
    </footer>
  );
}

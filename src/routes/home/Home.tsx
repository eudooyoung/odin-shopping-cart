import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <header className={styles.header}>
        <h2>Home Page</h2>
        <p className={styles.intro}>
          <i>
            We know you want it! Don't hesitate it. Just get what you desire!
          </i>
        </p>
      </header>
      <section className={styles.provideSection}>
        <h3>What we provide</h3>
        <p className={styles.provide}>
          Have you ever wonder why you can't get what you want? That's because
          you didn't know us!
          <br />
          With Odin Shopping Cart, your{" "}
          <strong>
            <i>Dream</i>
          </strong>{" "}
          may come true!
        </p>
      </section>
      <section className={styles.aboutSection}>
        <h3>About us</h3>
        <p className={styles.about}>
          Congratulation on finally finding us! Once you found us, don't worry
          more.
          <br />I guarantee you that we are the best provider you will ever
          meet.
        </p>
      </section>
    </section>
  );
}

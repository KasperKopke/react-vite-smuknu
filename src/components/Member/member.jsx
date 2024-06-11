import styles from "./member.module.css";

const Member = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.member}>Medlem?</h1>
      <p className={styles.text}>
        Vær med i kundeklubben for nye videoer, rabatkoder og mere!
      </p>
      <a className={styles.btn} href="#">
        Bliv medlem af kundekluppen
      </a>
    </div>
  );
};

export default Member;

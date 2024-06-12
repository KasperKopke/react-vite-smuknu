import styles from "./sectionHeadline.module.css";

const SectionHeadline = ({ blackHeadline, switchme, pinkHeadline }) => {
  return (
    <div className={`${styles.wrapper} ${switchme ? styles.switchme : ""}`}>
      <h2>{blackHeadline}</h2>
      <h2 className={styles.bottomHeadline}>{pinkHeadline}</h2>
    </div>
  );
};

export default SectionHeadline;

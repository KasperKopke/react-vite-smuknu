import styles from "./pageHeader.module.css";

const PageHeader = ({
  toptxt,
  middleTxt,
  bottomTxt,
  btnLink,
  btnTxt,
  bgColor,
  toptxtColor,
  bottomTextColor,
  backgroundImage,
}) => {
  return (
    <div
      className={styles.sectionWrapper}
      style={{
        backgroundImage: `url(${backgroundImage})`, // Brug backgroundImage-prop'en til at sætte baggrundsbilledet
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.pageHeaderBox} ${styles[bgColor]}`}>
        <h2 className={`${styles[toptxtColor]} ${styles.h2}`}>{toptxt}</h2>

        <p className={`${styles[bottomTextColor]}  ${styles.bottomTextSize}`}>
          {middleTxt}
        </p>

        {btnLink && btnTxt && (
          <a className={styles.btn} href={btnLink}>
            {btnTxt}
          </a>
        )}
        <p className={`${styles[bottomTextColor]} ${styles.bottomTextSize}`}>
          {bottomTxt}
        </p>
      </div>
    </div>
  );
};
export default PageHeader;

import styles from "./pageHeader.module.css";

const PageHeader = ({
  topImageSrc,
  toptxt,
  middleTxt,
  bottomTxt,
  btnLink,
  btnTxt,
  bottomImageSrc,
  bgColor,
  toptxtColor,
  bottomTextColor,
}) => {
  return (
    <div>
      <img className={styles.topImg} src={`./headers/${topImageSrc}`} alt="" />
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
      <div className={styles.bottomImage}>
        <img
          className={styles.bottomImg}
          src={`./headers/${bottomImageSrc}`}
          alt=""
        />
      </div>
    </div>
  );
};
export default PageHeader;

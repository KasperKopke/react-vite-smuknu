import PageHeader from "../../components/pageHeader/pageHeader";
import styles from "./bliv-medlem.module.css";

const BlivMedlem = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader
        topImageSrc={"products.jpg"}
        toptxt={"BLIV MEDLEM"}
        middleTxt={"Herunder har vi samlet spørgsmål og svar om sundhed."}
        /*  btnLink={"#"}
        btnTxt={"Se udvalgte produkter"} */
        bottomTxt={
          "Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
        }
        bottomImageSrc={"front.jpg"}
        bgColor={"white-theme"}
        toptxtColor={"pinkTxt"}
        bottomTextColor={"blackBottomTxt"}
      ></PageHeader>
    </div>
  );
};

export default BlivMedlem;

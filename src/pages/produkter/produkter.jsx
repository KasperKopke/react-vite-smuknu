import styles from "./produkter.module.css";
import PageHeader from "../../components/pageHeader/pageHeader";
import Member from "../../components/Member/member";
import SectionHeadline from "../../components/section-headline/sectionHeadline";
const Produkter = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader
        topImageSrc={"front.jpg"}
        toptxt={"SKØNHED FOR ALLE"}
        middleTxt={"Herunder har vi samlet spørgsmål og svar om sundhed."}
        btnLink={"#"}
        btnTxt={"Se udvalgte produkter"}
        /*  bottomTxt={
          "Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
        } */
        bottomImageSrc={"products.jpg"}
        bgColor={"white-theme"}
        toptxtColor={"blackTxt"}
        bottomTextColor={"blackBottomTxt"}
      ></PageHeader>
      <SectionHeadline
        blackHeadline={"ALT ER"}
        pinkHeadline={"SKØNHED"}
        /*  switchme={"switchme"} */
      ></SectionHeadline>
      <Member></Member>
    </div>
  );
};

export default Produkter;

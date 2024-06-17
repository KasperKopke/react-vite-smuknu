import styles from "./produkter.module.css";
import PageHeader from "../../components/pageHeader/pageHeader";
import Member from "../../components/Member/member";
import SectionHeadline from "../../components/section-headline/sectionHeadline";
import Products from "../../components/products/products";
const Produkter = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader
        backgroundImage={"./headers/front.jpg"}
        toptxt={"SKØNHED FOR ALLE"}
        middleTxt={"Herunder har vi samlet spørgsmål og svar om sundhed."}
        btnLink={"#"}
        btnTxt={"Se udvalgte produkter"}
        /*  bottomTxt={
          "Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
        } */

        bgColor={"white-theme"}
        toptxtColor={"blackTxt"}
        bottomTextColor={"blackBottomTxt"}
      ></PageHeader>
      <SectionHeadline
        blackHeadline={"ALT ER"}
        pinkHeadline={"SKØNHED"}
        /*  switchme={"switchme"} */
      ></SectionHeadline>
      <Products></Products>
      <Member></Member>
    </div>
  );
};

export default Produkter;

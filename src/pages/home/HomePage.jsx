import Member from "../../components/Member/member";
import styles from "./homepage.module.css";
import PageHeader from "../../components/pageHeader/pageHeader";
import SectionHeadline from "../../components/section-headline/sectionHeadline";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader
        topImageSrc={"products.jpg"}
        toptxt={"SKØNHED FOR ALLE"}
        middleTxt={"Herunder har vi samlet spørgsmål og svar om sundhed."}
        btnLink={"#"}
        btnTxt={"Se udvalgte produkter"}
        /* bottomTxt={
          "Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
        } */
        bottomImageSrc={"front.jpg"}
        bgColor={"white-theme"}
        toptxtColor={"blackTxt"}
        bottomTextColor={"blackBottomTxt"}
      ></PageHeader>
      <SectionHeadline
        blackHeadline={"UDVALGT"}
        pinkHeadline={"SKØNHED"}
        /* switchme={"switchme"} */
      ></SectionHeadline>
      <SectionHeadline
        blackHeadline={"UDTALER"}
        pinkHeadline={"SKØNHEDEN"}
        switchme={"switchme"}
      ></SectionHeadline>

      <Member></Member>
    </div>
  );
};
export default HomePage;

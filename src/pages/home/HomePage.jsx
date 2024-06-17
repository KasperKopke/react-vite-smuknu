import Member from "../../components/Member/member";
import styles from "./homepage.module.css";
import PageHeader from "../../components/pageHeader/pageHeader";
import SectionHeadline from "../../components/section-headline/sectionHeadline";
import Reviews from "../../components/reviews/reviews";
import Products from "../../components/products/products";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader
        backgroundImage={"./headers/front.jpg"}
        topImageSrc={"products.jpg"}
        toptxt={"SKØNHED FOR ALLE"}
        middleTxt={"Herunder har vi samlet spørgsmål og svar om sundhed."}
        btnLink={"#"}
        btnTxt={"Se udvalgte produkter"}
        /* bottomTxt={
          "Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
        } */

        bgColor={"white-theme"}
        toptxtColor={"blackTxt"}
        bottomTextColor={"blackBottomTxt"}
      ></PageHeader>
      <SectionHeadline
        blackHeadline={"UDVALGT"}
        pinkHeadline={"SKØNHED"}
        /* switchme={"switchme"} */
      ></SectionHeadline>
      <Products></Products>
      <SectionHeadline
        blackHeadline={"UDTALER"}
        pinkHeadline={"SKØNHEDEN"}
        switchme={"switchme"}
      ></SectionHeadline>
      <Reviews></Reviews>
      <Member></Member>
    </div>
  );
};
export default HomePage;

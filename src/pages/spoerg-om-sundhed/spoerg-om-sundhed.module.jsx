import styles from "./spoerg-om-sundhed.module.css";
import PageHeader from "../../components/pageHeader/pageHeader";
import Member from "../../components/Member/member";

const SpoergOmSundhed = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader
        topImageSrc={"abouthealth.jpg"}
        toptxt={"SPØRG OM SUNDHED"}
        middleTxt={"Herunder har vi samlet spørgsmål og svar om sundhed."}
        /*  btnLink={"#"}
  btnTxt={"det er en knap"} */
        bottomTxt={
          "Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
        }
        bottomImageSrc={"subscribers.jpg"}
        bgColor={"pink-theme"}
        toptxtColor={"whiteTxt"}
        bottomTextColor={"whiteBottomTxt"}
      ></PageHeader>
      <Member></Member>
    </div>
  );
};

export default SpoergOmSundhed;

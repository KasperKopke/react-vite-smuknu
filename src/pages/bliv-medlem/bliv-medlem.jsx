import Form from "../../components/form/form";
import PageHeader from "../../components/pageHeader/pageHeader";
import styles from "./bliv-medlem.module.css";

const BlivMedlem = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader
        backgroundImage={"./headers/front.jpg"}
        toptxt={"BLIV MEDLEM"}
        middleTxt={"Herunder har vi samlet spørgsmål og svar om sundhed."}
        /*  btnLink={"#"}
        btnTxt={"Se udvalgte produkter"} */
        bottomTxt={
          "Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"
        }
        bgColor={"white-theme"}
        toptxtColor={"pinkTxt"}
        bottomTextColor={"blackBottomTxt"}
      ></PageHeader>
      <Form></Form>
    </div>
  );
};

export default BlivMedlem;

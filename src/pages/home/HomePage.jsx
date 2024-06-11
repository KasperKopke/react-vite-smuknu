import Member from "../../components/Member/member";
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Member></Member>
    </div>
  );
};
export default HomePage;

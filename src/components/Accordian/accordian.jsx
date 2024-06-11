import styles from "./accordian.module.css";
import { FaQuestion } from "react-icons/fa";

const Accordian = () => {
  return (
    <div>
      <ul className={styles.ul}>
        <li>
          <h2>
            <button className={styles.button}>
              {" "}
              <FaQuestion className={styles.icon} />
            </button>
            Hvorfor dannes pigmentering?
          </h2>
          <div className={`${styles.accordianText}   `}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              architecto aut consectetur sapiente quibusdam nulla, minima
              reiciendis voluptate voluptates blanditiis minus. Illo voluptates
              facilis, repellendus eius nostrum et quo expedita, doloribus
              quidem ipsam ipsum qui, fuga rerum ratione libero laborum.
            </p>
          </div>
        </li>
        <li>
          <h2>
            <button className={styles.button}>
              {" "}
              <FaQuestion className={styles.icon} />
            </button>
            Hvorfor dannes pigmentering?
          </h2>
          <div className={`${styles.accordianText}   `}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              architecto aut consectetur sapiente quibusdam nulla, minima
              reiciendis voluptate voluptates blanditiis minus. Illo voluptates
              facilis, repellendus eius nostrum et quo expedita, doloribus
              quidem ipsam ipsum qui, fuga rerum ratione libero laborum.
            </p>
          </div>
        </li>
        <li>
          <h2>
            <button className={styles.button}>
              {" "}
              <FaQuestion className={styles.icon} />
            </button>
            Hvorfor dannes pigmentering?
          </h2>
          <div className={`${styles.accordianText}   `}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              architecto aut consectetur sapiente quibusdam nulla, minima
              reiciendis voluptate voluptates blanditiis minus. Illo voluptates
              facilis, repellendus eius nostrum et quo expedita, doloribus
              quidem ipsam ipsum qui, fuga rerum ratione libero laborum.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Accordian;

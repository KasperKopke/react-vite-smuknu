import { useState } from "react";
import styles from "./accordian.module.css";
import { FaQuestion } from "react-icons/fa";

const Accordian = () => {
  const [activeItems, setActiveItems] = useState([false, false, false]);

  const accordionItems = [
    {
      title: "Hvorfor dannes pigmentering?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores architecto aut consectetur sapiente quibusdam nulla, minima reiciendis voluptate voluptates blanditiis minus. Illo voluptates facilis, repellendus eius nostrum et quo expedita, doloribus quidem ipsam ipsum qui, fuga rerum ratione libero laborum.",
    },
    {
      title: "Glycerin, som dagens helt?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores architecto aut consectetur sapiente quibusdam nulla, minima reiciendis voluptate voluptates blanditiis minus. Illo voluptates facilis, repellendus eius nostrum et quo expedita, doloribus quidem ipsam ipsum qui, fuga rerum ratione libero laborum.",
    },
    {
      title: "Hvorfor får man skæl?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores architecto aut consectetur sapiente quibusdam nulla, minima reiciendis voluptate voluptates blanditiis minus. Illo voluptates facilis, repellendus eius nostrum et quo expedita, doloribus quidem ipsam ipsum qui, fuga rerum ratione libero laborum.",
    },
  ];

  const toggleClass = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };

  return (
    <div>
      <ul className={styles.ul}>
        {accordionItems.map((item, index) => (
          <li key={index}>
            <h2 className={styles.h2}>
              <button
                onClick={() => toggleClass(index)}
                className={styles.button}
              >
                {" "}
                <FaQuestion
                  className={`${styles.icon} ${
                    activeItems[index] ? styles.activeItem : ""
                  }`}
                />
              </button>
              <span
                className={`${activeItems[index] ? styles.activeItem : ""} ${
                  activeItems[index] ? styles.activeText : ""
                }`}
              >
                {item.title}
              </span>
            </h2>
            <div
              className={`${styles.accordianText} ${
                activeItems[index] ? styles.active : ""
              }`}
            >
              <p>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordian;

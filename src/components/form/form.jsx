import styles from "./form.module.css";
import { useState } from "react";

const Form = () => {
  const [formName, setFormName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [closeForm, setFormClosed] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
    setFormClosed(!closeForm);
  };

  return (
    <div>
      {closeForm && (
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Fulde navn
            <input
              className={styles.input}
              type="text"
              value={formName}
              onChange={(event) => setFormName(event.target.value)}
            />
          </label>
          <label className={styles.label}>
            E-mail
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className={styles.label}>
            Ris og/eller ros
            <textarea
              className={styles.textAra}
              name="text"
              id="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
          </label>
          <button>Opret</button>
        </form>
      )}
      {showSuccessMessage && (
        <div className={styles.susccesMessage}>
          <h1>Tak!</h1>
          <p className={styles.name}>{formName}</p>
          <p className={styles.Txt}>
            Vi er enormt glade for at få dig som medlem.
          </p>
          <img className={styles.image} src="./headers/front.jpg" alt="" />
          <p className={styles.Txt}>
            Kig i din inbox vi har sendt en lille velkomst gave.
          </p>
          <a href="/" className={styles.btn}>
            Til Forsiden
          </a>
        </div>
      )}
    </div>
  );
};

export default Form;

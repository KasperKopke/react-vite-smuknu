import styles from "./form.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [closeForm, setFormClosed] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // this will log the form data
    setShowSuccessMessage(true);
    setFormClosed(!closeForm);
  };

  return (
    <div>
      {closeForm && (
        <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label}>
            Fulde navn
            <p className={styles.errorMessage}>{errors.firstName?.message}</p>
            <input
              className={styles.input}
              type="text"
              {...register("firstName", { required: "Fulde navn er påkrævet" })}
              value={firstName}
              onChange={(event) => setfirstName(event.target.value)}
            />
          </label>
          <label className={styles.label}>
            E-mail
            <p className={styles.errorMessage}>{errors.email?.message}</p>
            <input
              className={styles.input}
              type="email"
              {...register("email", {
                required: "Email er påkrævet",
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className={styles.label}>
            Ris og/eller ros
            <p className={styles.errorMessage}>{errors.text?.message}</p>
            <p>Antal brugte tegn: {text.length}</p>
            <textarea
              className={styles.textAra}
              name="text"
              id="text"
              {...register("text", {
                required: false,
                minLength: {
                  value: 20,
                  message: "Skriv minimum 20 tegn",
                },
              })}
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
          <p className={styles.name}>{firstName}</p>
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

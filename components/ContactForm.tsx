import axios from "axios";
import { useState } from "react";
import styles from "../styles/components/ContactForm.module.scss";
export default function ContactForm() {
  var [submitted, setSubmitted] = useState(false);
  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (event: any) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    if (inputs.email === "" || inputs.subject === "" || inputs.message === "")
      return;

    axios({
      method: "POST",
      url: "https://formbold.com/s/9mZRP",
      data: inputs,
    })
      .then(() => {
        console.log("Sent");
        setInputs({ email: "", subject: "", message: "" });

        setSubmitted(true);
      })
      .catch((error: any) => {
        console.log("error");
      });
  };

  if (submitted)
    return (
      <div className={styles.form}>
        <h3>Message Sent!</h3>
      </div>
    );
  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <input
        onChange={handleOnChange}
        value={inputs.email}
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        onChange={handleOnChange}
        value={inputs.subject}
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject"
      />
      <textarea
        onChange={handleOnChange}
        value={inputs.message}
        id="message"
        name="message"
        placeholder="Type your message"
      />
      <button type="submit"> Send Message </button>
    </form>
  );
}

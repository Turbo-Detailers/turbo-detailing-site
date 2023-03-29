import axios from "axios";
import { useState } from "react";
import styles from "../styles/components/ContactForm.module.scss";
export default function ContactForm() {
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

    axios({
      method: "POST",
      url: "https://formbold.com/s/9mZRP",
      data: inputs,
    })
      .then((r) => {
        console.log("Sent");
        setInputs({ email: "", subject: "", message: "" });
      })
      .catch((r) => {
        console.log("error");
      });
  };

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

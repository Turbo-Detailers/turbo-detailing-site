import axios from "axios";
import { useState } from "react";
import styles from "../styles/components/QuoteForm.module.scss";
export default function ContactForm() {
  var [submitted, setSubmitted] = useState(false);
  // Input Change Handling
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    notes: "",
    make: "",
    model: "",
    year: "",
    condition: "",
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

    if (inputs.email === "" || inputs.number === "" || inputs.notes === "")
      return;

    // axios({
    //   method: "POST",
    //   url: "/api/form/quote",
    //   data: inputs,
    //   ...inputs,
    // })
    axios
      .post("/api/form/quote", inputs)
      .then(() => {
        console.log("Sent");
        setInputs({
          name: "",
          email: "",
          number: "",
          notes: "",
          make: "",
          model: "",
          year: "",
          condition: "",
        });

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
        value={inputs.name}
        id="name"
        type="text"
        name="name"
        placeholder="Name"
      />
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
        value={inputs.number}
        id="number"
        type="tel"
        name="number"
        placeholder="Phone Number"
      />
      <input
        onChange={handleOnChange}
        value={inputs.make}
        id="make"
        type="text"
        name="make"
        placeholder="Make"
      />
      <input
        onChange={handleOnChange}
        value={inputs.model}
        id="model"
        type="text"
        name="model"
        placeholder="Model"
      />
      <input
        onChange={handleOnChange}
        value={inputs.year}
        id="year"
        type="text"
        name="year"
        placeholder="Year"
      />

      <input
        onChange={handleOnChange}
        value={inputs.condition}
        id="condition"
        type="text"
        name="condition"
        placeholder="Condition"
      />

      <textarea
        onChange={handleOnChange}
        value={inputs.notes}
        id="notes"
        name="notes"
        placeholder="Please describe any damage or anything you'd like to share about your vehicle"
      />
      <button type="submit"> Send Message </button>
    </form>
  );
}

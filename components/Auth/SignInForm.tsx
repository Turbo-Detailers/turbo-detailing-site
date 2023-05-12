import { useState } from "react";
import styles from "../../styles/components/AuthForms.module.scss";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

import "react-toastify/dist/ReactToastify.css";

export default function SignInForm() {
  const auth = getAuth();
  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (event: any) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Auth State Handling
  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    if (inputs.email === "" || inputs.password === "") return;

    signInWithEmailAndPassword(auth, inputs.email, inputs.password).catch(
      (e: FirebaseError) =>
        toast.error(e.code, { theme: "colored", position: "bottom-right" })
    );
  };

  return (
    <div className={styles.page}>
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
          value={inputs.password}
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />

        <div className={styles.forgotPasswordContainer}>
          <a
            onClick={() =>
              sendPasswordResetEmail(auth, inputs.email).catch(
                (e: FirebaseError) =>
                  toast.error(e.code, {
                    theme: "colored",
                    position: "bottom-right",
                  })
              )
            }
          >
            Forgot Password?
          </a>
        </div>
        <button type="submit"> Sign In </button>
      </form>
      <ToastContainer />
    </div>
  );
}

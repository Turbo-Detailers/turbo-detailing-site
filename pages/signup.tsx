import React from "react";
import { withAuthUser, AuthAction } from "next-firebase-auth";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import styles from "../styles/Gallery.module.scss";
import SignUpForm from "../components/Auth/SignUpForm";
import Head from "next/head";

const Auth = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return (
    <>
      <Head>
        <title>Sign Up - Turbo Detailers</title>
      </Head>
      <div className={styles.main}>
        <h3>Sign Up</h3>
        <div className={styles.textContainer}>
          <p>
            Creating an account will allow you to manage your maintenance, and
            get access to exclusive deals!
          </p>
        </div>
        <div>
          <SignUpForm />
          {/* <button onClick={() => signInWithPopup(auth, provider)}></button> */}
        </div>
      </div>
    </>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth);

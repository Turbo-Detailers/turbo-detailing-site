import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import AccentedTitle from "../components/titles/AccentedTitle";
import styles from "../styles/Home.module.scss";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Turbo Mobile Auto Detailing - Turbo Detailers</title>
        <meta
          name="description"
          content="Turbo Mobile Auto Detailing aims to give you the best car detailing experience in the comfort of your own home. Located in the Twin Cities Area, we come to you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Spacer height={1.75} />

        <AccentedTitle>Contact</AccentedTitle>
        <Spacer height={3} />

        <ContactForm />
      </main>
    </>
  );
}

export default ContactPage;

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
        <title>Contact Us - Turbo Detailers</title>
        <meta
          name="description"
          content="Contact us. If you have any questions about our services, feel free to reach out to us using our form! We provide detailing services in the Greater Twin Cities and Minneapolis area: Chaska, Chanhassen, Eden Prairie, Plymouth, Minnetonka, Wayzata, and more!"
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

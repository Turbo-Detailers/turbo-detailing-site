import Head from "next/head";
import Spacer from "../components/Spacer";
import AccentedTitle from "../components/titles/AccentedTitle";
import styles from "../styles/Home.module.scss";
import FAQ from "../components/FAQ";
import faqList from "../data/faq.json";

function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ - Turbo Detailers</title>
        <meta
          name="description"
          content="FAQ. Learn more about Luxury Mobile Auto Detailing, or what we have to offer for you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Spacer height={1.75} />

        <AccentedTitle>FAQ</AccentedTitle>
        <Spacer height={3} />

        <FAQ faqList={faqList} limit={3} />
      </main>
    </>
  );
}

export default FAQPage;

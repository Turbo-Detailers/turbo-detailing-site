import Head from "next/head";

import styles from "../styles/Home.module.scss";
import AccentedTitle from "../components/titles/AccentedTitle";

import sectionTwoStyles from "../styles/components/Home/SectionTwo.module.scss";
import sectionThreeStyles from "../styles/components/Home/SectionThree.module.scss";
import Subtitle from "../components/titles/Subtitle";
import AccentedText from "../components/text/AccentedText";
import PriceComparison from "../components/PriceComparison";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Turbo Detailing</title>
        <meta
          name="description"
          content="Turbo Detailing | Luxury Mobile Auto Detailing in the Twin Cities Area"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <AccentedTitle>Turbo</AccentedTitle>
          <Subtitle>Luxury Detailing</Subtitle>
        </div>
      </main>

      {/* visual */}
      <div className={sectionTwoStyles.sectionTwo}>
        <div className={sectionTwoStyles.wrapper}>
          <div className={` ${sectionTwoStyles.paragraph}`}>
            Welcome to <AccentedText>Turbo Luxury Auto Detailing</AccentedText>,
            where we tailor our services to meet the unique needs of your
            vehicle. Our full <AccentedText>interior and exterior</AccentedText>{" "}
            detailing services use only the best products and techniques to
            leave your car looking and feeling like new. Our team of experts
            personalize their approach to fit the specific make and model of
            your car, from leather and upholstery care to tire shining.{" "}
            <AccentedText>
              <strong> Experience the Turbo difference.</strong>
            </AccentedText>
          </div>
        </div>
      </div>

      <div className={sectionThreeStyles.container}>
        <strong>
          Pick <AccentedText>Your </AccentedText> Plan
        </strong>
        <PriceComparison />
      </div>
      <footer className={styles.footer}>
        &copy; 2023 Turbo Detailing. All rights reserved.
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AccentedTitle from "../components/titles/AccentedTitle";

import sectionTwoStyles from "../styles/components/Home/SectionTwo.module.css";
import { Fonts } from "../bin/fonts";
import Subtitle from "../components/titles/Subtitle";
import Link from "next/link";

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
          <div className={`${Fonts.subtitle} ${sectionTwoStyles.paragraph}`}>
            Welcome to Turbo Luxury Auto Detailing, where we tailor our services
            to meet the unique needs of your vehicle. Our full interior and
            exterior detailing services use only the best products and
            techniques to leave your car looking and feeling like new. Our team
            of experts personalize their approach to fit the specific make and
            model of your car, from leather and upholstery care to tire shining.
            Experience the Turbo difference.
            {/* <Image
              src={"/images/tires.tiff"}
              alt="cleaning tires"
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image> */}
          </div>
          <div className={`${sectionTwoStyles.actionButton} ${Fonts.title}`}>
            <Link href={"https://calendly.com/turbodetailers/complete"}>
              Schedule your appointment today.
            </Link>
          </div>
        </div>
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

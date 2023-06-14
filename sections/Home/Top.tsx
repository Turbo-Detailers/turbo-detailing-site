import { motion } from "framer-motion";
import variants from "../../bin/variants";
import AccentedTitle from "../../components/titles/AccentedTitle";
import Subtitle from "../../components/titles/Subtitle";
import styles from "../../styles/Home.module.scss";
import topStyles from "../../styles/components/Home/Top.module.scss";
import LinkButton from "components/buttons/LinkButton";
import Image from "next/image";
import bgimg from "../../public/images/cover-img.jpg";
import Head from "next/head";

// import backgroundVid from "../../public/videos/a4-detail.mp4";

function Top() {
  return (
    <>
      <Head>
        {/* <link
          rel="preload"
          href={`/_next/image?url=${bgimg.src}`}
          imageSrcSet={`/_next/image?url=${bgimg.src} 1200w,
     /_next/image?url=${bgimg.src}?w=200 200w, 
     /_next/image?url=${bgimg.src}?w=400 400w, 
     /_next/image?url=${bgimg.src}?w=800 800w, 
     /_next/image?url=${bgimg.src}?w=1024 1024w`}
          as="image"
        /> */}
      </Head>
      <main className={topStyles.main}>
        {/* <img id="backgroundimage" src="images/cover-img.jpg" alt="" /> */}
        {/* <img
          id="backgroundimage"
          src={bgimg.src}
          srcSet={`/_next/image?url=${bgimg.src} 1200w,
     /_next/image?url=${bgimg.src}?w=200 200w, 
     /_next/image?url=${bgimg.src}?w=400 400w, 
     /_next/image?url=${bgimg.src}?w=800 800w, 
     /_next/image?url=${bgimg.src}?w=1024 1024w`}
          alt="audi a4 with a clean exterior"
        ></img> */}

        <Image
          priority
          fetchPriority="high"
          src={bgimg.src}
          id="backgroundimage"
          alt="audi a4 with a clean exterior"
        />
        <div className={topStyles.container}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div style={{ letterSpacing: "1.5ch" }}>
              <AccentedTitle>Turbo</AccentedTitle>
            </div>
            <motion.div
              variants={variants.fadeInUp}
              initial="hidden"
              animate="show"
            >
              <Subtitle>Luxury Detailing</Subtitle>
              {/* <LinkButton href="/book" text="Book today" /> */}
            </motion.div>
            <p className={styles.scrollSign}>
              SCROLL <a className={styles.scrollSignBar}>━━━</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Top;

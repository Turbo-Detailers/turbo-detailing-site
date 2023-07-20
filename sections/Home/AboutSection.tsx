// import { motion } from "framer-motion";
import { Fonts } from "../../bin/fonts";
// import variants from "../../bin/variants";
// import styles from "../../styles/components/Home/AboutSection.module.scss";
import SectionBreak from "components/SectionBreak";

// function AboutSection() {
//   return (
//     <div className={styles.sectionTwo}>
//       <motion.div
//         variants={variants.fadeInUp}
//         initial={"hidden"}
//         whileInView={"show"}
//         viewport={{ once: true }}
//         className={styles.wrapper}
//       >
//         <div className={"flex-row-center"}>
//           <div className={styles.textDiv}>
//             <SectionBreak>About Us</SectionBreak>

//             <div className={`${styles.paragraph} ${Fonts.body}`}>
// Welcome to Turbo Luxury Auto Detailing, where we tailor our
// services to meet the unique needs of your vehicle. Our full
// interior and exterior detailing services use only the best
// products and techniques to leave your car looking and feeling like
// new. Our team of experts personalize their approach to fit the
// specific make and model of your car, from leather and upholstery
// care to tire shining. Experience the Turbo difference.
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
// export default AboutSection;

import ContentSection from "../../components/ContentSection";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import serviceMap from "../../public/images/service-area-map.jpg";
import Link from "next/link";
import Spacer from "../../components/Spacer";

function AboutSection() {
  return (
    // <section className="why-us">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div className="why-us__img">
    //           <img src="img/why-us.png" alt="" />
    //         </div>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="why-us__text">
    //           <div className="section-title">
    //             <h2>Why Choose Us</h2>
    //           </div>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
    //             ipsum suspendisse ultrices gravida. Risus commodo viverra
    //             maecenas accumsan lacus vel facilisis.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <SectionBreak>About Us</SectionBreak>
      <div
        className={"flex-row-responsive mt-3 lg:mt-0"}
        style={{
          width: "100%",
          backgroundColor: "#1a1a1a",
          maxWidth: "100vw",
        }}
      >
        <div style={{ marginTop: "1rem" }} className={`${Fonts.body}`}>
          <Balancer>
            <ContentSection
              text="Welcome to Turbo Luxury Auto Detailing, where we tailor our
              services to meet the unique needs of your vehicle. Our full
              interior and exterior detailing services use only the best
              products and techniques to leave your car looking and feeling like
              new. Our team of experts personalize their approach to fit the
              specific make and model of your car, from leather and upholstery
              care to tire shining. Experience the Turbo difference.
              
              We proudly serve the West-Metro area of the Twin Cities, including Chanhassen, Maple Grove, Wayzata, Minnetonka, Shakopee, Eden Prairie, Prior Lake and more!"
              //   title="Why Turbo?"
              image="/images/home/2.png"
              imageAlt="none"
              isBackgroundImage={false}
            />
          </Balancer>
        </div>

        <Spacer height={1} />
        <Link href={`/gallery/images/service-area-map.jpg`}>
          <Image
            src={serviceMap}
            alt={"Service Areas Map"}
            quality={100}
            style={{ width: "100%", objectFit: "contain", height: "100%" }}
          />
        </Link>
      </div>
    </>
  );
}

export default AboutSection;

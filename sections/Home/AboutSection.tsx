// import { motion } from "framer-motion";
import { Fonts } from "../../bin/fonts";
import variants from "../../bin/variants";
import styles from "../../styles/components/Home/AboutSection.module.scss";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import serviceMap from "../../public/images/service-area-map.jpg";

function AboutSection() {
  return (
    <div className="pt-12">
      <motion.div
        variants={variants.fadeInRight}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className={styles.wrapper}
      >
        <div className={"flex-row align-left mx-4 lg:mx-12"}>
          <div className={styles.textDiv}>
            {/* <SectionBreak>About Us</SectionBreak> */}
            <h3 className={`text-4xl ${Fonts.body}`}>Detailing.</h3>

            <Typewriter
              options={{
                strings: [
                  `On <span style="text-decoration: underline var(--text-accent-color)">your</span> terms.`,
                  `At <span style="text-decoration: underline var(--text-accent-color)">your</span> home.`,
                ],
                autoStart: true,
                loop: true,
                delay: "natural",
                skipAddStyles: true,
                wrapperClassName: `text-4xl font-bold ${Fonts.body_bold}`,
                cursorClassName: `text-4xl font-bold ${Fonts.body_bold}`,
              }}
            />
            <p className={`${Fonts.body} mt-2 whitepsace-pre-wrap`}>
              {/* Welcome to Turbo Luxury Auto Detailing, where we tailor our
services to meet the unique needs of your vehicle. Our full
interior and exterior detailing services use only the best
products and techniques to leave your car looking and feeling like
new. Our team of experts personalize their approach to fit the
specific make and model of your car, from leather and upholstery
care to tire shining. Experience the Turbo difference. */}
              We tailor our interior and exterior detailing services to use the best products for your vehicle. 

 <br /> <br />
              And the <span className={Fonts.body_bold}> best part?</span>{" "}
              We&apos;re{" "}
              <span className="underline decoration-red-600">mobile.</span> We take excellent care of your car while you relax at home. 
Simple, convenient, and elegant - that's us.
              It&apos;s just that simple.
              <div>
                <Link href="/book">
                  <button className="bg-red-500 hover:bg-black text-white font-bold py-2 px-4 rounded duration-150 mt-6">
                    Book a detailing today.
                  </button>
                </Link>
              </div>
            </p>
          </div>
          {/* <div className="h-full w-64">
            <Image src={serviceMap} alt="Service Areas"></Image>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}
export default AboutSection;

// import ContentSection from "../../components/ContentSection";
// import Balancer from "react-wrap-balancer";
// import Image from "next/image";
// import serviceMap from "../../public/images/service-area-map.jpg";
// import Link from "next/link";
// import Spacer from "../../components/Spacer";
import { motion } from "framer-motion";
import Link from "next/link";

// function AboutSection() {
//   return (
//     // <section className="why-us">
//     //   <div className="container">
//     //     <div className="row">
//     //       <div className="col-lg-6">
//     //         <div className="why-us__img">
//     //           <img src="img/why-us.png" alt="" />
//     //         </div>
//     //       </div>
//     //       <div className="col-lg-6">
//     //         <div className="why-us__text">
//     //           <div className="section-title">
//     //             <h2>Why Choose Us</h2>
//     //           </div>
//     //           <p>
//     //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//     //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
//     //             ipsum suspendisse ultrices gravida. Risus commodo viverra
//     //             maecenas accumsan lacus vel facilisis.
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//     <>
//       <SectionBreak>About Us</SectionBreak>
//       <div
//         className={"flex-row-responsive mt-3 lg:mt-0"}
//         style={{
//           width: "100%",
//           backgroundColor: "#1a1a1a",
//           maxWidth: "100vw",
//         }}
//       >
//         <div style={{ marginTop: "1rem" }} className={`${Fonts.body}`}>
//           <Balancer>
//             <ContentSection
//               text="Welcome to Turbo Luxury Auto Detailing, where we tailor our
//               services to meet the unique needs of your vehicle. Our full
//               interior and exterior detailing services use only the best
//               products and techniques to leave your car looking and feeling like
//               new. Our team of experts personalize their approach to fit the
//               specific make and model of your car, from leather and upholstery
//               care to tire shining. Experience the Turbo difference.

//               We proudly serve the West-Metro area of the Twin Cities, including Chanhassen, Maple Grove, Wayzata, Minnetonka, Shakopee, Eden Prairie, Prior Lake and more!"
//               //   title="Why Turbo?"
//               image="/images/home/2.png"
//               imageAlt="none"
//               isBackgroundImage={false}
//             />
//           </Balancer>
//         </div>

//         <Spacer height={1} />
//         <Link href={`/gallery/images/service-area-map.jpg`}>
//           <Image
//             src={serviceMap}
//             alt={"Service Areas Map"}
//             quality={100}
//             style={{ width: "100%", objectFit: "contain", height: "100%" }}
//           />
//         </Link>
//       </div>
//     </>
//   );
// }

// export default AboutSection;

import { motion } from "framer-motion";
import { Fonts } from "../../bin/fonts";
import variants from "../../bin/variants";
import sectionTwoStyles from "../../styles/components/Home/SectionTwo.module.scss";
import Image from "next/image";

function AboutSection() {
  return (
    <div className={sectionTwoStyles.sectionTwo}>
      <motion.div
        variants={variants.fadeInUp}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className={sectionTwoStyles.wrapper}
      >
        <div
          style={{
            borderRadius: "10px",
            width: "100%",
            position: "relative",
            backgroundColor: "none",
          }}
        >
          <div style={{ marginLeft: "2rem" }}>
            <h1 className={`${sectionTwoStyles.title} ${Fonts.body}`}>
              <b>About Us</b>
            </h1>
          </div>
          <div className={`${sectionTwoStyles.paragraph} ${Fonts.body}`}>
            Welcome to Turbo Luxury Auto Detailing, where we tailor our services
            to meet the unique needs of your vehicle. Our full interior and
            exterior detailing services use only the best products and
            techniques to leave your car looking and feeling like new. Our team
            of experts personalize their approach to fit the specific make and
            model of your car, from leather and upholstery care to tire shining.
            {/* <AccentedText> */} Experience the Turbo difference.
            {/* </AccentedText> */}
          </div>
          <Image
            src={"/images/home/3.png"}
            alt="Bugatti"
            key="/images/home/3.png"
            fill={true}
            quality={100}
            style={{ objectFit: "cover", zIndex: -2 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
export default AboutSection;

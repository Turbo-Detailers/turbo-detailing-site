import { motion } from "framer-motion";
import styles from "../styles/components/ContentSection.module.scss";
import { Fonts } from "../bin/fonts";
import variants from "../bin/variants";
import Image from "next/image";

interface ContentSectionProps {
  text: string;
  title?: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  backgroundColor?: string;
  isBackgroundImage?: boolean;
}

function ContentSection({
  text,
  title,
  image,
  imageAlt,
  imagePosition = "left",
  backgroundColor = "white",
  isBackgroundImage = false,
}: ContentSectionProps) {
  //   if (isBackgroundImage) {
  return (
    <section>
      <div className={styles.sectionTwo}>
        <motion.div
          variants={variants.fadeInUp}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          className={styles.wrapper}
        >
          <div className={"flex-row"}>
            <div className={styles.textDiv}>
              <div className={styles.title}>
                <h1 className={`${styles.title} ${Fonts.body}`}>
                  <b>{title}</b>
                </h1>
              </div>
              <div className={`${styles.paragraph} ${Fonts.body}`}>{text}</div>
            </div>
            {/* <Image
              src={image}
              alt={imageAlt}
              key={image}
              fill={true}
              quality={100}
              style={{ objectFit: "cover", zIndex: -2 }}
            /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
  //   } else {
  //     return (
  //       <section>
  //         <div className={styles.sectionTwo}>
  //           <motion.div
  //             variants={variants.fadeInUp}
  //             initial={"hidden"}
  //             whileInView={"show"}
  //             viewport={{ once: true }}
  //             className={styles.wrapper}
  //           >
  //             <div className={"flex-row"}>
  //               <div className={styles.textDiv}>
  //                 <div className={styles.title}>
  //                   <h1 className={`${styles.title} ${Fonts.body}`}>
  //                     <b>{title}</b>
  //                   </h1>
  //                 </div>
  //                 <div className={`${styles.paragraph} ${Fonts.body}`}>
  //                   {text}
  //                 </div>
  //               </div>
  //               <div className={styles.imageDiv}>
  //                 <Image
  //                   src={image}
  //                   alt={imageAlt}
  //                   key={image}
  //                   fill={true}
  //                   quality={100}
  //                   style={{ objectFit: "cover", zIndex: -2 }}
  //                 />
  //               </div>
  //             </div>
  //           </motion.div>
  //         </div>
  //       </section>
  //     );
  //   }
}
export default ContentSection;

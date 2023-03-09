import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/components/FAQ.module.scss";
import { Fonts } from "../bin/fonts";

interface FAQProps {
  faqList: FAQ[];
  limit?: number;
}

interface FAQ {
  question: string;
  answer: string;
}

const FAQ = ({ faqList, limit }: FAQProps) => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const toggleQuestion = (index: any) => {
    setSelectedQuestionIndex(index === selectedQuestionIndex ? null : index);
  };

  return (
    <div className={styles.main}>
      {faqList.map((faq, index) => {
        if (index <= (limit ? limit - 1 : faqList.length))
          return (
            <motion.div
              key={index}
              layout
              onClick={() => toggleQuestion(index)}
            >
              <motion.div
                initial={false}
                animate={{
                  borderBottom:
                    selectedQuestionIndex === index
                      ? "0.2rem solid"
                      : "0.1rem solid",

                  borderColor:
                    selectedQuestionIndex === index ? "#e93f33" : "white",
                }}
                transition={{ duration: 0.2 }}
                className={`${styles.heading} ${Fonts.body}`}
              >
                <div className="flex-row">
                  <h4>{faq.question}</h4>
                  <motion.li
                    style={{
                      listStyle: "none",
                      maxWidth: "1.5rem",
                      maxHeight: "1.5rem",
                      userSelect: "none",
                      width: "auto",
                    }}
                    className="flex-column"
                    animate={{
                      rotate:
                        selectedQuestionIndex === index ? "45deg" : "0deg",
                    }}
                  >
                    <span>+</span>
                  </motion.li>
                </div>
                <AnimatePresence>
                  {selectedQuestionIndex === index && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
      })}
    </div>
  );
};

export default FAQ;

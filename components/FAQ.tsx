import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/components/FAQ.module.scss";

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
                className={styles.heading}
              >
                <p>{faq.question}</p>
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

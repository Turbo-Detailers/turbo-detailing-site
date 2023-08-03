import { Variants } from "framer-motion";

const variants: { [key: string]: Variants } = {
  fadeInUp: {
    hidden: { opacity: 0, y: "30px" },
    show: {
      opacity: 1,
      y: "0px",
      transition: {
        delayChildren: 0.5,
        delay: 0.25,
        type: "spring",
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        type: "spring",
      },
    },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: "-30px" },
    show: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: "30px" },
    show: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 0.5,
      },
    },
  },
};

export default variants;

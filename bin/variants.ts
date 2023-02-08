const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: "30px" },
    show: {
      opacity: 1,
      y: "0px",
      transition: {
        delayChildren: 0.5,
        delay: 0.5,
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  },
};

export default variants;

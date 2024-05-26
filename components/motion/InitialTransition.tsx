import { motion } from "framer-motion";
import React, { useEffect } from "react";

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 100,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export default function InitialTransition() {
  // Scroll user to top to avoid showing the footer
  // React.useState(() => {
  //     typeof window !== "undefined" && window.scrollTo(0, 0);
  // });

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    // <motion.div
    //   className="absolute z-50 flex items-center justify-center w-full bg-black select-none h-full"
    //   initial="initial"
    //   animate="animate"
    //   variants={blackBox}
    //   onAnimationStart={() => document.body.classList.add("overflow-hidden")}
    //   onAnimationComplete={() =>
    //     document.body.classList.remove("overflow-hidden")
    //   }
    //   layout
    // >
    //   <motion.svg variants={textContainer} className="absolute z-50 flex">
    //     <pattern
    //       id="pattern"
    //       patternUnits="userSpaceOnUse"
    //       width={750}
    //       height={800}
    //       className="text-white"
    //     >
    //       <rect className="w-full h-full fill-current" />
    //       <motion.rect
    //         variants={text}
    //         className="w-full h-full text-gray-600 fill-current"
    //       />
    //     </pattern>
    //     <pattern
    //       id="pattern-red"
    //       patternUnits="userSpaceOnUse"
    //       width={750}
    //       height={800}
    //       className="text-red"
    //     >
    //       <rect className="w-full h-full fill-red-700" />
    //       <motion.rect
    //         variants={text}
    //         className="w-full h-full text-gray-600 fill-black"
    //       />
    //     </pattern>

    //     <text
    //       className="text-5xl font-bold"
    //       textAnchor="middle"
    //       x="25%"
    //       y="51%"
    //       style={{ fill: "url(#pattern-red)" }}
    //     >
    //       {"["}
    //     </text>
    //     <text
    //       className="text-4xl font-bold"
    //       textAnchor="middle"
    //       x="50%"
    //       y="50%"
    //       style={{ fill: "url(#pattern)" }}
    //     >
    //       TURBO
    //     </text>
    //     <text
    //       className="text-5xl font-bold"
    //       textAnchor="middle"
    //       x="75%"
    //       y="51%"
    //       style={{ fill: "url(#pattern-red)" }}
    //     >
    //       {"]"}
    //     </text>
    //   </motion.svg>
    // </motion.div>
    <></>
  );
}

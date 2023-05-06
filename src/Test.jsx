import React from "react";
import "./App.css";
import { motion } from "framer-motion";

const App = () => {
  const divVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };
  const buttonVariants = {
    hidden: { x: "-100vw" },
    show: { x: 0, transition: { duration: 1, delay: 0.5, type: "spring" } },
  };
  return (
    <div
      className=" flex items-center justify-center h-screen "
      onClick={(e) => console.log(e.target.value)}
      value={"dsjflsa"}
    >
      {/* <motion.div
        variants={divVariant}
        initial="hidden"
        animate="show"
        className="bg-red-400 p-20"
      >
        <motion.button
          className=" bg-black px-10 py-2 rounded-full text-white "
          variants={buttonVariants}
        >
          Button
        </motion.button>
      </motion.div> */}

      <div
        className=" w-10 bg-slate-500 h-10"
        onClick={(e) => console.log(e.target)}
      ></div>
      <div
        className=" w-10 bg-red-500 h-10"
        onClick={(e) => console.log(e.target)}
      ></div>
    </div>
  );
};

export default App;

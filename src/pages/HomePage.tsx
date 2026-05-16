import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import desktopBG from "../assets/home/background-home-desktop.jpg";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 relative overflow-hidden"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -1000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-72 right-20 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-96 left-1/2 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-72 right-1/3 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-[600px] left-[70%] w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-[800px] left-[30%] w-1 h-1 bg-white rounded-full"></div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 pt-32 md:pt-40 lg:pt-52 pb-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl text-center lg:text-left lg:ml-20"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "10px" }}
              animate={{ opacity: 1, letterSpacing: "4px" }}
              transition={{ delay: 0.2, duration: 1 }}
              className="uppercase tracking-[4px] text-gray-300 text-sm md:text-lg mb-6"
            >
              So, you want to travel to
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                letterSpacing: "30px",
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0px",
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="text-7xl md:text-8xl lg:text-[10rem] uppercase mb-6 font-light"
            >
              Space
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-gray-300 leading-7 md:leading-8 text-sm md:text-base max-w-md mx-auto lg:mx-0"
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we we'll give you a truly out
              of this world experience.
            </motion.p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 1,
              type: "spring",
            }}
            className="flex justify-center items-center"
          >
            <Link to="/destination">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 60px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.2)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-white text-black uppercase tracking-[3px] text-lg md:text-xl overflow-hidden"
              >
                {/* GLOW RING */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border border-white"
                />

                <span className="relative z-10">Explore</span>
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default HomePage;

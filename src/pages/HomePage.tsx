import Navbar from "../components/Navbar";
import desktopBG from "../assets/home/background-home-desktop.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  pageVariant,
  staggerContainer,
  itemFade,
  floatImage,
} from "../components/PageTransition";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 w-full mx-auto"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 pt-32 md:pt-40 lg:pt-52 pb-20">
        {/* LEFT TEXT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-xl text-center lg:text-left ml-20"
        >
          <motion.p
            variants={itemFade}
            className="uppercase tracking-[4px] text-gray-300 text-sm md:text-lg mb-6"
          >
            So, you want to travel to
          </motion.p>

          <motion.h1
            variants={itemFade}
            className="text-7xl md:text-8xl lg:text-9xl uppercase mb-6"
          >
            Space
          </motion.h1>

          <motion.p
            variants={itemFade}
            className="text-gray-300 leading-7 md:leading-8 text-sm md:text-base max-w-md mx-auto lg:mx-0"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we we'll give you a truly out of
            this world experience.
          </motion.p>
        </motion.div>

        {/* EXPLORE BUTTON (FIXED NAVIGATION) */}
        <motion.div
          {...floatImage}
          className="flex justify-center items-center"
        >
          <motion.div
            onClick={() => navigate("/destination")}
            whileHover={{
              scale: 1.12,
              boxShadow: "0 0 60px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full bg-white text-black uppercase tracking-[2px] text-lg md:text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer transition duration-300"
          >
            Explore
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HomePage;

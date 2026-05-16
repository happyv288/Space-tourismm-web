import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";

import techImage1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import techImage2 from "../assets/technology/image-spaceport-landscape.jpg";
import techImage3 from "../assets/technology/image-space-capsule-landscape.jpg";

import desktopBG from "../assets/technology/background-technology-desktop.jpg";

type Direction = "left" | "right";

type TechType = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const technologies: TechType[] = [
  {
    id: 1,
    name: "Launch Vehicle",
    description:
      "A rocket used to carry payloads from Earth into space and orbit.",
    image: techImage1,
  },
  {
    id: 2,
    name: "Spaceport",
    description: "A facility designed for launching and receiving spacecraft.",
    image: techImage2,
  },
  {
    id: 3,
    name: "Space Capsule",
    description: "A spacecraft designed to safely transport astronauts.",
    image: techImage3,
  },
];

const Technology = () => {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>("right");

  const changeTech = (newIndex: number) => {
    setDirection(newIndex > index ? "right" : "left");
    setIndex(newIndex);
  };

  const tech = technologies[index];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 overflow-hidden relative"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      <div className="relative z-10">
        <Navbar />

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-center lg:text-left"
        >
          <h2 className="uppercase tracking-[4px] text-lg md:text-2xl">
            <span className="text-gray-500 mr-4">03</span>
            Space Launch 101
          </h2>
        </motion.div>

        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 pt-16">
          {/* BUTTONS */}
          <div className="flex lg:flex-col gap-5">
            {technologies.map((_, i) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={i}
                onClick={() => changeTech(i)}
                className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full border transition-all duration-300 text-lg ${
                  index === i
                    ? "bg-white text-black border-white"
                    : "border-white/40 hover:bg-white/20 hover:border-white"
                }`}
              >
                {i + 1}

                {index === i && (
                  <motion.span
                    layoutId="techIndicator"
                    className="absolute inset-0 rounded-full border-2 border-white"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tech.name}
              initial={{
                opacity: 0,
                x: direction === "right" ? 80 : -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction === "right" ? -80 : 80,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="max-w-xl text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="uppercase text-gray-400 tracking-[3px] mb-4"
              >
                The terminology...
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, letterSpacing: "10px" }}
                animate={{ opacity: 1, letterSpacing: "0px" }}
                transition={{ duration: 0.8 }}
                className="uppercase text-4xl md:text-5xl lg:text-6xl mb-6"
              >
                {tech.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 leading-8 text-sm md:text-base"
              >
                {tech.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tech.image}
              initial={{
                opacity: 0,
                scale: 0.8,
                x: direction === "right" ? 120 : -120,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: direction === "right" ? -120 : 120,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >
              <motion.img
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={tech.image}
                alt={tech.name}
                className="w-full max-w-[550px] rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.12)]"
              />
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </motion.div>
  );
};

export default Technology;
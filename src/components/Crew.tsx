import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";

import crewImage1 from "../assets/crew/image-douglas-hurley.png";
import crewImage2 from "../assets/crew/image-mark-shuttleworth.png";
import crewImage3 from "../assets/crew/image-victor-glover.png";
import crewImage4 from "../assets/crew/image-anousheh-ansari.png";

import desktopBG from "../assets/crew/background-crew-desktop.jpg";

const crews = [
  {
    id: 1,
    role: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.",
    image: crewImage1,
  },
  {
    id: 2,
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical.",
    image: crewImage2,
  },
  {
    id: 3,
    role: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon.",
    image: crewImage3,
  },
  {
    id: 4,
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and entrepreneur.",
    image: crewImage4,
  },
];

type Direction = "left" | "right";

const Crew = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("right");

  const changeCrew = (newIndex: number) => {
    setDirection(newIndex > index ? "right" : "left");
    setIndex(newIndex);
  };

  const crew = crews[index];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 overflow-x-hidden relative"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative z-10">
        <Navbar />

        {/* TITLE */}
        <div className="mt-10">
          <h2 className="uppercase tracking-[4px] text-lg md:text-2xl text-center lg:text-left">
            <span className="text-gray-500 mr-4">02</span>
            Meet your crew
          </h2>
        </div>

        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-10 min-h-[80vh]">
          {/* TEXT SECTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={crew.name}
              initial={{
                opacity: 0,
                x: direction === "right" ? 40 : -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction === "right" ? -40 : 40,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="text-center lg:text-left max-w-xl w-full"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="uppercase text-gray-400 text-2xl md:text-3xl mb-4"
              >
                {crew.role}
              </motion.h3>

              <motion.h1
                initial={{ opacity: 0, letterSpacing: "10px" }}
                animate={{ opacity: 1, letterSpacing: "0px" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="uppercase text-5xl md:text-6xl lg:text-7xl mb-6 font-light"
              >
                {crew.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 leading-8 text-sm md:text-base max-w-lg"
              >
                {crew.description}
              </motion.p>

              {/* DOTS */}
              <div className="flex gap-5 justify-center lg:justify-start mt-10">
                {crews.map((_, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => changeCrew(i)}
                    className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                      index === i
                        ? "bg-white scale-150"
                        : "bg-white/30 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE SECTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={crew.image}
              initial={{
                opacity: 0,
                scale: 0.8,
                x: direction === "right" ? 60 : -60,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: direction === "right" ? -60 : 60,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="flex justify-center w-full lg:w-auto"
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
                src={crew.image}
                alt={crew.name}
                className="h-[260px] sm:h-[300px] md:h-[420px] lg:h-[560px] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              />
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </motion.div>
  );
};

export default Crew;
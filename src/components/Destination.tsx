import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";

import moonImage from "../assets/destination/image-moon.png";
import marsImage from "../assets/destination/image-mars.png";
import europaImage from "../assets/destination/image-europa.png";
import titanImage from "../assets/destination/image-titan.png";

import desktopBG from "../assets/destination/background-destination-desktop.jpg";

const destinations = [
  {
    name: "Moon",
    image: moonImage,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: marsImage,
    description:
      "Mars offers a cold, desert-like landscape perfect for exploration.",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: europaImage,
    description: "Europa may hide a vast ocean beneath its icy surface.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: titanImage,
    description:
      "Titan features lakes of liquid methane and a thick atmosphere.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

type DestinationType = (typeof destinations)[number];

const Destination = () => {
  const [active, setActive] = useState(destinations[0]);

  const changePlanet = (planet: DestinationType) => {
    setActive(planet);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 pb-32 overflow-hidden relative"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative z-10">
        <Navbar />

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex"
        >
          <h2 className="uppercase tracking-[4px] text-xl md:text-2xl">
            <span className="text-gray-500 mr-4">01</span>
            Pick your destination
          </h2>
        </motion.div>

        <section className="flex flex-col lg:flex-row items-center justify-between gap-20 pt-16">
          {/* PLANET IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                rotate: 20,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >
              <motion.img
                animate={{
                  rotate: 360,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                src={active.image}
                alt={active.name}
                className="w-52 md:w-72 lg:w-[420px] drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              />
            </motion.div>
          </AnimatePresence>

          {/* TEXT SECTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name + "-text"}
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -80,
              }}
              transition={{
                duration: 0.6,
              }}
              className="max-w-xl text-center lg:text-left"
            >
              {/* TABS */}
              <div className="flex gap-8 justify-center lg:justify-start uppercase tracking-[2px] text-gray-300 mb-10">
                {destinations.map((planet) => (
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    key={planet.name}
                    onClick={() => changePlanet(planet)}
                    className={`relative pb-2 transition-all duration-300 ${
                      active.name === planet.name
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {planet.name}

                    {active.name === planet.name && (
                      <motion.span
                        layoutId="planetUnderline"
                        className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* NAME */}
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "15px" }}
                animate={{ opacity: 1, letterSpacing: "0px" }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl lg:text-8xl uppercase mb-6"
              >
                {active.name}
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 leading-8 border-b border-white/20 pb-10 text-sm md:text-base"
              >
                {active.description}
              </motion.p>

              {/* STATS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col md:flex-row gap-10 pt-8"
              >
                <div>
                  <p className="text-gray-400 uppercase text-sm tracking-[2px]">
                    Avg. Distance
                  </p>

                  <h3 className="text-2xl md:text-3xl uppercase mt-2">
                    {active.distance}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-400 uppercase text-sm tracking-[2px]">
                    Est. Travel Time
                  </p>

                  <h3 className="text-2xl md:text-3xl uppercase mt-2">
                    {active.travel}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </motion.div>
  );
};

export default Destination;
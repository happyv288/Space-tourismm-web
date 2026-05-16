import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariant, floatImage } from "../components/PageTransition";

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

const Destination = () => {
  const [active, setActive] = useState(destinations[0]);

  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 pb-32"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      {/* TITLE (NUMBER KEPT) */}
      <div className="mt-10 flex">
        <h2 className="uppercase tracking-[4px] text-xl">
          <span className="text-gray-500 mr-4">01</span>
          Pick your destination
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-20 pt-16">
        {/* IMAGE (WITH ANIMATION) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            {...floatImage}
            className="flex justify-center"
          >
            <img
              src={active.image}
              alt={active.name}
              className="w-52 md:w-72 lg:w-[400px] transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* TEXT */}
        <motion.div
          key={active.name + "-text"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl text-center lg:text-left"
        >
          {/* TABS (hover underline RESTORED) */}
          <div className="flex gap-8 justify-center lg:justify-start uppercase tracking-[2px] text-gray-300 mb-10">
            {destinations.map((planet) => (
              <button
                key={planet.name}
                onClick={() => setActive(planet)}
                className="relative group transition-all duration-300"
              >
                {planet.name}

                {/* hover underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>

                {/* active underline */}
                {active.name === planet.name && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
                )}
              </button>
            ))}
          </div>

          <h1 className="text-6xl md:text-7xl uppercase mb-6">{active.name}</h1>

          <p className="text-gray-300 leading-8 border-b border-white/20 pb-10">
            {active.description}
          </p>

          <div className="flex flex-col md:flex-row gap-10 pt-8">
            <div>
              <p className="text-gray-400 uppercase text-sm">Avg. Distance</p>
              <h3 className="text-2xl uppercase">{active.distance}</h3>
            </div>

            <div>
              <p className="text-gray-400 uppercase text-sm">
                Est. Travel Time
              </p>
              <h3 className="text-2xl uppercase">{active.travel}</h3>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Destination;

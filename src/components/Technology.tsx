import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

import techImage1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import techImage2 from "../assets/technology/image-spaceport-landscape.jpg";
import techImage3 from "../assets/technology/image-space-capsule-landscape.jpg";

import desktopBG from "../assets/technology/background-technology-desktop.jpg";

const technologies = [
  {
    name: "Launch Vehicle",
    description: " A Rocket used to carry payload from Earth into space and orbit.",
    image: techImage1,
  },
  { name: "Spaceport", description: "A facility designed for launching and receiving spacecraft.", image: techImage2 },
  {
    name: "Space Capsule",
    description: "A spacecraft designed to safely transport astronauts.",
    image: techImage3,
  },
];

const Technology = () => {
  const [index, setIndex] = useState(0);
  const tech = technologies[index];

  return (
    <div
      className="min-h-[100dvh] bg-cover bg-center text-white px-6 md:px-10 lg:px-20"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      {/* HEADER 03 */}
      <div className="mt-10 mb-6 text-center lg:text-left">
        <h2 className="uppercase tracking-[4px] text-xl">
          <span className="text-gray-500 mr-4">03</span>
          Space Launch 101
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-6">
        <div className="flex lg:flex-col gap-4">
          {technologies.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-10 h-10 rounded-full border ${
                i === index ? "bg-white text-black" : "border-white/40"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <p className="text-gray-400 uppercase mb-2">The terminology...</p>
          <h1 className="text-4xl uppercase mb-4">{tech.name}</h1>
          <p className="text-gray-300">{tech.description}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.img
            key={tech.name}
            src={tech.image}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[400px]"
          />
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Technology;

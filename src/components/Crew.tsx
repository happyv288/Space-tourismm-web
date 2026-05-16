import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

import crewImage1 from "../assets/crew/image-douglas-hurley.png";
import crewImage2 from "../assets/crew/image-mark-shuttleworth.png";
import crewImage3 from "../assets/crew/image-victor-glover.png";
import crewImage4 from "../assets/crew/image-anousheh-ansari.png";

import desktopBG from "../assets/crew/background-crew-desktop.jpg";

const crews = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    description: "NASA astronaut.",
    image: crewImage1,
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    description: "Founder of Canonical.",
    image: crewImage2,
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    description: "Crew Dragon pilot.",
    image: crewImage3,
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    description: "Engineer and entrepreneur.",
    image: crewImage4,
  },
];

const Crew = () => {
  const [index, setIndex] = useState(0);
  const crew = crews[index];

  return (
    <div
      className="min-h-[100dvh] bg-cover bg-center text-white px-6 md:px-10 lg:px-20"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      {/* HEADER 02 */}
      <div className="mt-10 mb-6 text-center lg:text-left">
        <h2 className="uppercase tracking-[4px] text-xl">
          <span className="text-gray-500 mr-4">02</span>
          Meet your crew
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-6">
        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-gray-400">{crew.role}</h3>
          <h1 className="text-5xl uppercase mb-4">{crew.name}</h1>
          <p className="text-gray-300">{crew.description}</p>

          <div className="flex gap-3 mt-6 justify-center lg:justify-start">
            {crews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.img
            key={crew.name}
            src={crew.image}
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="h-[240px] md:h-[420px] lg:h-[500px]"
          />
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Crew;

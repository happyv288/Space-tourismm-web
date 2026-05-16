import { useState } from "react";
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
  const [animating, setAnimating] = useState<boolean>(true);

  const changeTech = (newIndex: number) => {
    setDirection(newIndex > index ? "right" : "left");
    setAnimating(false);

    setTimeout(() => {
      setIndex(newIndex);
      setAnimating(true);
    }, 220);
  };

  const tech = technologies[index];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      {/* TITLE */}
      <div className="mt-10 text-center lg:text-left">
        <h2 className="uppercase tracking-[4px] text-lg md:text-2xl">
          <span className="text-gray-500 mr-4">03</span>
          Space Launch 101
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 pt-16">
        {/* BUTTONS */}
        <div className="flex lg:flex-col gap-4">
          {technologies.map((_, i) => (
            <button
              key={i}
              onClick={() => changeTech(i)}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full border transition-all duration-300 ${
                index === i
                  ? "bg-white text-black scale-110"
                  : "hover:bg-white/20 hover:scale-105"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* TEXT */}
        <div
          className={`max-w-xl transition-all duration-500 ${
            animating
              ? "opacity-100 translate-x-0"
              : direction === "right"
                ? "opacity-0 -translate-x-16"
                : "opacity-0 translate-x-16"
          }`}
        >
          <p className="uppercase text-gray-400 tracking-[2px] mb-4">
            The terminology...
          </p>

          <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl mb-6">
            {tech.name}
          </h1>

          <p className="text-gray-300 leading-8">{tech.description}</p>
        </div>

        {/* IMAGE */}
        <div
          className={`flex justify-center transition-all duration-500 ${
            animating
              ? "opacity-100 translate-x-0"
              : direction === "right"
                ? "opacity-0 translate-x-20"
                : "opacity-0 -translate-x-20"
          }`}
        >
          <img
            src={tech.image}
            alt={tech.name}
            className="w-full max-w-[500px] rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Technology;

import { useState } from "react";
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

// ONLY ADD TYPE (no logic change)
type DestinationType = (typeof destinations)[number];

const Destination = () => {
  const [active, setActive] = useState(destinations[0]);
  const [animate, setAnimate] = useState(true);

  const changePlanet = (planet: DestinationType) => {
    setAnimate(false);

    setTimeout(() => {
      setActive(planet);
      setAnimate(true);
    }, 220);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20 pb-32"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      <div className="mt-10 flex">
        <h2 className="uppercase tracking-[4px] text-xl">
          <span className="text-gray-500 mr-4">01</span>
          Pick your destination
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-20 pt-16">
        {/* IMAGE */}
        <div
          className={`flex justify-center transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            animate
              ? "opacity-100 scale-100 translate-y-0 rotate-0"
              : "opacity-0 scale-75 translate-y-10 rotate-6"
          }`}
        >
          <img
            src={active.image}
            alt={active.name}
            className="w-52 md:w-72 lg:w-[400px] transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* TEXT */}
        <div
          className={`max-w-xl text-center lg:text-left transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            animate
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-90"
          }`}
        >
          {/* TABS */}
          <div className="flex gap-8 justify-center lg:justify-start uppercase tracking-[2px] text-gray-300 mb-10">
            {destinations.map((planet) => (
              <button
                key={planet.name}
                onClick={() => changePlanet(planet)}
                className={`relative group transition-all duration-300 ${
                  active.name === planet.name
                    ? "text-white scale-110"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {planet.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>

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
        </div>
      </section>
    </div>
  );
};

export default Destination;

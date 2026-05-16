import Navbar from "../components/Navbar";
import desktopBG from "../assets/home/background-home-desktop.jpg";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white px-6 md:px-10 lg:px-20"
      style={{ backgroundImage: `url(${desktopBG})` }}
    >
      <Navbar />

      <section className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 pt-32 md:pt-40 lg:pt-52 pb-20">
        {/* LEFT */}
        <div className="max-w-xl text-center lg:text-left ml-20">
          <p className="uppercase tracking-[4px] text-gray-300 text-sm md:text-lg mb-6">
            So, you want to travel to
          </p>

          <h1 className="text-7xl md:text-8xl lg:text-9xl uppercase mb-6">
            Space
          </h1>

          <p className="text-gray-300 leading-7 md:leading-8 text-sm md:text-base max-w-md mx-auto lg:mx-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we we'll give you a truly out of
            this world experience.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center">
          <button className="w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full bg-white text-black uppercase tracking-[2px] text-lg md:text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition duration-300">
            Explore
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

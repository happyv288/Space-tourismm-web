import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = "relative group flex items-center gap-3 h-full";

  const underline =
    "absolute left-0 -bottom-6 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full";

  return (
    <nav className="flex items-center justify-between pt-6 text-white relative w-full z-50">
      <div className="flex items-center flex-1 relative z-20">
        <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />

        <div className="hidden lg:block absolute top-1/2 left-20 right-[-40px] h-[1px] bg-white/20 -translate-y-1/2 z-30"></div>
      </div>

      <div className="hidden md:flex bg-white/10 backdrop-blur-xl px-6 md:px-10 lg:px-16 py-6 items-center z-20">
        <ul className="flex gap-4 md:gap-8 lg:gap-12 text-xs md:text-sm uppercase tracking-[2px] items-center">
          <li>
            <Link to="/" className={linkClass}>
              <span className="font-bold hidden lg:inline">00</span>
              Home
              <span className={underline}></span>
            </Link>
          </li>

          <li>
            <Link to="/destination" className={linkClass}>
              <span className="font-bold hidden lg:inline">01</span>
              Destination
              <span className={underline}></span>
            </Link>
          </li>

          <li>
            <Link to="/crew" className={linkClass}>
              <span className="font-bold hidden lg:inline">02</span>
              Crew
              <span className={underline}></span>
            </Link>
          </li>

          <li>
            <Link to="/technology" className={linkClass}>
              <span className="font-bold hidden lg:inline">03</span>
              Technology
              <span className={underline}></span>
            </Link>
          </li>
        </ul>
      </div>

      <button
        className="md:hidden z-50 text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-lg transition-transform duration-300 md:hidden z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 p-8 mt-20 text-sm uppercase tracking-[2px]">
          <li onClick={() => setOpen(false)}>
            <Link to="/">00 Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/destination">01 Destination</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/crew">02 Crew</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/technology">03 Technology</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

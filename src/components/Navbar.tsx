import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      id: "00",
      name: "Home",
      path: "/",
    },
    {
      id: "01",
      name: "Destination",
      path: "/destination",
    },
    {
      id: "02",
      name: "Crew",
      path: "/crew",
    },
    {
      id: "03",
      name: "Technology",
      path: "/technology",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-between pt-6 text-white relative w-full z-50"
    >
      {/* LEFT */}
      <div className="flex items-center flex-1 relative z-20">
        <motion.img
          whileHover={{ rotate: 180, scale: 1.08 }}
          transition={{ duration: 0.6 }}
          src={logo}
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12"
        />

        <div className="hidden lg:block absolute top-1/2 left-20 right-[-40px] h-[1px] bg-gradient-to-r from-white/40 to-transparent -translate-y-1/2 z-30"></div>
      </div>

      {/* DESKTOP NAV */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="hidden md:flex bg-white/10 backdrop-blur-2xl border border-white/10 px-6 md:px-10 lg:px-16 py-6 items-center z-20 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      >
        <ul className="flex gap-4 md:gap-8 lg:gap-12 text-xs md:text-sm uppercase tracking-[2px] items-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="relative flex items-center gap-3 h-full text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="font-bold hidden lg:inline">{link.id}</span>

                <motion.span whileHover={{ y: -1 }}>{link.name}</motion.span>

                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute left-0 -bottom-6 w-full h-[3px] bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* MOBILE BUTTON */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="md:hidden z-50 text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </motion.button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden z-30"
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed top-0 right-0 h-full w-72 bg-white/10 backdrop-blur-2xl border-l border-white/10 md:hidden z-40 shadow-[-10px_0_50px_rgba(0,0,0,0.4)]"
            >
              <ul className="flex flex-col gap-8 p-10 mt-24 text-sm uppercase tracking-[3px]">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-4 transition-all duration-300 ${
                        location.pathname === link.path
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <span className="font-bold">{link.id}</span>

                      <span>{link.name}</span>

                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="ml-auto w-2 h-2 rounded-full bg-white"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

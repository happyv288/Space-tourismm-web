export const pageVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut", // ✅ FIXED
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    filter: "blur(8px)",
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export const floatImage = {
  initial: { opacity: 0, scale: 0.85, y: 30 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut", // ✅ FIXED
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const itemFade = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
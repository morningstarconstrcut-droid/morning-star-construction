"use client"; // needed for Framer Motion

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const heroImages = [
  "/b.jpg",
  "/k.jpg",
  "/roof.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Cycle images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); // parallax movement
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]); // text fade

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background images */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[current]})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Tint overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Optional radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.1),transparent_70%)] pointer-events-none"></div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center px-130"
        style={{ y, opacity }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Morning Star Construction and remodeling in Victoria, Tx
        </h1>
        <p className="text-xl text-gray-200 mb-6">
          Professional masonry, roofing, remodeling, and exterior construction built to last.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-10 mt-8">
          <a
            href="tel:3617883004"
            className="bg-yellow-500 text-black px-8 py-4 font-semibold rounded-2xl text-lg hover:bg-yellow-600 transition"
          >
            Call Now
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Free Estimate
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

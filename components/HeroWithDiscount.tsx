"use client";

import { motion } from "framer-motion";

export default function HeroWithDiscount() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Hero Image / Background */}
      <div className="relative h-[70vh] w-full">
        <img
          src="/images/hero.jpg"
          alt="Morning Star Construction - Roofing, Masonry, Remodeling"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          
          {/* Top Banner / Discount */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-full mb-4 shadow-lg"
          >
            🎉 15% Off for First-Time Clients – Book Your Project Today!
          </motion.div>

          {/* Main Hero Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Building Your Dream Home in Victoria, TX
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 mb-6"
          >
            Roofing, Masonry, Remodeling, and More – Quality You Can Trust
          </motion.p>

          {/* Call-To-Action Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-full text-lg hover:scale-105 transition transform shadow-lg"
          >
            Claim Your 15% Discount
          </motion.a>
        </div>
      </div>
    </section>
  );
}


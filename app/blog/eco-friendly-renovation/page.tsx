"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EcoFriendlyRenovation() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/eco-friendly-renovation.jpg"
          alt="Eco-friendly home renovation ideas for Victoria TX homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Eco-Friendly Home Renovation Ideas
            </h1>
            <p className="text-gray-300 text-lg">
              Reduce environmental impact while improving your Victoria, TX home with green renovation tips
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 py-16 space-y-12"
      >
        <section>
          <h2 className="text-3xl font-bold mb-4">Why Eco-Friendly Renovations Matter</h2>
          <p className="text-gray-300 leading-8">
            Sustainable renovations reduce energy consumption, lower utility bills,
            and minimize your home's environmental impact. Victoria, TX homeowners
            can benefit from green upgrades that combine efficiency, style, and long-term savings.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Energy-Efficient Windows & Doors</h2>
          <p className="text-gray-300 leading-8">
            Installing high-performance windows and doors improves insulation, reduces energy waste,
            and keeps your home comfortable year-round.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Reduce heating and cooling costs</li>
            <li>✔ Improve indoor comfort</li>
            <li>✔ Increase home value with sustainable upgrades</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Sustainable Flooring Options</h2>
          <p className="text-gray-300 leading-8">
            Bamboo, cork, and reclaimed wood are popular eco-friendly flooring options.
            They are renewable, durable, and add a unique aesthetic to your living spaces.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Low-VOC Paints and Finishes</h2>
          <p className="text-gray-300 leading-8">
            Volatile organic compounds (VOCs) can harm indoor air quality. Using low-VOC paints
            and finishes improves health, reduces odors, and supports sustainable building practices.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Solar Panels & Renewable Energy</h2>
          <p className="text-gray-300 leading-8">
            Incorporating solar panels reduces reliance on fossil fuels and can dramatically
            lower electricity bills. Combined with energy-efficient appliances, it makes your home greener.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">5. Water Conservation Upgrades</h2>
          <p className="text-gray-300 leading-8">
            Install low-flow faucets, dual-flush toilets, and smart irrigation systems
            to conserve water and reduce utility costs while maintaining a lush, functional landscape.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Transform Your Home Sustainably
          </h3>
          <p className="mb-4">
            Morning Star Construction helps Victoria, TX homeowners implement eco-friendly
            renovation ideas with quality craftsmanship. Upgrade your home sustainably while
            boosting comfort and value.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
             Schedule a Green Renovation Consultation
            </Link>
            
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RoofingMaterialGuide() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/roofing.jpg"
          alt="Roofing materials guide"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Choosing the Right Roofing Material for Your House
            </h1>
            <p className="text-gray-300 text-lg">
              A complete guide for Texas homeowners
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 py-16 space-y-10"
      >
        <section>
          <h2 className="text-3xl font-bold mb-4">Why Roofing Material Matters</h2>
          <p className="text-gray-300 leading-8">
            Your roof protects your home from Texas heat, storms, and heavy rain.
            Choosing the right material impacts durability, energy efficiency,
            maintenance costs, and even curb appeal.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Asphalt Shingles</h2>
          <p className="text-gray-300 leading-8">
            The most common roofing material in Texas. Affordable, easy to install,
            and available in many styles. Typically lasts 15–30 years.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Budget-friendly</li>
            <li>✔ Easy repairs</li>
            <li>✖ Shorter lifespan compared to metal</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Metal Roofing</h2>
          <p className="text-gray-300 leading-8">
            Extremely durable and energy-efficient. Reflects sunlight and can last
            40–70 years.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Long lifespan</li>
            <li>✔ Energy efficient</li>
            <li>✖ Higher upfront cost</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Tile Roofing</h2>
          <p className="text-gray-300 leading-8">
            Popular for Spanish-style homes. Extremely durable but heavier and
            requires proper structural support.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Texas Climate Considerations</h2>
          <p className="text-gray-300 leading-8">
            In areas like Victoria, TX, roofing must withstand extreme heat,
            high winds, and occasional hail. Impact-resistant shingles or
            standing seam metal roofing are often ideal.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Need Professional Roofing Help?
          </h3>
          <p className="mb-4">
            Choosing the right material can be overwhelming. Let experienced
            professionals inspect your home and guide you through the best options.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
             Request a Free Estimate
            </Link>
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

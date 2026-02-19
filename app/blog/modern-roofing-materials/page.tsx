"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ModernRoofingMaterials() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/modern-roofing-materials.jpg"
          alt="Modern roofing materials for Victoria TX homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Modern Roofing Materials That Boost Curb Appeal
            </h1>
            <p className="text-gray-300 text-lg">
              Enhance your home's look and durability with these modern roofing materials in Victoria, TX
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
          <h2 className="text-3xl font-bold mb-4">Why Choosing the Right Roofing Material Matters</h2>
          <p className="text-gray-300 leading-8">
            Your roof impacts both your home's appearance and protection from Texas weather.
            Selecting modern, high-quality roofing materials enhances durability, energy efficiency,
            and curb appeal. Victoria, TX homeowners can benefit from materials that withstand heat, wind, and rain while elevating style.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Asphalt Shingles</h2>
          <p className="text-gray-300 leading-8">
            Affordable, versatile, and available in a variety of colors and textures,
            asphalt shingles remain a popular choice for many homeowners. They are easy to install
            and provide reliable protection for 15–30 years.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Budget-friendly and widely available</li>
            <li>✔ Easy repairs and replacements</li>
            <li>✖ Shorter lifespan compared to metal or tile</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Metal Roofing</h2>
          <p className="text-gray-300 leading-8">
            Metal roofs are durable, lightweight, and energy-efficient. They reflect sunlight,
            last 40–70 years, and come in various styles like standing seam or metal shingles,
            perfect for modern or traditional homes.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Long lifespan and minimal maintenance</li>
            <li>✔ Energy-efficient and eco-friendly</li>
            <li>✖ Higher initial cost than asphalt</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Tile Roofing</h2>
          <p className="text-gray-300 leading-8">
            Clay or concrete tiles are ideal for Spanish-style or Mediterranean homes.
            They are highly durable, resist fire, and offer excellent aesthetic appeal, but require
            proper structural support due to weight.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Slate Roofing</h2>
          <p className="text-gray-300 leading-8">
            Slate provides timeless beauty, longevity, and fire resistance. Although costly,
            slate roofs can last over 100 years, making them a premium choice for homeowners
            looking for elegance and durability.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Tips for Maintaining Modern Roofs in Victoria, TX</h2>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Inspect roofs annually for damage, cracks, or loose shingles/tiles</li>
            <li>✔ Keep gutters clean to prevent water damage</li>
            <li>✔ Trim overhanging branches to avoid debris and moss buildup</li>
            <li>✔ Schedule professional inspections every few years to extend lifespan</li>
          </ul>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Upgrade Your Roof with Confidence
          </h3>
          <p className="mb-4">
            Morning Star Construction offers expert roofing services in Victoria, TX. Whether
            you need a modern metal roof, classic tile, or asphalt shingles, we ensure your
            home looks great while staying protected for decades.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
             Request a Free Roofing Consultation
            </Link>
            
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

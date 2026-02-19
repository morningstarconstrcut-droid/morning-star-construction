"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SeasonalMaintenanceTips() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/seasonal-maintenance-texas.jpg"
          alt="Seasonal home maintenance tips for Texas homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Seasonal Maintenance Tips for Texas Homes
            </h1>
            <p className="text-gray-300 text-lg">
              Seasonal checklists to keep your Victoria, TX home safe, efficient, and looking great year-round
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
          <h2 className="text-3xl font-bold mb-4">Why Seasonal Maintenance Matters</h2>
          <p className="text-gray-300 leading-8">
            Regular seasonal maintenance helps protect your home from the extreme Texas climate,
            prevents costly repairs, and ensures your property stays safe and energy-efficient year-round.
            Victoria, TX homeowners can save money and prolong the life of their roof, HVAC, plumbing, and exterior finishes.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Spring Maintenance Tips</h2>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Inspect roof for winter damage and leaks</li>
            <li>✔ Clean gutters and downspouts</li>
            <li>✔ Check HVAC system and replace filters</li>
            <li>✔ Inspect windows and doors for cracks or drafts</li>
            <li>✔ Service lawn irrigation systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Summer Maintenance Tips</h2>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Check for air conditioning efficiency</li>
            <li>✔ Inspect roof and siding for heat damage</li>
            <li>✔ Trim trees and remove dead branches</li>
            <li>✔ Inspect outdoor plumbing and sprinklers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Fall Maintenance Tips</h2>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Clean gutters and remove debris</li>
            <li>✔ Inspect roof and chimney for wear</li>
            <li>✔ Winterize outdoor faucets and irrigation</li>
            <li>✔ Check insulation and weather stripping</li>
            <li>✔ Test heating system before cold weather</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Winter Maintenance Tips</h2>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Monitor roof and gutters for ice or debris buildup</li>
            <li>✔ Inspect plumbing for leaks or frozen pipes</li>
            <li>✔ Ensure proper insulation in attics and crawlspaces</li>
            <li>✔ Check smoke and carbon monoxide detectors</li>
            <li>✔ Maintain indoor HVAC efficiency</li>
          </ul>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Keep Your Home Safe & Efficient
          </h3>
          <p className="mb-4">
            Morning Star Construction helps Victoria, TX homeowners with expert seasonal maintenance, inspections, and repairs.
            Protect your home, save on utility bills, and maintain lasting curb appeal with professional guidance.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
              Schedule a Seasonal Maintenance Inspection
            </Link>
            
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

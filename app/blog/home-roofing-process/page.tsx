"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeRoofingProcess() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/roofing-process.jpg"
          alt="Home roofing process for Victoria TX homeowners"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Step-by-Step Home Roofing Process Explained
            </h1>
            <p className="text-gray-300 text-lg">
              Learn what to expect during a professional roof installation in Victoria, TX
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
          <h2 className="text-3xl font-bold mb-4">Why Understanding the Roofing Process Matters</h2>
          <p className="text-gray-300 leading-8">
            Replacing or repairing a roof is a major investment. Knowing each step
            of the process helps homeowners prepare, ensures safety, and guarantees
            quality results. In Victoria, TX, roofing projects must also account
            for local weather conditions, including heat, wind, and occasional hail.
          </p>
          <p className="text-gray-300 leading-8">
            A transparent step-by-step plan reduces surprises, keeps the project on
            schedule, and helps you understand the materials, techniques, and labor
            involved in protecting your home.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Step 1: Inspection & Assessment</h2>
          <p className="text-gray-300 leading-8">
            The process begins with a thorough inspection of your existing roof.
            Professionals assess the structure, identify damaged areas, and determine
            the best materials for your home. This step ensures safety and helps
            prevent future problems.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Identify damaged shingles or leaks</li>
            <li>✔ Evaluate roof deck integrity</li>
            <li>✔ Determine appropriate roofing materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Step 2: Preparation & Safety Measures</h2>
          <p className="text-gray-300 leading-8">
            Preparation is critical. Safety barriers, tarps, and protective equipment
            are installed to protect your home and property. Old shingles and debris
            are carefully removed to ensure a clean, stable surface for installation.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Step 3: Installing Underlayment & Flashing</h2>
          <p className="text-gray-300 leading-8">
            Underlayment acts as an additional waterproof layer beneath the shingles,
            while flashing protects valleys, vents, and chimneys. Proper installation
            of these layers is crucial for durability and long-term protection.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Step 4: Shingle or Roofing Material Installation</h2>
          <p className="text-gray-300 leading-8">
            The main roofing material, whether asphalt shingles, metal panels, or tile,
            is installed according to manufacturer specifications. Precision ensures
            the roof withstands extreme weather and maximizes longevity.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Even placement for aesthetic appeal</li>
            <li>✔ Proper sealing to prevent leaks</li>
            <li>✔ Fastening per building codes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Step 5: Inspection & Cleanup</h2>
          <p className="text-gray-300 leading-8">
            Once installation is complete, a final inspection ensures every detail
            meets quality standards. Excess materials, nails, and debris are removed
            to leave your property safe and clean.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Step 6: Final Walkthrough & Warranty</h2>
          <p className="text-gray-300 leading-8">
            The roofing company reviews the finished work with you, explains maintenance
            tips, and provides warranty information. Understanding your roof’s coverage
            ensures peace of mind for years to come.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Need a Professional Roof in Victoria, TX?
          </h3>
          <p className="mb-4">
            Morning Star Construction provides full-service residential roofing with
            transparency, quality materials, and expert craftsmanship. We guide you
            through every step for a durable, safe, and beautiful roof.
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
    
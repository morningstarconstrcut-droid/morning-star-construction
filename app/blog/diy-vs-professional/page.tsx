"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DiyVsProfessional() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/diy-vs-professional.jpg"
          alt="DIY vs professional renovation guide"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              DIY vs. Professional Renovation: What You Should Know
            </h1>
            <p className="text-gray-300 text-lg">
              Compare the pros and cons of DIY projects and hiring professional contractors in Victoria, TX
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
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-300 leading-8">
            Renovating your home can be exciting, but deciding between a DIY approach or hiring professionals is crucial. 
            Victoria, TX homeowners face unique considerations due to local climate, building codes, and home styles. 
            Understanding the advantages and challenges of each option helps you save time, money, and avoid costly mistakes.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">DIY Renovation: Pros and Cons</h2>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Lower upfront costs for labor</li>
            <li>✔ Full creative control over the project</li>
            <li>✖ Time-consuming and can disrupt daily life</li>
            <li>✖ Risk of mistakes without professional experience</li>
            <li>✖ May not meet local building codes or safety standards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Professional Renovation: Pros and Cons</h2>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Expert knowledge and years of experience</li>
            <li>✔ Efficient project completion and proper scheduling</li>
            <li>✔ Compliance with Victoria, TX building codes and safety regulations</li>
            <li>✔ Access to high-quality materials and tools</li>
            <li>✖ Higher upfront cost</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">When DIY Works Best</h2>
          <p className="text-gray-300 leading-8">
            DIY is ideal for small-scale projects such as painting, minor cosmetic updates, or simple landscaping tasks.
            Homeowners with some experience and the right tools can save money and enjoy hands-on satisfaction.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">When Hiring a Professional Is Recommended</h2>
          <p className="text-gray-300 leading-8">
            For major renovations—like roofing, structural changes, plumbing, or electrical work—hiring a licensed professional is essential.
            Professional contractors in Victoria, TX ensure safety, quality, and durability, often saving money in the long term by preventing mistakes.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Making the Right Decision</h2>
          <p className="text-gray-300 leading-8">
            Evaluate your skill level, budget, timeline, and the complexity of the project. 
            Consider consulting with local professionals for guidance even if you plan some DIY work. 
            Combining DIY efforts with professional expertise can balance cost savings and quality.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Need Professional Help?
          </h3>
          <p className="mb-4">
            Morning Star Construction provides expert renovation services for Victoria, TX homeowners. 
            Get a professional assessment to determine which projects you can DIY and which require licensed expertise.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
             Schedule a Consultation Today
            </Link>
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

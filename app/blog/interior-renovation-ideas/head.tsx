"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InteriorRenovationIdeas() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/interior-renovation.jpg"
          alt="Interior renovation ideas for Victoria TX homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Interior Renovation Ideas That Transform Spaces
            </h1>
            <p className="text-gray-300 text-lg">
              Explore practical and stylish interior upgrades for homes in Victoria, TX
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
          <h2 className="text-3xl font-bold mb-4">Why Interior Renovations Matter</h2>
          <p className="text-gray-300 leading-8">
            Renovating the interior of your home can significantly improve both
            its functionality and aesthetic appeal. Well-planned renovations
            create more comfortable living spaces, increase energy efficiency,
            and enhance overall value. For homeowners in Victoria, TX, even
            small updates can make a noticeable difference in daily life.
          </p>
          <p className="text-gray-300 leading-8">
            From updated kitchens and bathrooms to open layouts and clever storage,
            every change adds both beauty and practicality. Thoughtful interior
            renovations also allow you to tailor your home to your lifestyle and
            family needs.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Open Up Your Layout</h2>
          <p className="text-gray-300 leading-8">
            Open floor plans are one of the most effective ways to make a home feel
            spacious and welcoming. Removing non-structural walls or combining
            smaller rooms enhances light flow, creates a sense of connection, and
            improves circulation throughout the house.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Encourages natural light and air circulation</li>
            <li>✔ Improves the flow between kitchen, dining, and living spaces</li>
            <li>✔ Creates a more inviting environment for family and guests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Kitchen & Bathroom Upgrades</h2>
          <p className="text-gray-300 leading-8">
            The kitchen and bathroom are the most-used areas in a home, and
            upgrades here offer the highest impact. Even small changes like
            modern cabinetry, updated countertops, new sinks, or faucets can
            improve both appearance and functionality.
          </p>
          <p className="text-gray-300 leading-8">
            Consider energy-efficient appliances, water-saving fixtures, or
            stylish backsplashes to enhance performance and aesthetics.
            Homeowners in Victoria, TX benefit from renovations that not only
            look great but reduce long-term maintenance and utility costs.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Modern cabinets and storage solutions</li>
            <li>✔ Energy-efficient and water-saving appliances</li>
            <li>✔ Durable, easy-to-clean surfaces for long-term use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Custom Storage Solutions</h2>
          <p className="text-gray-300 leading-8">
            Clutter can make a space feel cramped and chaotic. Custom storage
            solutions such as built-in shelving, closets, and cabinets help
            maximize usable space while keeping your home organized and functional.
          </p>
          <p className="text-gray-300 leading-8">
            Well-planned storage not only improves daily living but also
            increases resale value. Consider integrating smart storage in
            bedrooms, kitchens, and living areas for optimal efficiency.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Maximizes usable square footage</li>
            <li>✔ Keeps interiors tidy and organized</li>
            <li>✔ Adds value and improves lifestyle convenience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Lighting & Finishes</h2>
          <p className="text-gray-300 leading-8">
            Good lighting can transform a room’s atmosphere and functionality.
            Layered lighting with ambient, task, and accent lights ensures
            spaces are bright where needed and cozy where desired.
          </p>
          <p className="text-gray-300 leading-8">
            Finishing touches, such as accent walls, crown molding, and quality
            paint, further elevate interiors. These details make rooms feel
            polished, welcoming, and stylish, leaving a lasting impression.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Layered lighting for optimal ambiance</li>
            <li>✔ High-quality finishes for durability and aesthetics</li>
            <li>✔ Accent walls and trim to highlight design features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">5. Flooring & Material Upgrades</h2>
          <p className="text-gray-300 leading-8">
            Flooring has a huge impact on the look and feel of a home. Upgrading
            to hardwood, tile, or quality laminate can completely change a room’s
            character. Durable materials also make cleaning easier and improve
            long-term value.
          </p>
          <p className="text-gray-300 leading-8">
            Consider combining flooring choices with other upgrades, like lighting
            and cabinetry, to create a cohesive, inviting space.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Transform Your Home?
          </h3>
          <p className="mb-4">
            Morning Star Construction specializes in interior renovations for
            homeowners in Victoria, TX. From minor updates to complete room
            remodels, we bring craftsmanship, practical design, and expert
            guidance to every project.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Request a Free Estimate
          </button>
        </section>
      </motion.article>
    </div>
  );
}

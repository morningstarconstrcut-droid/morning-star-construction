"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RemodelingTrends2026() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/remodeling-trends-2026.jpg"
          alt="Top home remodeling trends in 2026 for Victoria TX homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Top 5 Home Remodeling Trends in 2026
            </h1>
            <p className="text-gray-300 text-lg">
              Stay ahead of the curve with the hottest remodeling trends for Victoria, TX homes
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
          <h2 className="text-3xl font-bold mb-4">Why Remodeling Trends Matter</h2>
          <p className="text-gray-300 leading-8">
            Keeping your home modern, functional, and energy-efficient is key to
            maintaining value and comfort. Victoria, TX homeowners can benefit
            from the latest remodeling trends to enhance both style and functionality.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Smart Home Integration</h2>
          <p className="text-gray-300 leading-8">
            Home automation continues to dominate in 2026. From smart thermostats
            and lighting to security systems, integrating technology improves
            convenience, efficiency, and safety.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Voice-activated controls for lights and appliances</li>
            <li>✔ Smart thermostats for energy savings</li>
            <li>✔ Security cameras and door locks remotely controlled</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Sustainable & Eco-Friendly Materials</h2>
          <p className="text-gray-300 leading-8">
            Homeowners increasingly choose materials that are renewable, recycled,
            or low-impact. From bamboo flooring to reclaimed wood cabinetry,
            sustainable materials are both stylish and responsible.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Open-Concept & Multi-Functional Spaces</h2>
          <p className="text-gray-300 leading-8">
            Flexible living areas continue to be a priority. Removing walls,
            creating multi-purpose rooms, and maximizing natural light
            improves both aesthetics and functionality.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Bold Colors & Statement Finishes</h2>
          <p className="text-gray-300 leading-8">
            Vibrant colors, textured walls, and statement fixtures are trending
            in kitchens, bathrooms, and living spaces. These details create
            personality and modern appeal in Victoria homes.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">5. Energy-Efficient Upgrades</h2>
          <p className="text-gray-300 leading-8">
            Upgrades like high-efficiency windows, LED lighting, and enhanced insulation
            save money and reduce environmental impact. Energy-conscious homeowners
            in Victoria, TX can increase comfort while lowering utility bills.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Upgrade Your Home?
          </h3>
          <p className="mb-4">
            Morning Star Construction helps Victoria, TX homeowners implement the latest
            remodeling trends with quality craftsmanship and expert guidance. Transform
            your home today.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
             Request a Remodeling Consultation
            </Link>
            
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExteriorConstructionTips() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/exterior-construction.jpg"
          alt="Exterior construction tips for Victoria TX homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Exterior Construction Tips for Your Home
            </h1>
            <p className="text-gray-300 text-lg">
              Improve durability, curb appeal, and functionality with these expert tips
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
          <h2 className="text-3xl font-bold mb-4">Why Exterior Construction Matters</h2>
          <p className="text-gray-300 leading-8">
            The exterior of your home is its first impression, protects your investment,
            and impacts long-term durability. Proper planning, materials, and techniques
            ensure your home withstands weather, stays safe, and looks great year-round.
          </p>
          <p className="text-gray-300 leading-8">
            For homeowners in Victoria, TX, exterior renovations require consideration
            for heat, humidity, wind, and occasional hail. From siding and roofing to
            decks and masonry, attention to detail pays off in longevity and curb appeal.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Choose Durable Materials</h2>
          <p className="text-gray-300 leading-8">
            Investing in high-quality materials prevents costly repairs and ensures
            your home lasts for decades. Consider the following for exterior construction:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Weather-resistant siding such as fiber cement or treated wood</li>
            <li>✔ Long-lasting roofing materials like metal, asphalt shingles, or tile</li>
            <li>✔ Concrete or stone for driveways, walkways, and patios</li>
            <li>✔ Rust-resistant hardware for gates, fences, and decks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Proper Site Preparation</h2>
          <p className="text-gray-300 leading-8">
            A strong foundation begins with careful site preparation. Clearing debris,
            leveling ground, and assessing drainage prevents future structural issues.
          </p>
          <p className="text-gray-300 leading-8">
            Whether installing a deck, laying pavers, or building a masonry wall,
            properly prepared ground ensures stability, reduces maintenance, and
            avoids costly repairs.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Focus on Drainage and Water Management</h2>
          <p className="text-gray-300 leading-8">
            Standing water can damage exterior structures over time. Proper grading,
            gutters, downspouts, and French drains are essential to direct water away
            from your home.
          </p>
          <p className="text-gray-300 leading-8">
            Good water management protects landscaping, foundations, decks, and masonry,
            keeping your property safe and attractive in Victoria’s climate.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Prioritize Safety and Building Codes</h2>
          <p className="text-gray-300 leading-8">
            Exterior projects should comply with local building codes and safety standards.
            Hiring licensed professionals ensures proper installation of roofing, siding,
            decks, and masonry, reducing the risk of accidents and code violations.
          </p>
          <p className="text-gray-300 leading-8">
            Always check permits and work with trusted contractors who follow best
            practices for a safe, durable exterior.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">5. Enhance Curb Appeal</h2>
          <p className="text-gray-300 leading-8">
            A visually appealing exterior increases your home’s value and creates pride
            of ownership. Landscaping, clean siding, fresh paint, and well-maintained
            walkways create an inviting environment for guests and future buyers.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Fresh exterior paint or stain</li>
            <li>✔ Properly maintained landscaping and pathways</li>
            <li>✔ Decorative accents such as shutters, lighting, and trim</li>
          </ul>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Improve Your Home’s Exterior?
          </h3>
          <p className="mb-4">
            Morning Star Construction provides expert exterior construction services
            in Victoria, TX. From roofing and siding to decks and masonry, we ensure
            durable, beautiful results with professional craftsmanship.
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

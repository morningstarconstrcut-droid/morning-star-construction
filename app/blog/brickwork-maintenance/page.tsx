"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MaintainingBrickwork() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/brickwork-maintenance.jpg"
          alt="Maintaining brickwork for long-lasting masonry in Victoria TX homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Maintaining Your Brickwork: Tips for Longevity
            </h1>
            <p className="text-gray-300 text-lg">
              Keep your masonry in top condition with expert maintenance tips for Victoria, TX homeowners
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
          <h2 className="text-3xl font-bold mb-4">Why Brickwork Maintenance Matters</h2>
          <p className="text-gray-300 leading-8">
            Proper maintenance of your brickwork protects your home from weathering, water damage,
            and structural issues. In Victoria, TX, exposure to sun, rain, and seasonal storms
            can gradually weaken mortar and bricks, reducing the lifespan of your masonry.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Regular Cleaning</h2>
          <p className="text-gray-300 leading-8">
            Dirt, mildew, and efflorescence (white salt deposits) can accumulate on your bricks.
            Gentle cleaning using a soft brush, low-pressure water, or a mild masonry cleaner
            helps maintain both appearance and structural integrity.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Remove moss, dirt, and algae</li>
            <li>✔ Avoid harsh chemicals that damage bricks</li>
            <li>✔ Inspect for cracks during cleaning</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Inspect & Repair Mortar Joints</h2>
          <p className="text-gray-300 leading-8">
            Mortar can erode over time, leading to loose or cracked bricks. Regularly inspect
            joints and perform tuckpointing (replacing damaged mortar) to maintain strength
            and prevent water infiltration.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Address Water Drainage Issues</h2>
          <p className="text-gray-300 leading-8">
            Poor drainage or clogged gutters can allow water to sit against brick walls,
            accelerating damage. Ensure proper grading around your home and clean gutters
            regularly to prevent moisture problems.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Seal Bricks When Needed</h2>
          <p className="text-gray-300 leading-8">
            Applying a breathable masonry sealant protects bricks from water and freeze-thaw
            cycles without trapping moisture inside. Seal only when necessary, as over-sealing
            can cause damage.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">5. Prevent Vegetation Damage</h2>
          <p className="text-gray-300 leading-8">
            Plants growing near walls or vines climbing masonry can cause cracks and retain moisture.
            Keep vegetation trimmed and avoid planting too close to brick surfaces.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">6. Hire Professional Inspections</h2>
          <p className="text-gray-300 leading-8">
            Periodic inspections by a qualified masonry professional in Victoria, TX help identify
            early signs of wear, water damage, or structural issues. Professionals can provide
            repairs and guidance to extend the life of your brickwork.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Keep Your Masonry Strong for Years
          </h3>
          <p className="mb-4">
            Morning Star Construction offers expert masonry inspections and maintenance services
            to protect your home’s brickwork. Ensure your masonry remains durable, beautiful,
            and structurally sound.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
             Schedule a Masonry Inspection
            </Link>
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

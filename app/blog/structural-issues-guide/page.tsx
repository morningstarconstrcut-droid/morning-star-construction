"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SpotStructuralIssues() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/structural-issues.jpg"
          alt="Spot structural issues before they become costly in Victoria TX homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              How to Spot Structural Issues Before They Become Costly
            </h1>
            <p className="text-gray-300 text-lg">
              Protect your home and investment with early detection tips for homeowners in Victoria, TX
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
          <h2 className="text-3xl font-bold mb-4">Why Early Detection Matters</h2>
          <p className="text-gray-300 leading-8">
            Structural issues in a home can escalate quickly, leading to costly repairs,
            safety hazards, and decreased property value. Regular inspections and knowing
            what warning signs to look for help Victoria, TX homeowners protect their
            investment and maintain a safe, comfortable living environment.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Foundation Cracks & Shifts</h2>
          <p className="text-gray-300 leading-8">
            Check for cracks in walls, floors, and the foundation itself. Horizontal cracks,
            widening gaps, or uneven floors can indicate serious foundation issues.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Look for cracks wider than 1/4 inch</li>
            <li>✔ Check for doors or windows that stick</li>
            <li>✔ Monitor over time for movement or expansion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. Roof Sagging or Leaks</h2>
          <p className="text-gray-300 leading-8">
            A sagging roofline, missing shingles, or water stains inside can indicate
            structural weakness. In Victoria’s climate, early detection prevents
            water damage, mold, and further structural deterioration.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Cracks in Interior Walls & Ceilings</h2>
          <p className="text-gray-300 leading-8">
            Hairline cracks are normal in older homes, but wide cracks, especially near
            doors, windows, or corners, may signal shifting foundations or settling.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Uneven Floors & Doors</h2>
          <p className="text-gray-300 leading-8">
            Sloping or uneven floors, along with doors that won’t close properly, often
            point to underlying structural problems. These issues may start small but
            worsen over time without professional assessment.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">5. Water Damage & Drainage Problems</h2>
          <p className="text-gray-300 leading-8">
            Poor drainage, leaking gutters, or water pooling around the foundation can
            erode soil and weaken structural support. Inspect basements, crawl spaces,
            and exterior grading regularly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">6. Termite & Pest Damage</h2>
          <p className="text-gray-300 leading-8">
            Termites, carpenter ants, and other pests can compromise structural integrity.
            Look for hollow-sounding wood, visible tunnels, and droppings. Regular inspections
            prevent costly damage.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Protect Your Victoria, TX Home Today
          </h3>
          <p className="mb-4">
            Morning Star Construction offers professional inspections and repair services
            to detect and fix structural issues before they become expensive problems.
            Ensure your home is safe, durable, and valuable.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
             Request a Free Inspection
            </Link>
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

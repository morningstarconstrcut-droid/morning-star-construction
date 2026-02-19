"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RoofingPage() {
  return (
    <div className="bg-gray-900 ">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background Image */}
        <Image
          src="/roof.jpg"
          alt="Residential roofing in Victoria Texas"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Residential Roofing Services in Victoria, TX
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Asphalt Shingles, Metal Roofing, Wood Shingles & Composite Roofing
            Installed with Precision and Care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:3617883004"
              className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border-2 border-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Get Free Quote
            </a>
          </div>
        </motion.div>
      </section>

     {/* Trust Bar */}
      <section className="w-full bg-neutral-900 border-t border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm md:text-base font-medium text-neutral-300">
            
            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-500">✔</span>
              Free Estimates
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-500">✔</span>
              Local & Family Owned
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-500">✔</span>
              Quality Craftsmanship
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-500">✔</span>
              Serving Victoria, TX
            </div>

          </div>
        </div>
      </section>
      
      {/* Description */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Roofing in Victoria, Tx
            </h2>

            <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
             Morning Star Construction provides professional residential roofing services in Victoria, TX. We specialize in asphalt, metal, wood, and composite roofing, delivering durable, high-quality installations and repairs. With a focus on precision, safety, and long-lasting protection, we help homeowners safeguard their homes from storms, heat, and weather damage.
            </p>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Asphalt Schingle Roofing
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Metal Roofing Installation
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Wood Shingle / Shake Roofing
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Composite Roofing
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Roof Repair & Leak Detection
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Roof Replacement
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Roof Inspection
              </li>

            </ul>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-block bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>

        </section>
        
         {/* TYPES OF MASONRY SERVICES */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-10 opacity-60"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
            Types of Masonry Services We Offer
          </h2>

          <p className="text-center text-neutral-400 mb-16 text-lg max-w-3xl mx-auto">
            We provide professional masonry and brickwork services in Victoria, TX and surrounding areas.
            From structural brick walls to decorative stone veneer, our craftsmanship is built to last.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Asphalt Shingle Roofing",
                desc: "We provide professional asphalt shingle roof installation and replacement for homeowners in Victoria, TX. Asphalt shingles are one of the most durable and cost-effective roofing options available, offering strong wind resistance and long-term protection against Texas heat and storms. Whether you need a full roof replacement or new architectural shingles installed, we ensure proper underlayment, ventilation, and precise installation for maximum lifespan and performance.",
              },
              {
                title: "Metal Roofing Installation",
                desc: "Metal roofing offers exceptional durability, energy efficiency, and long-term protection. We install standing seam and metal panel roofing systems designed to withstand high winds, heavy rain, and extreme Texas temperatures. A properly installed metal roof can last decades while improving energy efficiency and reducing maintenance costs. Our team ensures secure fastening, proper flashing, and clean installation for a sleek, modern finish.",
              },
              {
                title: "Wood Shingle / Shake Roofing",
                desc: "Wood shingles and cedar shake roofing provide a natural, distinctive appearance with strong weather resistance when properly installed. We install and replace wood roofing systems with attention to ventilation and moisture control to extend longevity. For homeowners looking to enhance curb appeal while maintaining durability, wood roofing offers a timeless, high-end finish.",
              },
              {
                title: "Composite Roofing",
                desc: "Composite roofing is a modern, low-maintenance solution designed to mimic the look of traditional materials while offering improved durability. Impact-resistant composite shingles perform well in harsh weather conditions and provide long-term protection with minimal upkeep. We install composite roofing systems built for strength, efficiency, and reliable performance in the Victoria, TX climate.",
              },
              {
                title: "Roof Repair & Leak Detection",
                desc: "Even small roofing issues can lead to serious water damage if left untreated. We provide professional roof repair and leak detection services to address missing shingles, flashing damage, wind damage, and moisture intrusion. Our team quickly identifies the source of leaks and performs precise repairs to restore the integrity of your roofing system and prevent further damage.",
              },
              {
                title: "Roof Replacement",
                desc: "When repairs are no longer sufficient, a full roof replacement ensures long-term protection and structural integrity. We perform complete tear-offs, replace damaged decking if necessary, install new underlayment, and professionally install your chosen roofing material. Every roof replacement is completed with careful attention to ventilation, durability, and weather resistance to protect your home for years to come.",
              },
                            {
                title: "Roof Inspections",
                desc: "Regular roof inspections help identify potential issues before they become costly problems. We provide thorough residential roof inspections to assess shingle condition, flashing integrity, ventilation performance, and storm damage. After inspection, we provide a clear explanation of findings and honest recommendations for maintenance or repair.",
              },

            ].map((service, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-10 rounded-2xl hover:border-amber-500 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-neutral-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


   

  {/*FAQ*/}
       <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 px-6 bg-linear-to-b from-gray-900 to-black"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            FAQs
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "How long does a residential roof last in Victoria, TX?",
                a: "The lifespan of a roof depends on the material and maintenance. Asphalt shingles typically last 20–30 years, metal roofs 40+ years, and properly maintained wood shingles 25–35 years. Regular inspections and timely repairs help extend your roof’s longevity in Victoria’s heat and storms."
              },
              {
                q: "Do you offer free roof inspections?",
                a: "Yes! We provide thorough residential roof inspections to assess shingle condition, leaks, and structural integrity. Our inspections help homeowners identify potential problems early, preventing costly repairs and protecting your home from storm damage."
              },
              {
                q: "What should I do if my roof is leaking?",
                a: "If you notice a leak, it’s important to address it immediately. We provide fast, reliable leak detection and repair services. Our team identifies the source, replaces damaged shingles or flashing, and restores your roof’s integrity to prevent water damage and further issues."
              },
              {
                q: "How much does a new roof or repair cost in Victoria, TX?",
                a: "Roofing costs depend on the material, roof size, and project complexity. After a detailed inspection, we provide a transparent estimate covering all labor and materials, so homeowners know exactly what to expect before work begins."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="font-semibold text-lg mb-2 text-black">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-yellow-500 py-24 px-6 text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Protext Your Home with Quality Roofing?
          </h2>
          <p className="text-lg mb-10">
            Contact Morning Star Construction for top-quality Roofing tailored to your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:3617883004"
              className="bg-black text-yellow-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border-2 border-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-black hover:text-yellow-500 transition"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

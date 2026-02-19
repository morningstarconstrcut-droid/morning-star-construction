"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExteriorPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background Image */}
        <Image
          src="/217.jpg" // Add your exterior hero image in /public
          alt="Exterior construction services in Victoria Texas"
          fill
          className="object-cover object-bottom"
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
            Exterior Construction Services in Victoria, TX
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Siding, Decks, Fences, Porches, and Structural Exterior Improvements with Quality Craftsmanship
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:3617883004"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition duration-300"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Request Estimate
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

      {/* Our Masonry Work - Split Section */}
      <section className="py-28 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - TEXT */}
          <div>
            <h2 className="text-4xl text-white md:text-5xl font-bold mb-8 tracking-tight">
              Exterior Home Improvement Services in Victoria, TX
            </h2>

            <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
              Enhance your home’s curb appeal and protection with professional exterior services from Morning Star Construction. From siding and decks to fences and masonry accents, we provide expert craftsmanship and durable solutions for homeowners in Victoria, TX.
            </p>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Siding Installation and Repair
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Deck and Patio Construction
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Fence Installation and Repair
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Exterior Painting and Finishes
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Masonry Accents & Stone Work
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Window and Door Installation
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Outdoor Living Enhancements(Pergolas, Patios, Etc)
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

          {/* RIGHT SIDE - IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/250.jpg"
              alt="Brickwork project"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/251.jpg"
              alt="Stone installation"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/242.jpg"
              alt="Outdoor fireplace"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/245.jpg"
              alt="Custom mailbox"
              className="rounded-2xl object-cover h-64 w-full"
            />
          </div>

        </div>
      </section>

     {/* TYPES OF Ext SERVICES */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-10 opacity-60"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
            Our Exterior Construction Services
          </h2>

          <p className="text-center text-neutral-400 mb-16 text-lg max-w-3xl mx-auto">
            We provide professional masonry and brickwork services in Victoria, TX and surrounding areas.
            From structural brick walls to decorative stone veneer, our craftsmanship is built to last.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Siding Installation and Repair",
                desc: "Protect and beautify your home with professional siding installation and repair. We work with vinyl, fiber cement, and wood siding, ensuring weather-resistant, durable, and visually appealing exteriors for homeowners in Victoria, TX.",
              },
              {
                title: "Deck and Patio Construction",
                desc: "Create the perfect outdoor living space with custom decks and patios. Morning Star Construction designs and builds functional, durable, and stylish wood or composite decks that enhance your home’s value and enjoyment in Victoria, TX.",
              },
              {
                title: "Fence Installation and Repair",
                desc: "Secure your property and enhance privacy with expertly installed fences. We install and repair wood, vinyl, and metal fences, providing durable solutions that complement your home’s exterior and withstand the Texas climate.",
              },
              {
                title: "Exterior Painting and Finishes",
                desc: "Refresh and protect your home’s exterior with professional painting and finishing services. We use high-quality materials and expert techniques to ensure long-lasting, weather-resistant, and beautiful results for Victoria, TX homeowners.",
              },
              {
                title: "Masonry Accents & Stone Work",
                desc: "Add lasting beauty and strength with decorative stonework and masonry accents. From stone veneer to block features, we provide precise, durable installations that elevate curb appeal while protecting your home in Victoria, TX.",
              },
              {
                title: "Window and Door Installation",
                desc: "Enhance energy efficiency, security, and curb appeal with new windows and doors. We install high-quality residential windows and doors with precise fit and finish to improve comfort, style, and value for your Victoria, TX home.",
              },

              {
                title: "Outdoor Living Enhancements",
                desc: "Transform your backyard with pergolas, patios, and custom outdoor features. We design and build functional, attractive, and durable outdoor spaces that maximize enjoyment and value for homeowners in Victoria, TX.",
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
    

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center bg-yellow-500 text-black px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Upgrade Your Home’s Exterior Today
        </h2>
        <p className="mb-8">
          Contact Morning Star Construction for expert exterior construction services in Victoria, TX. Quality, reliability, and craftsmanship guaranteed.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition duration-300"
        >
          Request Your Free Estimate
        </a>
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
                <h2 className="text-4xl text-white md:text-5xl font-bold mb-12 text-center">
                  FAQs
                </h2>
      
                <div className="space-y-8">
                  {[
                    {
                      q: "What exterior services do you offer for homes in Victoria, TX?",
                      a: "We provide a full range of exterior services for residential homes, including siding installation and repair, decks, fences, masonry accents, exterior painting, windows and doors, and custom outdoor living enhancements."
                    },
                    {
                      q: "How long does an exterior project take?",
                      a: "Project timelines vary depending on scope and complexity. Smaller jobs like siding or painting may take a few days, while decks, fences, or masonry accents can take 1–3 weeks. We provide a clear schedule and keep homeowners updated throughout the process."
                    },
                    {
                      q: "Can you match my existing exterior style?",
                      a: "Yes. Whether it’s siding color, fence style, stone accents, or window design, we carefully match your home’s existing features to maintain a seamless and visually appealing exterior for your Victoria, TX home."
                    },
                    {
                      q: "Do you provide estimates for exterior work?",
                      a: "Absolutely. After assessing your home and project goals, we provide a detailed, transparent estimate that includes labor, materials, and timelines, so you know exactly what to expect before work begins."
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

    </div>
  );
}

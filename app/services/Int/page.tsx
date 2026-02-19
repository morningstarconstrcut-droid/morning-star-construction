"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InteriorPage() {
  return (
    <div className="bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/flooring.jpg"
          alt="Interior finishes in Victoria Texas"
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
            High-Quality Interior Finishes in Victoria, TX
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Drywall, Flooring, Tile, Trim, and Detailed Finishing Work
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
            <a
              href="tel:3617883004"
              className="bg-yellow-500 text-black px-8 py-4 font-semibold rounded-full text-lg hover:bg-yellow-600 transition duration-300"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition duration-300"
            >
              Request Estimate
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center text-center text-yellow-500 gap-6">
          <div className="font-semibold">Quality Craftsmanship</div>
          <div className="font-semibold">Reliable & On-Time</div>
          <div className="font-semibold">Family-Owned & Local</div>
          <div className="font-semibold">Attention to Detail</div>
        </div>
      </section>

      {/* ================= SPLIT SECTION ================= */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Interior Home Renovation Services in Victoria, TX</h2>
            <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
             Transform the inside of your home with professional interior renovation services from Morning Star Construction. From flooring and cabinetry to custom finishes and room remodels, we provide expert craftsmanship, modern design, and long-lasting results for homeowners in Victoria, TX.
            </p>
          <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Flooring Installation & Refinishing
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Kitchen & Bathroom Interior Upgrades
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Interior Painting & Finishes
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Room Remodels & Layout Changes
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Lighting & Fixture Installation
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Closet & Storage Solutions
              </li>
            </ul>
          </div>

          {/* Right Side Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src="/floor.jpg" alt="Flooring installation" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src="/woodfloor.jpg" alt="Tile backsplash" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src="/finish.jpg" alt="Trim and molding" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image src="/anotherFloor.jpg" alt="Drywall painting" fill className="object-cover" />
            </div>
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
                title: "Flooring Installation & Refinishing",
                desc: "Upgrade your home’s interior with expertly installed or refinished hardwood, tile, or carpet flooring. Morning Star Construction in Victoria, TX ensures durable, visually appealing floors that enhance comfort, style, and value.",
              },
              {
                title: "Kitchen & Bathroom Interior Upgrades",
                desc: "Transform your kitchen or bathroom with modern layouts, cabinetry, countertops, and fixtures. We provide precise installations and elegant finishes for functional, stylish spaces that homeowners in Victoria, TX love.",
              },
              {
                title: "Interior Painting & Finishes",
                desc: "Refresh your home’s interior with professional painting and finishing services. We use high-quality materials and expert techniques to achieve durable, smooth, and visually striking results for Victoria, TX homeowners.",
              },
              {
                title: "Room Remodels & Layout Changes",
                desc: "Redesign your interior with room remodels and layout improvements. Our team handles wall removal, space optimization, and functional upgrades, creating comfortable, open, and modern living areas.",
              },
              {
                title: "Lighting & Fixture Installation",
                desc: "Improve ambiance and functionality with expertly installed lighting and fixtures. From recessed lighting to chandeliers, we ensure precise placement and wiring for beautiful, energy-efficient results.",
              },
              {
                title: "Closet & Storage Solutions",
                desc: "Maximize your space with custom closets and storage solutions. We design and install functional, organized, and stylish storage systems tailored to your home’s interior and your lifestyle.",
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

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-yellow-500 text-black px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Upgrade Your Interior?
        </h2>

        <p className="mb-8">
          Contact Morning Star Construction for expert interior finishes that bring your vision to life.
        </p>

        <a
          href="/contact"
          className="inline-block bg-black hover:bg-gray-900 text-yellow-500 font-semibold px-8 py-4 rounded-full transition duration-300"
        >
          Request a Free Interior Estimate
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            FAQs
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "What types of interior renovation services do you offer?",
                a: "We provide a full range of interior renovation services for residential homes, including flooring, kitchen and bathroom upgrades, custom cabinetry, interior painting, room remodels, lighting installation, and storage solutions."
              },
              {
                q: "How long do interior renovation projects usually take?",
                a: "Project timelines vary depending on scope and complexity. Smaller projects like painting or lighting upgrades can take a few days, while full kitchen or bathroom remodels typically take 2–6 weeks. We provide a clear schedule and keep homeowners updated throughout the project."
              },
              {
                q: "Can you help with design and layout decisions?",
                a: "Yes! Our team works closely with homeowners to plan functional layouts, select materials, and choose finishes that match your style and needs. Our goal is to create interiors that are both beautiful and practical."
              },
              {
                q: "How much does an interior renovation cost in Victoria, TX?",
                a: "Costs depend on project size, materials, and complexity. After a detailed consultation, we provide a transparent, written estimate covering all labor and materials so homeowners know exactly what to expect before work begins."
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

"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MasonryPage = () => {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/brick.jpg")` }}
        />
        {/* Tint overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Expert Masonry and Bricklayers in Victoria, Tx
          </h1>
          <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Expert brick, stone, and concrete work that combines durability with beauty. From walls to patios to custom stonework, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="bg-yellow-500 text-black px-8 py-4 font-semibold rounded-2xl text-lg hover:bg-yellow-600 transition"
            >
              Get a Free Quote
            </a>
            <a
                href="tel:3617883004"
                className="px-8 py-4 text-l border border-yellow-500 text-yellow-500 font-semibold rounded-2xl hover:bg-yellow-500 hover:text-black transition"
              >
                Call Now
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Expert Masonry & Brickwork
            </h2>

            <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
              We specialize in high-quality brick, stone, and concrete work built for durability and long-term performance. Every project is completed with precision craftsmanship and attention to detail.
            </p>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Brick Installation
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Brick Repair and Restoration
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Mortar Repair
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Brick Mailboxes
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Brick Patios and walkways
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Chimney Brick Repair
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Retaining walls
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Stone and Block work
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
              src="/kit.jpg"
              alt="Brickwork project"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/outdoor.jpg"
              alt="Stone installation"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/camp.jpg"
              alt="Outdoor fireplace"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/chimeny.jpg"
              alt="Custom mailbox"
              className="rounded-2xl object-cover h-64 w-full"
            />
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
                title: "Brick Intsallation",
                desc: "Professional brick repair services including crack repair, mortar joint replacement,full brick restoration and custom brick mailboxes for residential in Victoria, Tx.",
              },
              {
                title: "Brick Repair and Restoration",
                desc: "Damaged or cracked brick can weaken your structure and reduce curb appeal. Our brick repair services in Victoria, TX include replacing broken bricks, correcting structural issues, and restoring aging masonry to its original strength and appearance. We carefully match existing brick and mortar to ensure seamless repairs that protect your property from moisture intrusion and further deterioration.",
              },
              {
                title: "Mortar Repair and tuckpointing",
                desc: "Over time, mortar joints deteriorate due to weather exposure and natural settling. We provide expert tuckpointing and mortar repair services to restore structural integrity and extend the life of your brickwork. By removing damaged mortar and replacing it with properly bonded material, we strengthen your masonry while improving its overall appearance and resistance to water damage.",
              },
              {
                title: "Brick Mailboxes installation",
                desc: "Enhance your home’s curb appeal with a professionally built brick mailbox. We design and construct durable, reinforced brick mailboxes that complement your home’s exterior and withstand harsh weather conditions. Whether you need a new installation or mailbox repair in Victoria, TX, we ensure precision alignment and long-lasting durability.",
              },
              {
                title: "Brick Patios and walkways",
                desc: "Create beautiful and functional outdoor spaces with custom brick patios and walkways. Our team installs properly leveled and reinforced brick surfaces designed for long-term stability and drainage. Whether you want a decorative garden path or a durable patio for entertaining, we build brick features that add value, functionality, and lasting visual appeal to your property.",
              },
              {
                title: "Chimney Brick Repair",
                desc: "A damaged chimney can become a serious safety concern. We provide professional chimney brick repair and rebuild services, including cracked brick replacement, mortar restoration, and structural reinforcement. Our masonry experts ensure your chimney remains safe, weather-resistant, and structurally sound while preserving its original appearance.",
              },
                            {
                title: "Retaining Walls",
                desc: "Retaining walls require precision construction to ensure long-term structural stability. We design and build brick and block retaining walls that provide proper drainage, reinforcement, and load-bearing support. Whether decorative or structural, our retaining walls are built to withstand Texas soil conditions and heavy rainfall.",
              },
              {
                title: "Stone and Block work",
                desc: "We provide professional stone and concrete block (CMU) installation for residential projects in Victoria, TX. From decorative stone accents and veneers to structural block walls and retaining walls, our masonry work is built for durability, precision, and long-term performance. Every project is constructed with proper reinforcement and weather resistance to withstand the Texas climate.",
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
            Ready to Build with Precision?
          </h2>
          <p className="text-lg mb-10">
            Contact Morning Star Construction for top-quality masonry and brickwork tailored to your project.
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
                q: "How long does brick and stone masonry last?",
                a: "Properly installed brick and stone masonry can last 50 years or more with minimal maintenance. When constructed with quality materials and proper reinforcement, masonry is one of the most durable building methods available and performs exceptionally well in the Texas climate."
              },
              {
                q: "Can you match existing brick for repairs?",
                a: "Yes. We carefully match brick color, size, and mortar joints to ensure seamless repairs. Whether you're repairing cracked brick, replacing damaged sections, or restoring aging masonry, we focus on maintaining the original appearance of your structure."
              },
              {
                q: "What is tuckpointing and when is it needed?",
                a: "Tuckpointing is the process of removing damaged mortar and replacing it with new mortar to restore structural integrity. It is typically needed when mortar joints crack, crumble, or allow moisture intrusion. This process extends the life of your brickwork and prevents further damage."
              },
              {
                q: "How much does masonry work cost in Victoria, TX?",
                a: "The cost of masonry work depends on the project size, materials used, and structural requirements. After an on-site evaluation, we provide a clear, detailed estimate outlining all costs so there are no surprises."
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
};

export default MasonryPage;

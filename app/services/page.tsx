"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Remodeling",
    description:
      "Kitchen remodeling, bathroom renovations, and window replacment upgrades built with precision craftsmanship and long-term durability. Professional residential remodeling services in Victoria, TX.",
    href: "/services/remodeling",
  },
  {
    title: "Roofing in Victoria, Tx",
    description:
      "Reliable roofing installation and repairs built to protect your home and withstand the Texas elements.",
      href: "/services/roofing",
  },
  {
    title: "Masonry Contractor / Bricklayer",
    description:
      "Professional brick, stone, and concrete work including repairs, custom builds, and structural masonry. Skilled masonry services in Victoria, TX built for strength and long-term durability.",
      href: "/services/Masonry",
  },
  {
    title: "Exterior Construction",
    description:
      "Siding installation, home additions, framing, Decks, fencing, outdoor structures, exterior improvements built and designed for strength and structural durability and curb appeal. Professional exterior construction services in Victoria, TX.",
      href: "/services/Ext",
  },
  {
    title: "Interior Finishes",
    description:
      "Drywall, flooring, tile, trim, and detailed finishing work for a polished, professional look. Expert interior finishing services in Victoria, TX.",
      href: "/services/Int",
  },
  
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/b.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Built With Integrity. Designed To Last.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Quality craftsmanship, honest communication, and dependable
            construction services you can trust.
          </motion.p>
        </div>
      </section>
        <div className="w-24 h-0.5 bg-yellow-500 mx-auto my-16 opacity-60"></div>
      {/* INTRO SECTION */}
      <section className="py-20 px-6 bg-linear-to-b from-black to-gray-900 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Quality Over Everything
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Morning Star Construction, every project is built with care,
            precision, and respect for your home. We believe in doing things
            right — no shortcuts, no surprises.
          </p>
        </motion.div>
      </section>
        <div className="w-24 h-0.5 bg-yellow-500 mx-auto my-16 opacity-60"></div>
      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
          <Link key={index} href={service.href || "#"}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                bg-gray-900
                p-8
                rounded-2xl
                border
                border-gray-800
                transition
                duration-300
                hover:border-yellow-500
                hover:-translate-y-3
                hover:shadow-lg
                hover:shadow-yellow-500/20
                cursor-pointer
              "
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}


        </div>
      </section>
        <div className="w-24 h-0.5 bg-yellow-500 mx-auto my-16 opacity-60"></div>
      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-linear-to-b from-gray-900 to-black text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready To Start Your Project?
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Get a Free Quote
            </Link>

            <a
              href="tel:3617883004"
              className="px-8 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </section>
        {/* ================= FAQ ================= */}
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
                q: "What types of construction services do you offer?",
                a: "We provide expert residential and commercial construction services, including remodeling, roofing, masonry, exterior, and interior improvements."
              },
              {
                q: "How do you ensure quality and reliability?",
                a: "We follow a clear process from consultation to completion, maintain organized work sites, and use skilled tradesmen for every project."
              },
              {
                q: "Do you provide free estimates?",
                a: "Yes! We offer free consultations and written estimates for all masonry work."
              },
              {
                q: "Do you serve Victoria, TX and surrounding areas?",
                a: "We proudly serve Victoria, TX, and nearby communities with high-quality construction solutions"
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

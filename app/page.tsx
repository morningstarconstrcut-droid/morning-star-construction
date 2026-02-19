"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { link } from "fs";
import Link from "next/link";

export default function Home() {
  const [refServices, inViewServices] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refContact, inViewContact] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="font-sans bg-neutral-950 text-white">
      {/* Navbar */}
      <Navbar />

      <Hero />
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
              Locally Owned in Victoria, TX
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-500">✔</span>
              Skilled Brick & Roofing Specialists
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-500">✔</span>
              Serving Victoria, TX and surrounding areas
            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}
      <motion.section
        ref={refServices}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewServices ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-28 px-6 bg-linear-to-b from-black to-gray-900 "
        id="services"
      >
        <div className="w-30 h-0.5 bg-yellow-500 mx-auto my-10 opacity-60"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
            Our Services
          </h2>

          <p className="text-center text-neutral-400 mb-16 text-lg">
            Professional craftsmanship built to last.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Remodeling / Renovations",
                desc: "Kitchen remodeling, bathroom renovations, and window replacment upgrades built with precision craftsmanship and long-term durability. Professional residential remodeling services in Victoria, TX.",
                href: "/services/remodeling",
              },
              {
                title: "Roofing in Victoria, Tx",
                desc: "Professional shingle, metal, wood shake, and composite roofing installation and repairs. Reliable residential roofing services in Victoria, TX built for long-term protection.",
                href: "/services/roofing",
              },
              {
                title: "Masonry Conatrcator/ Bricklayer",
                desc: "Professional brick, stone, and concrete work including repairs, custom builds, and structural masonry. Skilled masonry services in Victoria, TX built for strength and long-term durability.",
                href: "services/Masonry",
              },
              {
                title: "Exterior Construction",
                desc: "Siding installation, home additions, framing, Decks, fencing, outdoor structures, exterior improvements built and designed for strength and structural durability and curb appeal. Professional exterior construction services in Victoria, TX.",
                href: "/services/Ext",
              },
              {
                title: "Interior Finishes",
                desc: "Drywall, flooring, tile, trim, and detailed finishing work for a polished, professional look. Expert interior finishing services in Victoria, TX.",
                href: "/services/Int",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href} passHref>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-neutral-900 border border-neutral-800 p-10 rounded-2xl hover:border-amber-500 cursor-pointer transition duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-neutral-400">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
        
      </motion.section>

        {/* WHY CHOOSE US */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 px-6 bg-linear-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Why Homeowners in Victoria Choose Morning Star Construction
          </h2>

          <p className="text-neutral-400 mb-16 text-lg">
            Honest communication. Quality workmanship. No shortcuts.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Clean & Organized Job Sites",
                desc: "We maintain spotless, safe, and well-organized work areas on every project. Our commitment to cleanliness ensures efficiency, safety, and professional results that protect your home and investment.",
              },
              {
                title: "Honest Pricing",
                desc: "We provide transparent, upfront estimates with no hidden fees. Every project is budgeted clearly so you know exactly what to expect—delivering value, trust, and peace of mind.",
              },
              {
                title: "Reliable & On-Time",
                desc: "We respect your time and complete every project efficiently and on schedule, ensuring minimal disruption to your home and lifestyle.",
              },
              {
                title: "Honest Communication",
                desc: "You’ll always know what’s happening on your project. We keep you informed and answer every question promptly.",
              },
              {
                title: "Skilled Tradesmen",
                desc: "Our team is experienced, certified, and passionate about quality workmanship. Every tradesman brings precision and care to your home.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-neutral-950 border border-neutral-800 p-10 rounded-2xl hover:border-amber-500 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-30 h-0.5 bg-yellow-500 mx-auto my-6 opacity-60"></div>
      </motion.section>

      {/* OUR PROCESS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 px-6 bg-linear-to-b from-black to-gray-900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Process
          </h2>

          <p className="text-neutral-400 mb-16 text-lg">
            A clear approach from consultation to completion.
          </p>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                title: "Consultation & Needs Assessment",
                desc: "We meet with you to discuss your vision, goals, and budget. Every detail is reviewed to ensure your project starts on the right track."
              },
              {
                title: "Planning & Transparent Estimate",
                desc: "We create a detailed plan and provide a transparent, written estimate. No hidden costs, just clarity and confidence for your remodeling or construction project."
              },
              {
                title: "Construction & Expert Execution",
                desc: "Our skilled team handles all construction with precision and craftsmanship, ensuring high-quality results and attention to every detail."
              },
              {
                title: "Final Walkthrough & Client Approval",
                desc: "We review the completed work with you, ensuring your satisfaction and that every aspect meets our high standards and your expectations."
              },
            ].map((step, i) => (
              <div key={i} className="p-8">
                <div className="text-5xl font-bold text-amber-500 mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-neutral-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* CALL TO ACTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 px-6 bg-linear-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-center relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>

          <p className="text-neutral-400 text-lg mb-10">
            Let’s bring your vision to life with craftsmanship you can trust.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:3617883004"
              className="bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
            >
              Call Now
            </a>

            <a
              href="/contact"
              className="border border-amber-500 text-amber-500 px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </motion.section>



    </div>
  );
}

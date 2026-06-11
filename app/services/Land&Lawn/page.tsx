"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LandscapingPage = () => {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/lawn.jpg")` }}
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Expert Landscaping & Lawn Care in Victoria, TX
          </h1>

          <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            From lawn maintenance to full landscape design, we create outdoor
            spaces that are clean, healthy, and beautiful year-round.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="bg-yellow-500 text-black px-8 py-4 font-semibold rounded-2xl text-lg hover:bg-yellow-600 transition"
            >
              Get Free Quote
            </a>
            <a
              href="tel:3617883004"
              className="px-8 py-4 border border-yellow-500 text-yellow-500 font-semibold rounded-2xl hover:bg-yellow-500 hover:text-black transition"
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
              Local & Reliable
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-500">✔</span>
              Quality Lawn Care
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-amber-500">✔</span>
              Serving Victoria, TX
            </div>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-28 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Professional Landscaping & Lawn Care
            </h2>

            <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
              We provide complete lawn care and landscaping services designed to
              keep your property looking clean, green, and well-maintained year-round.
            </p>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex gap-3"><span className="text-amber-500">✔</span> Lawn Mowing & Maintenance</li>
              <li className="flex gap-3"><span className="text-amber-500">✔</span> Landscape Design</li>
              <li className="flex gap-3"><span className="text-amber-500">✔</span> Mulching & Flower Beds</li>
              <li className="flex gap-3"><span className="text-amber-500">✔</span> Tree & Shrub Trimming</li>
              <li className="flex gap-3"><span className="text-amber-500">✔</span> Sod Installation</li>
              <li className="flex gap-3"><span className="text-amber-500">✔</span> Weed Control</li>
              <li className="flex gap-3"><span className="text-amber-500">✔</span> Seasonal Cleanups</li>
              <li className="flex gap-3"><span className="text-amber-500">✔</span> Drainage Solutions</li>
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

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/hedge.jpg" className="rounded-2xl object-cover h-64 w-full" />
            <img src="/grass.jpg" className="rounded-2xl object-cover h-64 w-full" />
            <img src="/sod.jpg" className="rounded-2xl object-cover h-64 w-full" />
            <img src="/drainage.jpeg" className="rounded-2xl object-cover h-64 w-full" />
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-10 opacity-60"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Landscaping Services We Offer
          </h2>

          <p className="text-center text-neutral-400 mb-16 text-lg max-w-3xl mx-auto">
            We design, install, and maintain outdoor spaces that improve curb appeal
            and keep your property looking its best year-round.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Lawn Maintenance",
                desc: "Regular mowing, edging, and cleanup to keep your lawn clean, healthy, and well-maintained."
              },
              {
                title: "Landscape Design",
                desc: "Custom landscape planning and installation to transform your outdoor space."
              },
              {
                title: "Mulching & Beds",
                desc: "Fresh mulch and flower bed installations that improve appearance and soil health."
              },
              {
                title: "Tree & Shrub Care",
                desc: "Professional trimming and shaping to keep your trees and shrubs healthy and attractive."
              },
              {
                title: "Sod Installation",
                desc: "Instant green lawns with professional sod installation and soil preparation."
              },
              {
                title: "Seasonal Cleanups",
                desc: "Leaf removal, debris cleanup, and yard preparation for every season."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-10 rounded-2xl hover:border-amber-500 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-neutral-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="bg-yellow-500 py-24 px-6 text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Better Looking Yard?
          </h2>

          <p className="text-lg mb-10">
            Contact us today for professional landscaping and lawn care services in Victoria, TX.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:3617883004"
              className="bg-black text-yellow-500 px-8 py-4 rounded-2xl font-semibold text-lg"
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

      {/* FAQ */}
      <motion.section
        className="py-28 px-6 bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            FAQs
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "How often should I mow my lawn?",
                a: "Most lawns in Texas should be mowed once a week during the growing season to maintain healthy grass."
              },
              {
                q: "Do you offer one-time cleanups?",
                a: "Yes, we offer both one-time cleanups and ongoing maintenance plans depending on your needs."
              },
              {
                q: "When is the best time for landscaping?",
                a: "Spring and fall are ideal for planting, sod installation, and major landscaping projects."
              },
              {
                q: "Do you install sod?",
                a: "Yes, we provide full sod installation including soil prep, leveling, and finishing."
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

export default LandscapingPage;
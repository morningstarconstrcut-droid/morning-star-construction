"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TilePage = () => {
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
            Tile Installation & Repair in Victoria, TX
          </h1>
          <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
           From new tile installation to repairs and regrouting, we help refresh floors, showers, backsplashes, and outdoor spaces in Victoria, TX and surrounding areas. Contact us for a free estimate.
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
              Expert Tile installation and Repair
            </h2>

            <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
              We specialize in tile installation, repair, and regrouting for floors, showers, backsplashes, and outdoor spaces in Victoria, TX and surrounding areas. With over 35 years of experience Arturo ensures every project is completed with precision craftsmanship and attention to detail.
            </p>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Tile floor Installation
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Shower & Bathroom Tile
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Kitchen Backsplashes
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Outdoor & Patio Tile
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Cracked or Loose Tile Repair
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Grout Removal & Regrouting
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Tile Removal & Replacement
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Fireplace Surround Tile
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
              src="/tiler.png"
              alt="Tile installation"
              loading="lazy"
              className="rounded-2xl object-cover h-150"
              
            />
         
          </div>

        </div>
      </section>

      {/* TYPES OF Tile SERVICES */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-10 opacity-60"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
            Tile Installation Services We Offer
          </h2>

          <p className="text-center text-neutral-400 mb-16 text-lg max-w-3xl mx-auto">
            We provide professional tile work in Victoria, TX and surrounding areas.
            
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Floor Tile Installation",
                desc: "Update your home with professional tile floor installation in Victoria, TX. We install tile in kitchens, bathrooms, entryways, and living spaces, with attention to surface preparation, layout, and clean grout lines.",
              },
              {
                title: "Shower & Bathroom Tile",
                desc: "Refresh your bathroom with tile installation for shower walls, shower floors, and bathroom flooring. We help homeowners in Victoria and surrounding areas plan tile layouts, finishes, and preparation needs for new installations and renovations.",
              },
              {
                title: "Kitchen Backsplashes",
                desc: "Complete your kitchen with a tile backsplash that complements your cabinets and countertops. Our backsplash installation services include careful layout, cuts around outlets, and finished edges for a clean, coordinated look.",
              },
              {
                title: "Outdoor & Patio Tile",
                desc: "Upgrade your patio, porch, or outdoor kitchen with tile installation suited to outdoor use. Serving Victoria, TX and nearby communities, we consider surface preparation, drainage, and weather exposure when planning your project.",
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

        {/* Tile Project Gallery */}
      <section className="py-20 md:py-28 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Tile Project Gallery
          </h2>

          <p className="text-center text-neutral-300 mb-12 text-lg max-w-2xl mx-auto">
            Explore our tile work for floors, showers, kitchens, and outdoor spaces.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Floor Tile",
                image: "/flooringTile.jpg",
                alt: "",
                href: "",
              },
              {
                title: "Shower & Bathroom Tile",
                image: "/bathTile.png",
                alt: "",
                href: "",
              },
              {
                title: "Kitchen Backsplashes",
                image: "/backsplash.png",
                alt: "",
                href: "",
              },
              {
                title: "Outdoor & Patio Tile",
                image: "/outsideTile.png",
                alt: "",
                href: "",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl bg-black border border-neutral-700"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-4/3 object-cover"
                  />
                ) : (
                  <div className="aspect-4/3 bg-neutral-800 flex items-center justify-center p-6">
                    <p className="text-neutral-300 text-center">
                      Project photos coming soon
                    </p>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  {project.href && (
                    <a
                      href={project.href}
                      className="inline-flex items-center min-h-11 mt-3 text-amber-400 font-semibold hover:text-amber-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
                      aria-label={`View ${project.title} projects`}
                    >
                      View Projects →
                    </a>
                  )}
                </div>
              </article>
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
            Contact Morning Star Construction for top-quality tile work tailored to your project.
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
                q: "How much does tile installation cost in Victoria, TX?",
                a: "The cost depends on the size of the area, tile selection, layout, and preparation needed. Removing old tile or preparing a shower for waterproofing can also affect pricing. Contact Morning Star Construction for a free estimate based on your project."
              },
              {
                q: "Can you repair damaged tiles or replace old grout?",
                a: "Yes. We offer cracked or loose tile repair, tile replacement, and grout removal and regrouting. We assess the affected area to help determine whether a targeted repair is appropriate or additional work is needed. Replacement tile matching depends on material availability."
              },
              {
                q: "Do you install tile indoors and outdoors?",
                a: "Yes. We install tile floors, shower and bathroom tile, kitchen backsplashes, and outdoor tile for patios, porches, and outdoor kitchens. We help you consider materials suited to the location, moisture exposure, and intended use."
              },
              {
                q: "How long does a tile installation or repair take?",
                a: "Timing depends on the project size, existing surface condition, layout, and preparation required. Repairs and small backsplashes generally take less time than full floors or showers. We discuss the expected schedule, including setting and curing time, before work begins."
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

export default TilePage;

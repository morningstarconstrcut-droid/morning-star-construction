"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RemodelingPage() {
  return (
    <div className="font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background Image */}
        <Image
          src="/full.jpg" // replace with your image
          alt="Remodeling and Renovation in Victoria Texas"
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
            Remodeling & Renovation Services in Victoria, TX
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Transforming homes with craftsmanship and attention to detail.
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

    {/* Our Remodeling Work - Split Section */}
      <section className="py-28 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Home Remodeling & Renovation Services in Victoria, TX
            </h2>

            <p className="text-neutral-400 mb-8 text-lg leading-relaxed">
             Transform your home with expert remodeling and renovation services from Morning Star Construction. From kitchens and bathrooms to room additions and structural upgrades, we deliver precise craftsmanship, modern design, and long-lasting results for homeowners in Victoria, TX.
            </p>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Kitchen Remodeling and Upgrades
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Bathroom renovations and Fixtures
              </li>
                            <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Room Additions and Extensions
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Structural Renovations
              </li>
                            <li className="flex gap-3">
                <span className="text-amber-500">✔</span> Custom Upgrades
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
              src="/bath.jpg"
              alt="Brickwork project"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/bath (2).jpg"
              alt="Stone installation"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/bath3.jpg"
              alt="Outdoor fireplace"
              className="rounded-2xl object-cover h-64 w-full"
            />
            <img
              src="/bath4.jpg"
              alt="Custom mailbox"
              className="rounded-2xl object-cover h-64 w-full"
            />
          </div>

        </div>
      </section>

      {/* ================= BUBBLE CARDS ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Our Remodeling Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Kitchen Remodeling and Upgrades",
              desc: "Upgrade your kitchen with modern design, functional layouts, and high-quality materials. Morning Star Construction in Victoria, TX delivers precise cabinetry, countertops, and fixture installation for a kitchen that’s beautiful, durable, and built for everyday life.",
            },
            {
              title: "Bathroom Renovations & Fixtures",
              desc: "Transform your bathroom into a stylish and functional space. We handle everything from custom vanities and tile work to plumbing fixtures, providing homeowners in Victoria, TX with durable, elegant bathroom renovations tailored to their needs.",
            },
            {
              title: "Room Additions and Extensions",
              desc: "Expand your home with expertly crafted room additions and extensions. Morning Star Construction in Victoria, TX designs and builds extra living space that blends seamlessly with your existing home, ensuring structural integrity, style, and lasting comfort for your family.",
            },
            {
              title: "Structural Renovations",
              desc: "Expert structural work ensuring safety, durability, and aesthetic appeal.",
            },
            {
              title: "Custom Upgrades",
              desc: "Tailored home improvements, from flooring to lighting, to enhance comfort and style.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-900 border border-amber-500 p-8 rounded-2xl text-center hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center bg-yellow-500 text-black px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Home?
        </h2>

        <p className="mb-8">
          Contact Morning Star Construction today for your remodeling consultation and estimate.
        </p>

        <a
          href="/contact"
          className="inline-block bg-black text-yellow-500 font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition duration-300"
        >
          Get Your Free Estimate
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
                      q: "How long does a home remodeling project take?",
                      a: "The timeline depends on the scope of work. Smaller projects like kitchen or bathroom renovations typically take 2–6 weeks, while room additions and structural changes may take several months. Morning Star Construction provides detailed schedules and keeps homeowners updated throughout the process."
                    },
                    {
                      q: "Do you provide design assistance for remodeling projects?",
                      a: "Yes! We help homeowners plan layouts, select materials, and choose finishes that fit their style and budget. Our design guidance ensures that every renovation is both functional and visually appealing."
                    },
                    {
                      q: "Can I stay in my home during the renovation?",
                      a: "Tuckpointing is the process of removing damaged mortar and replacing it with new mortar to restore structural integrity. It is typically needed when mortar joints crack, crumble, or allow moisture intrusion. This process extends the life of your brickwork and prevents further damage."
                    },
                    {
                      q: "How much does a home remodeling project cost in Victoria, TX?",
                      a: "Costs vary depending on the project size, materials, and complexity. After a detailed consultation, we provide a transparent, written estimate outlining all labor and materials so homeowners know exactly what to expect."
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

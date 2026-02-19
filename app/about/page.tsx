"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen  bg-linear-to-br from-gray-900 to-gray-400">

        {/* Hero Section */}
        <motion.section
            className="relative py-65 text-white text-center overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            >
         {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                backgroundImage: "url('k.jpg')",
                }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Morning Star Construction
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                Built on integrity, craftsmanship, and a commitment to doing the job right.
                </p>
            </div>
        </motion.section>


      {/* Our Roots */}
        <motion.section
            className="py-20 max-w-5xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            >
            <h2 className="text-4xl font-bold mb-8 text-center">Our Roots</h2>

            <p className="text-lg leading-relaxed mb-6">
                I started Morning Star Construction with a simple goal — to build something honest, 
                lasting, and rooted in faith and family. What began with support from my parents and
                family has grown into a company built on hard work and responsibility.
            </p>
            <p className="text-lg leading-relaxed mb-6">
                Before starting the company, I worked in bricklaying, where I learned the value of precision,
                 patience, and doing the job right the first time. That foundation still guides every project today.
            </p>
            <p className="text-lg leading-relaxed mb-6">
                I wanted the freedom to build something for my family and to serve homeowners in Victoria, TX with integrity. 
                Too often, I saw rushed jobs and poor communication. I believe construction should be straightforward, dependable, and built to last.
            </p>
            <p className="text-lg leading-relaxed">
                Morning Star Construction is built on faith, family values, and hard work — and I remain hands-on with every project to ensure it’s 
                done right.
            </p>
        </motion.section>

      {/* Our Approach */}
        <motion.section
            className="py-20 mx-auto px-6 bg-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            >
            <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Approach to Quality</h2>

            <p className="text-lg leading-relaxed mb-6">
                Quality isn’t just about how something looks when it’s finished — it’s about how it’s built from the start.
                   </p>
            <p className="text-lg leading-relaxed mb-6">
                At Morning Star Construction, every project begins with careful planning and clear communication. I take time 
                to understand what you need, explain the process, and provide a straightforward estimate before any work begins.            
            </p>
            <p className="text-lg leading-relaxed mb-6">
                During construction, I stay hands-on and present on the job site. Clean work areas, organized tools, and attention 
                to detail are part of the process — not an afterthought. Using reliable materials and proven techniques ensures the 
                work not only looks good but lasts.

            </p>
            <p className="text-lg leading-relaxed ">
                My approach is simple: do the job right, communicate clearly, and stand behind the work.
                        
            </p>
            </div>
        </motion.section>

      {/* Experience & Team */}
        <motion.section
            className="py-20 max-w-5xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            >
            <h2 className="text-4xl font-bold mb-8 text-center">Experience & Team</h2>

            <p className="text-lg leading-relaxed mb-6">
                Morning Star Construction is built on real, hands-on experience in masonry, remodeling, roofing, and exterior
                 construction. My background in bricklaying taught me precision, structural awareness, and the importance of doing work that lasts.
            </p>

            <p className="text-lg leading-relaxed mb-6">
                While the company is growing, I remain directly involved in every project. When needed, I work alongside trusted
                 family members and skilled tradesmen who share the same standards of workmanship and integrity.

            </p>
            <p className="text-lg leading-relaxed mb-6">
                We may not be the largest contractor in Victoria, TX — but we focus on quality over volume. Every project receives
                 personal attention, careful planning, and workmanship we’re proud to stand behind.

            </p>
            <p className="text-lg leading-relaxed mb-6">
                Our team operates with one priority: deliver reliable, durable results built on hard work and accountability.
                        
            </p>
        </motion.section>

      {/* Values */}
        <motion.section
            className="bg-black py-20 mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            >
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Our Values</h2>

                <div className="grid md:grid-cols-3 gap-10">
                
                    <div className="text-black p-8 shadow-md rounded-xl bg-gray-50">
                    <h3 className="text-2xl font-semibold mb-4">Faith and Integrity</h3>
                    <p>Doing the right thing on every project.</p>
                    </div>

                    <div className="text-black p-8 shadow-md rounded-xl bg-gray-50">
                    <h3 className="text-2xl font-semibold mb-4">Hard Work and Craftsmanship</h3>
                    <p>Quality that lasts, built with care.</p>
                    </div>

                    <div className="text-black p-8 shadow-md rounded-xl bg-gray-50">
                    <h3 className="text-2xl font-semibold mb-4">Family and Community</h3>
                    <p>Serving our neighbors like our own family.</p>
                    </div>

                    <div className="text-black p-8 shadow-md rounded-xl bg-gray-50">
                    <h3 className="text-2xl font-semibold mb-4">Transparency and Communication</h3>
                    <p>Honest estimates, clear updates.</p>
                    </div>

                    <div className="text-black p-8 shadow-md rounded-xl bg-gray-50">
                    <h3 className="text-2xl font-semibold mb-4">Reliability & Accountability</h3>
                    <p>On time, every time, no shortcuts.</p>
                    </div>
                </div>
            </div>
        </motion.section>

 

      {/* CTA */}
        <motion.section
            className="py-24 bg-yellow-500 text-center text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            >
            <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Strong Together
            </h2>

            <a
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
            >
            Contact Us Today
            </a>
        </motion.section>

    </main>
  );
}

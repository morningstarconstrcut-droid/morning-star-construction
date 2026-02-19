"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FamilyOwnedConstruction() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/blog/family-owned-construction.jpg"
          alt="Family-owned construction company benefits in Victoria TX"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Supporting Local: Why Choosing a Family-Owned Construction Company Matters
            </h1>
            <p className="text-gray-300 text-lg">
              Discover the advantages of hiring local, family-owned construction businesses in Victoria, TX
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 py-16 space-y-12"
      >
        <section>
          <h2 className="text-3xl font-bold mb-4">Why Local Matters</h2>
          <p className="text-gray-300 leading-8">
            Choosing a family-owned construction company in Victoria, TX ensures you work with professionals who care about their reputation,
            community, and quality of work. Local businesses understand the unique needs of Texas homes and provide personalized service.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Advantages of Family-Owned Construction Companies</h2>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            <li>✔ Personalized attention and direct communication with decision-makers</li>
            <li>✔ Commitment to quality, integrity, and long-term relationships</li>
            <li>✔ Deep understanding of local building codes and climate considerations</li>
            <li>✔ Flexible, customized solutions for your home renovation or construction needs</li>
            <li>✔ Supporting the local economy and community growth</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Trust & Accountability</h2>
          <p className="text-gray-300 leading-8">
            Family-owned companies take pride in every project, from small home renovations to full-scale construction.
            You are working directly with skilled professionals who are accountable for craftsmanship, timelines, and budget.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Long-Term Relationships</h2>
          <p className="text-gray-300 leading-8">
            Unlike larger corporations, family businesses prioritize repeat clients and referrals. They build trust over time,
            ensuring your home improvements are maintained and supported for years to come.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Local Expertise in Victoria, TX</h2>
          <p className="text-gray-300 leading-8">
            From roofing and masonry to remodeling and landscaping, local family-owned contractors understand the specific challenges of
            Texas homes. Their hands-on approach guarantees efficient, safe, and code-compliant construction.
          </p>
        </section>

        <section className="bg-yellow-500 text-black p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Choose a Trusted Local Partner
          </h3>
          <p className="mb-4">
            Morning Star Construction is a family-owned business serving Victoria, TX with integrity and hands-on expertise.
            Support local and ensure quality construction for your home today.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Link href="/contact">
             Contact Our Family Team for Your Project
            </Link>
            
            
          </button>
        </section>
      </motion.article>
    </div>
  );
}

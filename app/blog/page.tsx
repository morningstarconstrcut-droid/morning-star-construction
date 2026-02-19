"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "Choosing the Right Roofing Material for Your House",
    description:
      "Learn how to pick the best roofing material for your home in Texas, balancing durability, cost, and style.",
    image: "/roofMAT.jpg",
    slug: "roofing-material-guide",
  },
  {
    title: "Interior Renovation Ideas That Transform Spaces",
    description:
      "Explore innovative interior renovation ideas to make your living spaces more functional and beautiful.",
    image: "/home.jpg",
    slug: "interior-renovation-ideas",
  },
  {
    title: "Exterior Construction Tips: Siding, Additions, and More",
    description:
      "Get expert tips on improving your home's exterior, from siding choices to structural additions.",
    image: "/outside.jpg",
    slug: "exterior-construction-tips",
  },
  {
    title: "Step-by-Step Home Roofing Process Explained",
    description:
      "Understand the complete roofing process from inspection to final walkthrough.",
    image: "/roofStep.jpg",
    slug: "home-roofing-process",
  },
  {
    title: "How to Spot Structural Issues Before They Become Costly",
    description:
      "Identify early signs of structural problems to save money and protect your home.",
    image: "/rot.jpg",
    slug: "structural-issues-guide",
  },
  {
    title: "Maintaining Your Brickwork: Tips for Longevity",
    description:
      "Keep your masonry in top condition with professional maintenance tips.",
    image: "/wall.jpg",
    slug: "brickwork-maintenance",
  },
  {
    title: "DIY vs. Professional Renovation: What You Should Know",
    description:
      "Compare the pros and cons of DIY and hiring pros for your renovation projects.",
    image: "/blog/diy-vs-pro.jpg",
    slug: "diy-vs-professional",
  },
  {
    title: "Supporting Local: Why Choosing a Family-Owned Construction Company Matters",
    description:
      "Learn the benefits of hiring local, family-owned construction businesses.",
    image: "/blog/support-local.jpg",
    slug: "support-local",
  },
  {
    title: "Seasonal Maintenance Tips for Texas Homes",
    description:
      "Seasonal checklists to keep your home safe, efficient, and looking great year-round.",
    image: "/blog/seasonal.jpg",
    slug: "seasonal-maintenance",
  },
  {
    title: "Top 5 Home Remodeling Trends in 2026",
    description:
      "Stay ahead of the curve with the hottest remodeling trends for the year.",
    image: "/blog/trends.jpg",
    slug: "remodeling-trends-2026",
  },
  {
    title: "Modern Roofing Materials That Boost Curb Appeal",
    description:
      "Enhance your home's look and durability with these modern roofing materials.",
    image: "/blog/modern-roofing.jpg",
    slug: "modern-roofing-materials",
  },
  {
    title: "Eco-Friendly Home Renovation Ideas",
    description:
      "Reduce environmental impact while improving your home with green renovation tips.",
    image: "/blog/eco-renovation.jpg",
    slug: "eco-friendly-renovation",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Construction Blog & Tips</h1>
        <p className="text-gray-400 text-lg">
          Expert advice, tips, and guides for homeowners and construction enthusiasts.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <div className="relative h-56">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block text-yellow-500 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (err) {
      alert("Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <main className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero / Heading */}
      <motion.section
        className="py-20 text-center bg-linear-to-b from-gray-900 to-gray-700 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Contact Morning Star Construction
        </h1>
        <p className="text-xl text-gray-200">
          We’re ready to bring your project to life — get in touch today!
        </p>
      </motion.section>

      {/* Two-Column Section */}
      <motion.section
        className="text-black py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column — Contact Info */}
        <div className="text-black flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg">
            Phone:{" "}
            <a href="tel:+13617883004" className="underline">
              +1 (361) 788-3004
            </a>
          </p>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:morningstarconstrcut@gmail.com"
              className="underline"
            >
              morningstarconstrcut@gmail.com
            </a>
          </p>
          <p className="text-lg">Location: Victoria, TX and surrounding areas</p>

          {/* Optional Map */}
          {/* Location / Map */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <div className="w-full h-64 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111845.14156543536!2d-96.9759075!3d28.834076049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX!5e0!3m2!1sen!2sus!4v1771389135386!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>

        </div>

        {/* Right Column — Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 bg-white p-8 rounded-xl shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-500 font-semibold mt-2">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </motion.section>
    </main>
  );
}

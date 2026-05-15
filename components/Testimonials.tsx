"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Computer Science Student",
    review:
      "The university gave me incredible industry exposure and helped me build real-world skills.",
  },
  {
    name: "Priya Patel",
    role: "AI & Data Science",
    review:
      "Amazing mentors, modern labs, and a fantastic learning environment.",
  },
  {
    name: "Rohan Mehta",
    role: "Cyber Security",
    review:
      "The placement support and practical learning experience were exceptional.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
            >
              <p className="text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-purple-400 text-sm mt-1">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
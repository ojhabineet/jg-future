"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "15K+", label: "Active Students" },
  { number: "120+", label: "Faculty Experts" },
  { number: "98%", label: "Placement Support" },
  { number: "250+", label: "Industry Partners" },
];

export default function Stats() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Globe,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Mentorship",
    desc: "Learn from experienced professors and industry experts.",
  },
  {
    icon: Laptop,
    title: "Modern Labs",
    desc: "Advanced technology-enabled learning environment.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Collaborations with international universities.",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    desc: "Internships and placement-focused programs.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Future Focused Learning
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-500 transition"
              >
                <Icon className="text-purple-400 w-12 h-12 mb-6" />

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, DollarSign, BadgeCheck, Handshake } from "lucide-react";

export default function ValuePropositionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Zap,
      title: "Fast Distribution",
      description:
        "Express delivery services with 24-48 hour turnaround for urgent medical supplies across all major cities.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Competitive bulk pricing and flexible payment terms designed to support healthcare institutions of all sizes.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensuring all products meet WHO standards and regulatory requirements.",
    },
    {
      icon: Handshake,
      title: "Trusted Partnerships",
      description:
        "Long-term relationships with over 500 healthcare providers built on reliability, transparency, and excellence.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose CrestvMed
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We go beyond distribution to become your strategic partner in
            healthcare excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 lg:p-8 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-900 to-teal-700 rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Trusted by Leading Healthcare Institutions
          </h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            From large teaching hospitals to rural clinics, we serve healthcare
            providers with the same commitment to quality and reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

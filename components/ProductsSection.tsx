"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Pill, TestTube, Scissors, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const products = [
    {
      icon: Pill,
      title: "Pharmaceuticals",
      description:
        "Comprehensive range of prescription medications, over-the-counter drugs, and specialized treatments from trusted manufacturers.",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: TestTube,
      title: "Diagnostics",
      description:
        "Advanced diagnostic equipment, laboratory supplies, and testing kits for accurate medical assessments and patient care.",
      color: "from-teal-600 to-teal-800",
    },
    {
      icon: Scissors,
      title: "Surgical Equipment",
      description:
        "High-quality surgical instruments, operating room supplies, and medical devices meeting international standards.",
      color: "from-blue-800 to-teal-600",
    },
    {
      icon: Shield,
      title: "PPE & Safety",
      description:
        "Complete range of personal protective equipment including masks, gloves, gowns, and sanitization supplies.",
      color: "from-teal-700 to-blue-700",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="products"
      ref={ref}
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Product Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive medical supply solutions tailored to meet the diverse
            needs of healthcare facilities across Africa
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className="text-blue-900 font-medium flex items-center group-hover:text-teal-600 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6"
          >
            View Full Product Catalog
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

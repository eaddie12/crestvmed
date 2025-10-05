"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Amina Okonkwo",
      position: "Chief Medical Officer",
      company: "Lagos General Hospital",
      content:
        "CrestvMed has been our trusted partner for over five years. Their reliability in delivering critical medical supplies on time has been instrumental in maintaining our hospital's operational excellence.",
      logo: "LGH",
    },
    {
      name: "Pharmacist John Adebayo",
      position: "Pharmacy Manager",
      company: "HealthPlus Pharmacy Chain",
      content:
        "The quality of pharmaceuticals and the competitive pricing from CrestvMed has allowed us to serve our communities better. Their customer service is exceptional and always responsive to our needs.",
      logo: "HPH",
    },
    {
      name: "Dr. Sarah Musa",
      position: "Director of Operations",
      company: "Federal Medical Centre, Abuja",
      content:
        "Working with CrestvMed has transformed our procurement process. Their extensive product range and efficient distribution network ensure we never run out of essential medical supplies.",
      logo: "FMC",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from healthcare professionals who trust CrestvMed for their
            medical supply needs
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <Quote className="w-12 h-12 text-teal-600 opacity-50 mb-6" />

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentIndex].logo}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-teal-600 font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-900 w-8"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

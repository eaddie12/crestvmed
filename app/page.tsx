import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "CrestvMed - Medical & Healthcare Distribution | Nigeria & Africa",
  description:
    "Leading medical and healthcare distribution company delivering quality pharmaceuticals, medical equipment, and supplies to hospitals, clinics, and pharmacies across Nigeria and Africa.",
  keywords:
    "medical distribution, healthcare supplies, pharmaceuticals Nigeria, medical equipment Africa, hospital supplies, pharmacy distribution",
  openGraph: {
    title: "CrestvMed - Medical & Healthcare Distribution | Nigeria & Africa",
    description:
      "Delivering quality pharmaceuticals, medical equipment, and supplies efficiently and reliably across Africa. Your trusted partner in medical procurement.",
    type: "website",
    locale: "en_NG",
    siteName: "CrestvMed",
    images: [
      {
        url: "https://images.pexels.com/photos/4047146/pexels-photo-4047146.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "CrestvMed - Healthcare Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrestvMed - Medical & Healthcare Distribution",
    description:
      "Your trusted partner in medical procurement across Nigeria and Africa",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ValuePropositionSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

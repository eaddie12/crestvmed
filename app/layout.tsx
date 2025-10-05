import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrestvMed - Medical & Healthcare Distribution | Nigeria & Africa",
  description:
    "Leading medical and healthcare distribution company delivering quality pharmaceuticals, medical equipment, and supplies to hospitals, clinics, and pharmacies across Nigeria and Africa.",
  metadataBase: new URL("https://crestvmed.com"),
  keywords:
    "medical distribution, healthcare supplies, pharmaceuticals Nigeria, medical equipment Africa, hospital supplies, pharmacy distribution, CrestvMed",
  authors: [{ name: "CrestvMed" }],
  creator: "CrestvMed",
  publisher: "CrestvMed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://crestvmed.com",
    title: "CrestvMed - Medical & Healthcare Distribution | Nigeria & Africa",
    description:
      "Delivering quality pharmaceuticals, medical equipment, and supplies efficiently and reliably across Africa. Your trusted partner in medical procurement.",
    siteName: "CrestvMed",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrestvMed - Medical & Healthcare Distribution",
    description:
      "Your trusted partner in medical procurement across Nigeria and Africa",
    creator: "@crestvmed",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CrestvMed",
              alternateName: "CrestvMed Distribution",
              url: "https://crestvmed.com",
              logo: "https://crestvmed.com/logo.png",
              description:
                "Leading medical and healthcare distribution company serving hospitals, clinics, and pharmacies across Nigeria and Africa",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Medical District",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-800-123-4567",
                contactType: "Customer Service",
                email: "info@crestvmed.com",
                areaServed: ["NG", "GH", "KE", "UG"],
                availableLanguage: ["en"],
              },
              sameAs: [
                "https://www.facebook.com/crestvmed",
                "https://www.twitter.com/crestvmed",
                "https://www.linkedin.com/company/crestvmed",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

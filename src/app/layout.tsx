import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
import {CookieBanner} from "@/components/ui/CookieBanner";

const inter = Inter({
    subsets: ['latin-ext'],
    display: 'swap',
    preload: true,
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'CleanDaw | Pranie Tapicerki i Car Detailing Poznań',
    description: 'Profesjonalne czyszczenie tapicerki meblowej, samochodowej i detailing wnętrza. Usługi stacjonarne w Słopanowie oraz z dojazdem do klienta w Poznaniu i okolicach.',
    keywords: ['pranie tapicerki poznań', 'czyszczenie kanapy', 'car detailing szamotuły', 'pranie aut', 'cleandaw'],
    authors: [{ name: 'CleanDaw' }],
    openGraph: {
        title: 'CleanDaw | Profesjonalne Pranie Tapicerki',
        description: 'Przywracamy blask Twoim wnętrzom. Sprawdź cennik i zarezerwuj termin!',
        url: 'https://twojadomena.pl', // TODO wpisanie domeny
        siteName: 'CleanDaw',
        locale: 'pl_PL',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CleanDaw",
    "description": "Profesjonalne pranie tapicerki meblowej i samochodowej. Dojazd do klienta na terenie Poznania, Szamotuł i województwa wielkopolskiego.",
    "url": "https://twojadomena.pl", // TODO wpisanie swojej domeny
    "telephone": "+48535880525",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Słopanowo",
        "addressRegion": "Wielkopolskie",
        "addressCountry": "PL"
    },
    "areaServed": ["Poznań", "Szamotuły", "Słopanowo", "Wielkopolskie"],
    "priceRange": "$$"
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
      <Navbar />
      <div className="pt-20">
          {children}
      </div>
     <Footer />
      <CookieBanner />
      </body>
      </html>
  );
}

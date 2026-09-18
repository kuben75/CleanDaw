import dynamic from 'next/dynamic';
import { Hero } from "@/components/features/Hero";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const AboutUs = dynamic(() => import('@/components/features/AboutUs').then(mod => mod.AboutUs));
const ReviewsSection = dynamic(() => import('@/components/features/ReviewSection').then(mod => mod.ReviewsSection));
const Services = dynamic(() => import('@/components/features/Services').then(mod => mod.Services));
const Pricing = dynamic(() => import('@/components/features/Pricing').then(mod => mod.Pricing));
const ProcessGallery = dynamic(() => import('@/components/features/Equipment').then(mod => mod.ProcessGallery));
const DriveSection = dynamic(() => import('@/components/features/DriveSection').then(mod => mod.DriveSection));
const ContactSection = dynamic(() => import('@/components/features/ContactSection').then(mod => mod.ContactSection));
const GallerySection = dynamic(() => import('@/components/features/GallerySection').then(mod => mod.GallerySection));

export default function Home() {
    return (
        <main>
            <Hero />
            <AboutUs />
            <ReviewsSection />
            <Services />
            <Pricing />
            <ProcessGallery />
            <DriveSection />
            <ContactSection />
            <GallerySection />
            <Analytics />
            <SpeedInsights/>
        </main>
    );
}
import {Hero} from "@/components/features/Hero";
import {AboutUs} from "@/components/features/AboutUs";
import {Services} from "@/components/features/Services";
import {ProcessGallery} from "@/components/features/Equipment";
import {DriveSection} from "@/components/features/DriveSection";
import {ContactSection} from "@/components/features/ContactSection";
import {ReviewsSection} from "@/components/features/ReviewSection";
import {Pricing} from "@/components/features/Pricing";
import {GallerySection} from "@/components/features/GallerySection";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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

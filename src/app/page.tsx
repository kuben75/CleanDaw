import {Hero} from "@/components/features/Hero";
import {AboutUs} from "@/components/features/AboutUs";
import {Services} from "@/components/features/Services";
import {Equipment} from "@/components/features/Equipment";
import {DriveSection} from "@/components/features/DriveSection";
import {ContactSection} from "@/components/features/ContactSection";
import {ReviewsSection} from "@/components/features/ReviewSection";
import {Pricing} from "@/components/features/Pricing";
import {GallerySection} from "@/components/features/GallerySection";

export default function Home() {
    return (
        <main>
            <Hero />
            <AboutUs />
            <ReviewsSection />
            <Services />
            <Pricing />
            <Equipment />
            <DriveSection />
            <ContactSection />
            <GallerySection />
        </main>
    );
}

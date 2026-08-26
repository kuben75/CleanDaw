import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { FullGalleryClient } from '@/components/features/FullGalleryClient';
import { getGalleryData} from "@/lib/gallery";

export const metadata: Metadata = {
    title: 'Galeria Realizacji | CleanDaw',
    description: 'Zobacz ponad 800 zdjęć z naszych realizacji. Pranie tapicerki meblowej i samochodowej przed i po.',
};

export default function GalleryPage() {
    const galleryData = getGalleryData();

    return (
        <main className="min-h-screen bg-slate-50 pt-28">

            <div className="bg-white border-b border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#galeria" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6 font-medium">
                        <ArrowLeft size={20} />
                        Wróć na stronę główną
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Pełna Galeria Realizacji
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl">
                        Przejrzyj nasze archiwum projektów. Dowód na to, że radzimy sobie z każdym, nawet najtrudniejszym zabrudzeniem.
                    </p>
                </div>
            </div>

            <FullGalleryClient fullData={galleryData} />

        </main>
    );
}
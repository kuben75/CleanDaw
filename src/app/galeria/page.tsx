import Link from 'next/link';
import { ArrowLeft, Images } from 'lucide-react';
import { Metadata } from 'next';
import { FullGalleryClient } from '@/components/features/FullGalleryClient';
import { getGalleryData } from "@/lib/gallery";

export const metadata: Metadata = {
    title: 'Galeria Realizacji | CleanDaw',
    description: 'Zobacz ponad 800 zdjęć z naszych realizacji. Pranie tapicerki meblowej i samochodowej przed i po.',
};

export default function GalleryPage() {
    const galleryData = getGalleryData();

    return (
        <main className="min-h-screen bg-zinc-950 pt-20 md:pt-24">

            <div className="bg-zinc-900 border-b border-zinc-800 py-16 relative overflow-hidden">

                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <Link
                        href="/#galeria"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors mb-8 text-xs font-bold uppercase tracking-widest group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Wróć na stronę główną
                    </Link>

                    <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <Images size={18} />
                        <span>Archiwum projektów</span>
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Pełna Galeria <span className="text-blue-500">Realizacji</span>
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-3xl">
                        Przejrzyj nasze archiwum. Dowód na to, że wyciągamy brud z każdej powierzchni. Bez wymówek, czyste fakty.
                    </p>
                </div>
            </div>

            <FullGalleryClient fullData={galleryData} />

        </main>
    );
}
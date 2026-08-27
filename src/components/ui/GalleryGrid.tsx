'use client';

import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { IGalleryData } from '@/types/gallery.types';
import { useGalleryGrid } from '@/hooks/useGalleryGrid';

export function GalleryGrid({ data }: Readonly<{ data: IGalleryData }>) {
    const {
        currentImages,
        selectedIndex,
        openLightbox,
        closeLightbox,
        showPrev,
        showNext
    } = useGalleryGrid();

    const renderGrid = (images: string[], title?: string, isBefore?: boolean) => {
        if (!images || images.length === 0) return null;

        return (
            <div className="mb-6 h-full">
                {title && (
                    <h4 className={`text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2 ${isBefore ? 'text-zinc-400' : 'text-blue-500'}`}>
                        <span className={`w-2 h-2 rounded-sm ${isBefore ? 'bg-zinc-600' : 'bg-blue-500'}`} />
                        {title}
                    </h4>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(images, index)}
                            // ZMIANA: używamy group/item dla pojedynczego zdjęcia
                            className="relative aspect-square rounded-sm overflow-hidden cursor-pointer group/item bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Realizacja zdjęcie ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover/item:scale-105"
                            />

                            <div className="absolute inset-0 bg-zinc-950/20 group-hover/item:bg-transparent transition-colors duration-500" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                <div className="bg-blue-600/90 text-white p-3 rounded-full shadow-lg transform scale-50 group-hover/item:scale-100 transition-transform duration-300">
                                    <Search size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            {data.standalone.length > 0 && (
                <div className="mb-16">
                    <h3
                        className="text-3xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Pojedyncze <span className="text-blue-500">strzały</span>
                    </h3>
                    {renderGrid(data.standalone)}
                </div>
            )}

            <div className="space-y-12">
                {data.projects.map((project) => (
                    <div key={project.id} className="bg-zinc-950 p-6 md:p-8 rounded-sm shadow-2xl border border-zinc-800 relative overflow-hidden group/card hover:border-zinc-700 transition-colors">

                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-50 group-hover/card:opacity-100 transition-opacity" />

                        <h3
                            className="text-3xl font-extrabold text-white mb-8 uppercase tracking-tight pl-2"
                            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                        >
                            {project.title}
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="bg-zinc-900/50 p-4 md:p-6 rounded-sm border border-zinc-800">
                                {renderGrid(project.before, "Stan Przed", true)}
                            </div>
                            <div className="bg-blue-950/10 p-4 md:p-6 rounded-sm border border-blue-900/30">
                                {renderGrid(project.after, "Efekt Po", false)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm animate-in fade-in duration-300">
                    <button onClick={closeLightbox} className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-sm transition-colors z-50">
                        <X size={32} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-4 md:left-8 p-3 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-sm transition-colors z-50">
                        <ChevronLeft size={36} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-4 md:right-8 p-3 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-sm transition-colors z-50">
                        <ChevronRight size={36} />
                    </button>

                    <div className="relative w-full h-full p-4 md:p-16 flex items-center justify-center cursor-zoom-out" onClick={closeLightbox}>
                        <div className="relative w-full h-full max-w-7xl flex items-center justify-center cursor-default animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={currentImages[selectedIndex]}
                                alt={`Powiększenie ${selectedIndex + 1}`}
                                fill
                                quality={90}
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-400 font-bold tracking-widest text-sm z-50">
                        {selectedIndex + 1} / {currentImages.length}
                    </div>
                </div>
            )}
        </>
    );
}
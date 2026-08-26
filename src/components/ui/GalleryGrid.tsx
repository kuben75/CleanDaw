'use client';

import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { IGalleryData } from '@/types/gallery.types';
import { useGalleryGrid } from '@/hooks/useGalleryGrid';

export function GalleryGrid({ data }: { data: IGalleryData }) {
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
                    <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isBefore ? 'text-slate-500' : 'text-blue-600'}`}>
                        <span className={`w-2 h-2 rounded-full ${isBefore ? 'bg-slate-400' : 'bg-blue-500'}`} />
                        {title}
                    </h4>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(images, index)}
                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-slate-100 shadow-sm border border-slate-200"
                        >
                            <Image
                                src={src}
                                alt={`Realizacja zdjęcie ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" size={32} />
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4 border-slate-200">Wybrane realizacje</h3>
                    {renderGrid(data.standalone)}
                </div>
            )}

            <div className="space-y-12">
                {data.projects.map((project) => (
                    <div key={project.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200/60 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10" />

                        <h3 className="text-2xl font-extrabold text-slate-900 mb-8 capitalize tracking-tight">
                            {project.title}
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="bg-slate-50/50 p-4 md:p-6 rounded-2xl">
                                {renderGrid(project.before, "Stan Przed", true)}
                            </div>
                            <div className="bg-blue-50/30 p-4 md:p-6 rounded-2xl">
                                {renderGrid(project.after, "Efekt Po", false)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200">
                    <button onClick={closeLightbox} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all z-50">
                        <X size={28} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-4 p-3 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all z-50 hidden sm:block">
                        <ChevronLeft size={36} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-4 p-3 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all z-50 hidden sm:block">
                        <ChevronRight size={36} />
                    </button>

                    <div className="relative w-full h-full p-4 md:p-16 flex items-center justify-center cursor-zoom-out" onClick={closeLightbox}>
                        <div className="relative w-full h-full max-w-6xl flex items-center justify-center cursor-default animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
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

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 tracking-widest text-sm font-medium z-50 bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
                        {selectedIndex + 1} / {currentImages.length}
                    </div>
                </div>
            )}
        </>
    );
}
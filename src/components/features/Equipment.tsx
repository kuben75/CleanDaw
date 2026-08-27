"use client";
import Image from "next/image";
import {ArrowRight, Camera, ChevronLeft, ChevronRight, Search, X} from "lucide-react";
import {WORK_IMAGES} from "@/constants/work";
import {useGalleryGrid} from "@/hooks/useGalleryGrid";
import Link from "next/link";
import {Button} from "@/components/ui/Button";

export function ProcessGallery() {

    const { currentImages, selectedIndex, openLightbox, closeLightbox, showPrev, showNext } = useGalleryGrid();

    const imageUrls = WORK_IMAGES.map(img => img.src);

    return (
        <section id="proces" className="py-20 md:py-32 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <div
                            className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                            <Camera size={18}/>
                            <span>Proces w akcji</span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight"
                            style={{fontFamily: 'var(--font-oswald), sans-serif'}}
                        >
                            Brudna robota, <br className="hidden md:block"/>
                            <span className="text-blue-500">Czysty efekt.</span>
                        </h2>
                    </div>

                    <p className="text-zinc-400 text-lg md:text-right max-w-md">Wjeżdżamy, robimy swoje i wyciągamy
                        najcięższy brud. Zobacz nas przy pracy. Kliknij, by powiększyć zdjęcie.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense">
                    {WORK_IMAGES.map((img, index) => (
                        <div key={img.id} onClick={() => openLightbox(imageUrls, index)} className={`relative rounded-sm overflow-hidden group border border-zinc-800 hover:border-blue-500 transition-colors duration-500 bg-zinc-950 cursor-pointer ${img.className}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div
                                className="absolute inset-0 bg-zinc-950/30 group-hover:bg-zinc-950/10 transition-colors duration-500"/>

                            <div
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div
                                    className="bg-blue-600/90 text-white p-3 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                    <Search size={24}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 md:mt-18 flex justify-center">
                    <Link href="/galeria">
                        <Button variant="primary" className="gap-3 group">
                            Zobacz pełną galerię
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                        </Button>
                    </Link>
                </div>

            </div>

            {selectedIndex !== null && currentImages.length > 0 && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm animate-in fade-in duration-300">

                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 z-50 p-2 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-sm transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); showPrev(); }}
                        className="absolute left-4 md:left-8 z-50 p-3 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-sm transition-colors"
                    >
                        <ChevronLeft size={36} />
                    </button>

                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-16 p-4">
                        <Image
                            src={currentImages[selectedIndex]}
                            alt="Powiększone zdjęcie realizacji"
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                        className="absolute right-4 md:right-8 z-50 p-3 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-sm transition-colors"
                    >
                        <ChevronRight size={36} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-400 font-bold tracking-widest text-sm">
                        {selectedIndex + 1} / {currentImages.length}
                    </div>
                </div>
            )}
        </section>
    );
}
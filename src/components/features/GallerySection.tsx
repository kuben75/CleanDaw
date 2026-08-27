import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getGalleryData } from "@/lib/gallery";

export async function GallerySection() {
    const galleryData = getGalleryData();

    const previewData = {
        projects: galleryData.projects.slice(0, 2),
        standalone: galleryData.standalone.slice(0, 4)
    };

    return (
        <section id="galeria" className="py-20 md:py-32 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                        <Sparkles size={18} />
                        <span>Efekty pracy</span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                    >
                        Wybrane <span className="text-blue-500">Realizacje</span>
                    </h2>

                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Najlepszym dowodem na skuteczność naszego sprzętu i chemii są zdjęcia przed i po wykonanej usłudze.
                    </p>
                </div>

                {previewData.projects.length > 0 || previewData.standalone.length > 0 ? (
                    <>
                        <GalleryGrid data={previewData} />

                        <div className="mt-12 md:mt-16 text-center">
                            <Link href="/galeria">
                                <Button variant="primary" className="inline-flex items-center gap-3 group">
                                    Zobacz wszystkie realizacje
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-zinc-500 bg-zinc-950 border border-zinc-800 p-8 rounded-sm">
                        Brak zdjęć do wyświetlenia.
                    </p>
                )}

            </div>
        </section>
    );
}
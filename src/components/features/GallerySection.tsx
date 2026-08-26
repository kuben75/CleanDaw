import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getGalleryData } from "@/lib/gallery";

export async function GallerySection() {
    const galleryData = getGalleryData();

    const previewData = {
        projects: galleryData.projects.slice(0, 2),
        standalone: galleryData.standalone.slice(0, 4)
    };

    return (
        <section id="galeria" className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Wybrane Realizacje</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Najlepszym dowodem na skuteczność naszego sprzętu i chemii są zdjęcia przed i po wykonanej usłudze.
                    </p>
                </div>

                {previewData.projects.length > 0 || previewData.standalone.length > 0 ? (
                    <>
                        <GalleryGrid data={previewData} />

                        <div className="mt-12 text-center">
                            <Link href="/galeria">
                                <Button variant="primary" className="inline-flex items-center gap-2">
                                    Zobacz wszystkie realizacje <ArrowRight size={18} />
                                </Button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-slate-500 bg-white p-8 rounded-2xl shadow-sm">
                        Brak zdjęć do wyświetlenia.
                    </p>
                )}

            </div>
        </section>
    );
}
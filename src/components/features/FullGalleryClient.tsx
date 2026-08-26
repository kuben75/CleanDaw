'use client';

import { useState } from 'react';
import { IGalleryData } from '@/types/gallery.types';
import { Button } from '../ui/Button';
import { Loader2 } from 'lucide-react';
import {GalleryGrid} from "@/components/ui/GalleryGrid";

export function FullGalleryClient({ fullData }: Readonly<{ fullData: IGalleryData }>) {

    const [visibleProjects, setVisibleProjects] = useState(3);
    const [visibleStandalone, setVisibleStandalone] = useState(8);
    const [isLoading, setIsLoading] = useState(false);

    const currentData: IGalleryData = {
        projects: fullData.projects.slice(0, visibleProjects),
        standalone: fullData.standalone.slice(0, visibleStandalone)
    };

    const hasMore =
        visibleProjects < fullData.projects.length ||
        visibleStandalone < fullData.standalone.length;

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleProjects(prev => prev + 3);
            setVisibleStandalone(prev => prev + 8);
            setIsLoading(false);
        }, 400);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

            <GalleryGrid data={currentData} />

            {hasMore && (
                <div className="mt-16 text-center">
                    <Button
                        variant="secondary"
                        onClick={handleLoadMore}
                        disabled={isLoading}
                        className="min-w-[200px]"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                <Loader2 size={18} className="animate-spin" />
                Ładowanie...
              </span>
                        ) : (
                            "Załaduj więcej realizacji"
                        )}
                    </Button>
                </div>
            )}

            {!hasMore && (
                <p className="mt-16 text-center text-slate-500 font-medium">
                    Wyświetlono wszystkie realizacje.
                </p>
            )}

        </div>
    );
}
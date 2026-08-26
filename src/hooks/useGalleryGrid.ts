import { useState, useEffect, useCallback } from 'react';

export function useGalleryGrid() {
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = useCallback((images: string[], index: number) => {
        setCurrentImages(images);
        setSelectedIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
        setCurrentImages([]);
    }, []);

    const showPrev = useCallback(() => {
        if (selectedIndex !== null && currentImages.length > 0) {
            setSelectedIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev! - 1));
        }
    }, [selectedIndex, currentImages]);

    const showNext = useCallback(() => {
        if (selectedIndex !== null && currentImages.length > 0) {
            setSelectedIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev! + 1));
        }
    }, [selectedIndex, currentImages]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, closeLightbox, showPrev, showNext]);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedIndex]);

    return {
        currentImages,
        selectedIndex,
        openLightbox,
        closeLightbox,
        showPrev,
        showNext
    };
}
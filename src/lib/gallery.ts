import fs from 'fs';
import path from 'path';
import { IGalleryData } from '@/types/gallery.types';

function parseCamelCase(text: string): string {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1).trim();
}

export function getGalleryData(): IGalleryData {
    const galleryDir = path.join(process.cwd(), 'public', 'img', 'gallery');
    const galleryData: IGalleryData = { projects: [], standalone: [] };

    try {
        if (fs.existsSync(galleryDir)) {
            const items = fs.readdirSync(galleryDir, { withFileTypes: true });

            items.forEach(item => {
                if (item.isDirectory()) {
                    const projectName = item.name;
                    const projectPath = path.join(galleryDir, projectName);
                    const beforePath = path.join(projectPath, 'before');
                    const afterPath = path.join(projectPath, 'after');

                    let beforeImages: string[] = [];
                    let afterImages: string[] = [];

                    if (fs.existsSync(beforePath)) {
                        beforeImages = fs.readdirSync(beforePath)
                            .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
                            .map(f => `/img/gallery/${projectName}/before/${f}`);
                    }
                    if (fs.existsSync(afterPath)) {
                        afterImages = fs.readdirSync(afterPath)
                            .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
                            .map(f => `/img/gallery/${projectName}/after/${f}`);
                    }

                    if (beforeImages.length > 0 || afterImages.length > 0) {
                        galleryData.projects.push({
                            id: projectName,
                            title: parseCamelCase(projectName),
                            before: beforeImages,
                            after: afterImages
                        });
                    }
                }
                else if (item.isFile()) {
                    const fileName = item.name;
                    if (fileName.toLowerCase().includes('whatsapp') || fileName.endsWith('.mp4')) return;
                    if (/\.(jpg|jpeg|png|webp)$/i.test(fileName)) {
                        galleryData.standalone.push(`/img/gallery/${fileName}`);
                    }
                }
            });
        }
    } catch  {
        console.error("Błąd ładownia galerii");
    }

    return galleryData;
}
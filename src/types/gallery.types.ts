export interface IGalleryProject {
    id: string;
    title: string;
    before: string[];
    after: string[];
}

export interface IGalleryData {
    projects: IGalleryProject[];
    standalone: string[];
}
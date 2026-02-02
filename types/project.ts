export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    thumbnail: string;
    icon: string;
    tags: string[];
    links?: {
        playstore?: string;
        appstore?: string;
        steam?: string;
    };
    screenshots: string[];
    features: string[];
}

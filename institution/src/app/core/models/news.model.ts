export interface News {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: Date;
    image?: string;
    author?: string;
}
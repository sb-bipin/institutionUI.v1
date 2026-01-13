export interface NewsItem {
    id: number | string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishDate: Date;
    imageUrl: string;
}
export interface NewsItem {
    id: number | string;
    title: string;
    description: string;
    author: string;
    publishDate: Date;
    imageUrl: string;
}
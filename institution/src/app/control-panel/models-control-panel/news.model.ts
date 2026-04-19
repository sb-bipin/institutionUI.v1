export interface NewsItem {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishDate: Date;
    imageUrl: string;
}

export interface CreateNewsDto {
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishDate: Date;
    imageFile?: File;
}

export interface UpdateNewsDto extends Partial<CreateNewsDto> {
    id: string;
    imageFile?: File;
}

export interface NewsApiResponse {
    success: boolean;
    message?: string;
    data?: NewsItem | NewsItem[];
}
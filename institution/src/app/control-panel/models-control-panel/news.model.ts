export interface NewsItem {
    id: string;
    title: string;
    description: string;
    newsURL: string;
    author: string;
    publishDate: Date;
    imageUrl: string;
}

export interface CreateNewsDto {
    title: string;
    description: string;
    newsURL: string;
    author: string;
    publishDate: Date;
    imageUrl?: File;
}

export interface UpdateNewsDto extends Partial<CreateNewsDto> {
    id: string;
    imageUrl?: File;
}

export interface NewsApiResponse {
    success: boolean;
    message?: string;
    data?: NewsItem | NewsItem[];
}
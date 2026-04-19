export interface Notice {
    id: string;
    title: string;
    description: string;
    date: Date | string;
    imageUrl: string | null;
    important: boolean;
}

export interface CreateNoticeDto {
    title: string;
    description: string;
    date: Date;
    important: boolean;
    imageFile?: File;
}

export interface UpdateNoticeDto extends Partial<CreateNoticeDto> {
    id: string;
    imageFile?: File;
}

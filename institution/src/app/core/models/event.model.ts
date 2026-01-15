export interface EventSchedule {
    id: number | string;
    title: string;
    description: string;
    date: Date;
    endDate?: Date;
    time: string;
    location: string;
    imageUrl: string;
    organizer: string;
}
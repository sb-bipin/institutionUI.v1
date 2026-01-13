export interface EventSchedule {
    id: number;
    title: string;
    description: string;
    date: Date;
    endDate?: Date;
    time: string;
    location: string;
    imageUrl: string;
    organizer: string;
}
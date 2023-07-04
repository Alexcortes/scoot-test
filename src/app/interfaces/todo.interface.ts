export interface TodoItem {
    id: number;
    description: string;
    dueDate?: Date;
    priority: priority;
}

export enum priority {
    low = 'LOW',
    medium = 'MEDIUM',
    high = 'HIGH'
}
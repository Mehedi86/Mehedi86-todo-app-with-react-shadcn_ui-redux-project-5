export interface Itask {
    id: string,
    title: string,
    description: string,
    due_date: string,
    isCompleted: boolean,
    priority: 'high' | 'medium' | 'low'
}

export interface IUser {
    id: string,
    name: string
}
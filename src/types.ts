export interface Itask {
    id: string,
    title: string,
    description: string,
    due_date: string,
    isCOmpleted: boolean,
    priority: 'High' | 'Medium' | 'Low'
}
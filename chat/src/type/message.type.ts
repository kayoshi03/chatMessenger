export interface IMessageType {
    id: number,
    user_id: number,
    message: string,
    files?: string[] | null,
    status: 'sent' | 'read' | "expect",
    date: number
}
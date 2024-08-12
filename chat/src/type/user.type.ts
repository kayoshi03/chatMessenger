export interface IUserType {
    id: number,
    fullName: string,
    position: string | "bot",
    url: string,
    status: "online" | "offline"
}
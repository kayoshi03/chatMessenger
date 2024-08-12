import { create } from 'zustand'
import {IMessageType} from "@/type/message.type";

interface StoreState {
    message: IMessageType[];
    addMessage: (message: IMessageType) => void;
    setMessage: (message: IMessageType[]) => void;
    updateMessage: (id: number, text: string) => void;
    deleteMessage: (id: number) => void;
}

export const useStore = create<StoreState>((set) => ({
    message: [],
    addMessage: (message) =>
        set((state) => {
            const updateMessages = [...state.message, message]
            localStorage.setItem('chatMessages', JSON.stringify(updateMessages));
            return { message: updateMessages };
        }),
    setMessage: (message) =>
        set(() => {
            localStorage.setItem('chatMessages', JSON.stringify(message));
            return { message };
        }),
    updateMessage: (id, text) =>
        set((state) => {
            const arr = state.message.map(item => {
                if(item.id == id) {
                    return {...item, message: text}
                }
                return item
            })
            localStorage.setItem('chatMessages', JSON.stringify(arr));
            return {message: arr}
        }),
    deleteMessage: (id) =>
        set((state) => {
            const updateMessage = state.message.filter(r => r.id !== id)
            localStorage.setItem('chatMessages', JSON.stringify(updateMessage));
            return {message: updateMessage}
        })
}))
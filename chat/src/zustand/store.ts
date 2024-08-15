import { create } from 'zustand'
import {IMessageType} from "@/type/message.type";
import {persist} from "zustand/middleware";

interface StoreState {
    message: IMessageType[];
    addMessage: (message: IMessageType) => void;
    updateMessage: (id: number, text: string) => void;
    deleteMessage: (id: number) => void;
}

export const useMessageStore = create<StoreState>()(
    persist(
        (set, get) => ({
            message: [],
            addMessage: (message) => set({
                message: [...get().message, message]
            }),
            updateMessage: (id, text) => set({
                message: get().message.map(item => {
                    if(item.id == id) {
                        return {...item, message: text}
                    }
                    return item
                })
            }),
            deleteMessage: (id) => set({
                message: get().message.filter(i => i.id !== id)
            })
        }),
        {
            name: "message-storage"
        }
    )
)
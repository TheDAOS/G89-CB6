import { useState } from "react";
import type { ChatType, ChildrenProps } from "../type";
import ChatContext from "./ChatContext";
import { GoogleGenAI } from "@google/genai";

function ChatProvider({ children }: ChildrenProps) {
    const [chats, setChats] = useState<ChatType[]>([
        // {
        //     role: "model",
        //     parts: [{ text: "Hi, I am a large language model, trained by Google." }],
        // },
    ]);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const ai = new GoogleGenAI({ apiKey: apiKey });


    const addChat = async (text: string) => {
        const user: ChatType = { role: "user", parts: [{ text: text }] }
        setChats(oldChat => [...oldChat, user]);

        const response = await message(text);

        if (typeof response === "string") {
            const model: ChatType = {
                role: "model",
                parts: [{ text: response }],
            };
            setChats(oldChat => [...oldChat, model]);
        }
        console.log(chats)
    };

    const gemini = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [],
    });

    async function message(text: string) {
        const response = await gemini.sendMessage({
            message: text,
        });
        console.log(response.text);
        return response.text
    }

    return (
        <ChatContext.Provider value={{ chats, addChat }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider

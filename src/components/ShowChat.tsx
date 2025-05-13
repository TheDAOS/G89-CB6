import { useContext } from "react"
import ChatContext from "../Context/ChatContext"
import type { ChatType } from "../type";
import UserMessage from "./UserMessage";
import ModelMessage from "./ModelMessage";
import { useEffect, useRef } from "react";

function ShowChat() {
    const chats = useContext(ChatContext).chats;
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chats]);

    const chatSplitter = (chat: ChatType) => {
        if (chat.role == "model")
            return <ModelMessage message={chat} />
        else
            return <UserMessage message={chat} />

    }

    return (
        <div className="mb-20">
            {chats.map(chatSplitter)}
            <div ref={endRef} />
        </div>
    )
}
export default ShowChat;
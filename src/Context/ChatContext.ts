import { createContext } from "react";
import type { ChatContextType } from "../type";

const ChatContext = createContext<ChatContextType>({
  chats: [],
  addChat: () => {},
});

export default ChatContext;

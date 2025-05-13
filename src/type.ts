import type { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ChatType {
  role: string;
  parts: [{ text: string }];
}

export interface ChatProp {
  message: ChatType;
}

/*
  {
    role: "model",
    parts: [{ text: "Great to meet you. What would you like to know?" }],
  },
*/

export interface ChatContextType {
  chats: ChatType[];
  addChat: (text: string) => void;
}

export type GeminiType = {
  sendMessage: (args: { message: string }) => Promise<{ text: string }>;
};

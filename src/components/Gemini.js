import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey });

const gemini = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [
        {
            role: "user",
            parts: [{ text: "Hello" }],
        },
        {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
    ],
});

export default gemini;

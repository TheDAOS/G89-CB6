import type { ChatProp } from "../type";
import ReactMarkdown from 'react-markdown';

function UserMessage({ message }: ChatProp) {

    return (
        <div className="w-fit max-w-200 mx-2 bg-davy-400 text-davy-300 rounded-xl p-2 pt-1 ms-auto shadow">
            <div className="font-semibold text-lg mb-2 border-b border-davy-300">You</div>
            {message.parts.map(test => <ReactMarkdown>{test.text}</ReactMarkdown>)}
        </div>
    )
}

export default UserMessage;
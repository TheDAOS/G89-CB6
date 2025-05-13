import { SendHorizontal } from 'lucide-react';
import { useContext, useState } from 'react';
import ChatContext from '../Context/ChatContext';


function ChatInput() {
    const { addChat } = useContext(ChatContext);
    const [text, setText] = useState<string>("");

    const HandleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault()
        if (text === "") return;

        addChat(text)
        setText('')
    }

    return (
        <form
            className="bg-davy-400 w-fit h-fit rounded-full p-1 flex items-center mx-auto m-2 fixed bottom-2 left-0 right-0"
            onSubmit={HandleSubmit}
        >
            <input
                type="text"
                className="outline-0 ms-2 text-davy-300 w-200"
                placeholder="Type Here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                type='submit'
                className='group hover:bg-davy-100 bg-davy-300 rounded-full w-10 h-10 p-1.5 cursor-pointer flex justify-center items-center transform duration-300 ease-in-out shadow'
            >
                <SendHorizontal
                    size={24}
                    className='bg-transparent text-davy-100 fill-davy-100 group-hover:text-davy-300 group-hover:fill-davy-300 transform duration-300 ease-in-out'
                />
            </button>
        </form>
    )
}

export default ChatInput
import ChatInput from "./ChatInput";
import ShowChat from "./ShowChat";

function Chat() {

    return (
        <div className="max-w-300 mx-auto">
            <ShowChat />
            <ChatInput />
        </div>
    )
}

export default Chat;
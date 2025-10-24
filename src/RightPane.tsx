import "./RightPane.css";

import { useState } from "preact/hooks";
import { TextInputAndButton } from "./TextInputAndButton";
import { chatService, ConversationDto } from "./ChatService";
import { MessageCard } from "./MessageCard";
import IconButton from "./IconButton";

export function RightPane({ conversation, onBack }: { conversation?: ConversationDto, onBack?: () => void }) {
    let [message, setMessage] = useState("");
    return <div class="RightPane">
        {!!conversation && <>
            <div class="conversation-header">
                <p>{conversation.name}</p>
                <IconButton  icon="keyboard_double_arrow_left" label="back" onClick={ onBack }
                    type="button" />
            </div>
            <div class="messages">
                {conversation.lastMessages.map(x =>
                    <MessageCard key={x.timeStamp} message={x}
                        own={x.senderId === chatService.inbox.user.id} />)}
            </div>
            <TextInputAndButton value={message} onChange={setMessage}
                buttonIcon="send"
                buttonContent="Send" placeholder="Write a message..."
                onClick={() => {
                    chatService.send({
                        type: "message", channelId: conversation.channelId, referenceTo: 0, contentType:
                            0, content: message
                    });
                    setMessage("");
                }}
            />
        </>}
    </div>
}
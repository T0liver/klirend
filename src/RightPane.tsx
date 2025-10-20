import "./RightPane.css";

import { useState } from "preact/hooks";
import { TextInputAndButton } from "./TextInputAndButton";

export function RightPane() {
    let [message, setMessage] = useState("");
    return <div class="RightPane">
        <div />
        <TextInputAndButton value={message} onChange={setMessage} buttonContent="Send" buttonIcon="send"
            placeholder="Write a message..." />
    </div>
}
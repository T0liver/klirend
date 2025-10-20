import "./LeftPane.css";

import { useState } from "preact/hooks";
import { TextInputAndButton } from "./TextInputAndButton";

export function LeftPane() {
    let [invite, setInvite] = useState("");
    return <div class="LeftPane">
        <TextInputAndButton value={invite} onChange={setInvite} buttonContent="Invite" buttonIcon="person_add"
            placeholder="Tag" />
        <div />
    </div>
}
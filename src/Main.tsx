import "./Main.css";

import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import { useState } from "preact/hooks";
import { ConversationDto } from "./ChatService";

export function Main() {
  const [selected, setSelected] = useState<ConversationDto | undefined>(undefined);

  return (
    <div className={`Main ${selected === undefined ? "left" : "right"}`}>
      <LeftPane selected={selected} onSelect={setSelected} />
      <RightPane conversation={selected} onBack={() => setSelected(undefined)} />
    </div>
  );
}
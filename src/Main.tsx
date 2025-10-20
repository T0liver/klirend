import "./Main.css";

import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";

export function Main() {
    return <div class="Main">
        <LeftPane />
        <RightPane />
    </div>
}
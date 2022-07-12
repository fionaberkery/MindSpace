import React from "react";

import BubbleStage from "./BubbleStage"
import './bubble.css'

const BubbleGame =() =>{

    return(
        <div id="bubble-div">
            <BubbleStage />
        </div>

    )
}

// const rootElement = document.getElementById("root");
// const root = ReactDOMClient.createRoot(rootElement);
// root.render(<BubbleGame />)
export default BubbleGame;


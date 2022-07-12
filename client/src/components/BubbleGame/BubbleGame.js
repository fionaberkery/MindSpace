import React from "react";
import * as ReactDOMClient from 'react-dom/client';
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


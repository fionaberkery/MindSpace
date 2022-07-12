import React, {useEffect, useState } from "react";
import BubblePop from "./BubblePop";
import './bubble.css'


const BubbleStage = ({renderBubbles, bubblesPopped}) => {


    return (
    <div>
        {/* <div className="message">{message}</div> */}
        <audio
            id="pop"
            src="https://uploads.codesandbox.io/uploads/user/e75d21d3-e2a7-4d7a-bd14-09ebe09ee6b0/JMLB-pop.mp3"
        />
        <span className="score">
            Score : {bubblesPopped}  
        </span>
        {renderBubbles()}
    </div>
    );
}

export default BubbleStage;
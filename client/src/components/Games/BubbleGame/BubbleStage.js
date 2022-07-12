import React from "react";
import './bubble.css'


const BubbleStage = ({renderBubbles}) => {


    return (
    <div>
        <audio
            id="pop"
            src="https://uploads.codesandbox.io/uploads/user/e75d21d3-e2a7-4d7a-bd14-09ebe09ee6b0/JMLB-pop.mp3"
        />
        {renderBubbles()}
    </div>
    );
}

export default BubbleStage;
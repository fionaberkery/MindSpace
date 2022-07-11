import React, {useEffect, useState } from "react";
import BubblePop from "./BubblePop";
import './bubble.css'


const BubbleStage = () => {
    const [bubbleCount, setBubbleCount] = useState(150);
    const [bubblesPopped, setBubblesPopped] = useState(0);
    const [ready, setReady] = useState(false);

    const isReady= () =>{
        setReady(true);
    }

    const renderBubbles=()=> {
        const arr = [...Array(bubbleCount)].map((bubble, index) => (
            bubble = <BubblePop key={index} pop={popBubble} style={getBubbleStyle(index)}/>
        ));
        return [...arr];
    }

    const getRandomPosition = () => {
        const x = 100;
        const y = 150;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    const getBubbleStyle =(index)=> {
        const xy = getRandomPosition();
        const styles = {
            left: xy[1] + 10 + "vh",
            top: xy[0] + "vw",
            zIndex: index,
            animation: "float 20s linear infinite both",
            animationDuration: Math.floor(Math.random() * 15 + 7.5) + "s"
        }
        return styles;
    }

    const popBubble =(event)=> {
        event.preventDefault();
        const bubble = event.target;
        const audio = document.getElementById("pop");
        bubble.style.setProperty("animation", "popped .3s ease-out both");
        audio.play();
        setBubblesPopped(bubblesPopped+1);
        setTimeout(function() {
        bubble.style.display = "none";
        }, 500);
    }

    return (
    <div className="stage" id="stage">
        {/* <div className="message">{message}</div> */}
        <audio
            id="pop"
            src="https://uploads.codesandbox.io/uploads/user/e75d21d3-e2a7-4d7a-bd14-09ebe09ee6b0/JMLB-pop.mp3"
        />
        <span className="score">
            Score : {bubblesPopped}  
        </span>
        {ready ? (
            renderBubbles()
        ) : (
            <button className="bubble-btn" onClick={isReady}>Ready</button>
        )}
    </div>
    );
}

export default BubbleStage;
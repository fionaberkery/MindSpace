import React, {useEffect, useState } from "react";
import BubblePop from "./BubblePop";
import './bubble.css'


const BubbleStage = () => {
    const [bubbleCount, setBubbleCount] = useState(10);
    const [bubblesPopped, setBubblesPopped] = useState(0);
    const [ready, setReady] = useState(false);
    // const [randomPosition, setRandomPosition] = useState(null) 
    // const [isBubblePopped, setIsBubblePopped] = useState(false)


  // const bubbleClicked = (event)=> {
  //   setBubbleCount(bubbleCount< 1) ,
  //   setBubblesPopped() >1
  // }

    const init = ()=> {
            console.log("init");
            const bubbles = renderBubbles();
            bubbles.forEach((bubble, index) => {
            console.log(bubble);
            animateBubble(bubble, index);
        })
    }

    const isReady= () =>{
        console.log("ready");
        init();
        setReady(true);
    }

    const renderBubbles=()=> {
        const arr = [...Array(bubbleCount)].map((x, i) => (
            x = <BubblePop key={i} pop={popBubble} />
        ));
        return [...arr];
    }

    const getRandomPosition = () => {
        console.log("random position");
        // const x = document.body.offsetHeight - Element.clientHeight;
        // const y = document.body.offsetWidth - Element.clientWidth;
        const x = 10;
        const y = 10;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    const animateBubble =(bubble, index)=> {
        console.log("animatin bubbles");
        const xy = getRandomPosition();
        console.log(xy);
        const styles = {
        top: xy[0] + "px",
        left: xy[1] + "px",
        zIndex: index,
        animationDuration: Math.floor(Math.random() * 15 + 7.5) + "s"
        }
        console.log(styles);
        Object.assign(bubble, styles); // breaks here, throws Uncaught TypeError: Cannot add property top, object is non-extensible
        bubble.classList.add("animating");
    }

    const popBubble =(e)=> {
        e.preventDefault();
        console.log("poppin");
        const bubble = e.target;
        const audio = document.getElementById("pop");
        bubble.classList.remove("animating");
        bubble.classList.add("popped");
        audio.play();
        setBubblesPopped(bubblesPopped+1);
        window.setTimeout(function() {
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
        <button onClick={isReady}>Ready</button>
        )}
    </div>
    );
}

export default BubbleStage;
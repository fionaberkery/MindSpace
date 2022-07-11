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

    // const init = ()=> {
    //         // console.log("init");
    //         // const bubbles = renderBubbles();
    //         // bubbles.forEach((bubble, index) => {
    //         // console.log(bubble);
    //         // animateBubble(bubble, index);
    //     })
    // }

    const isReady= () =>{
        console.log("ready");
        // init();
        setReady(true);
    }

    const renderBubbles=()=> {
        const arr = [...Array(bubbleCount)].map((x, i) => (
            x = <BubblePop key={i}  pop={popBubble} style={getBubbleStyle(i)}/>
        ));
        return [...arr];
    }

    const getRandomPosition = () => {
        console.log("random position");
        const x = 500;
        const y = 500;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    const getBubbleStyle =(index)=> {
        console.log("animatin bubbles");
        const xy = getRandomPosition();
        console.log(xy);
        const styles = {
        top: xy[0] + "px",
        left: xy[1] + "px",
        zIndex: index,
        animation: "float 12s linear infinite both",
        animationDuration: Math.floor(Math.random() * 15 + 7.5) + "s"
        }
        return styles
        // console.log(styles);
        // Object.assign(bubble, {style :styles}); // breaks here, throws Uncaught TypeError: Cannot add property top, object is non-extensible
        // console.log(bubble.props)
        // bubble.props.style = styles
        // bubble.classList.add("animating");
    }

    const popBubble =(e)=> {
        e.preventDefault();
        console.log("poppin");
        const bubble = e.target;
        console.log(bubble);
        const audio = document.getElementById("pop");
        console.log(bubble.style.display)
        bubble.style.setProperty("animation", "popped 0.3s ease-out both"); //not perfect lol
        // bubble.classList.add("popped");
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
        <button onClick={isReady}>Ready</button>
        )}
    </div>
    );
}

export default BubbleStage;
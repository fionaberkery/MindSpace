import React, {useEffect, useState } from "react";
import BubblePop from "./BubblePop";
import './bubble.css'


const BubbleStage = () => {
    const [bubbleCount, setBubbleCount] = useState(50);
    const [bubblesPopped, setBubblesPopped] = useState(0);
    const [ready, setReady] = useState(false);
    // const [randomPosition, setRandomPosition] = useState(null) 
    // const [isBubblePopped, setIsBubblePopped] = useState(false)
  

  // const bubbleClicked = (event)=> {
  //   setBubbleCount(bubbleCount< 1) ,
  //   setBubblesPopped() >1
  // }


  const init = ()=> {
    const bubbles = document.querySelectorAll(".bubble");
    for (let i = 0; i < bubbles.length; i++) {
      animateBubble(bubbles, i);
    }
  }

  const isReady=() =>{
    setReady({
      ready: true
    });
    init()
    ;
  }

  const renderBubbles=()=> {
    return [...Array(bubbleCount)].map((x, i) => (
      <BubblePop key={i} pop={popBubble} />
    ));
  }

 const getRandomPosition = () => {
    // const x = document.body.offsetHeight - element.clientHeight;
    // const y = document.body.offsetWidth - element.clientWidth;
    const x = .1;
    const y = .2;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }

  const animateBubble=(bubbles, i)=> {
    const bubble = bubbles[i];
    const xy = getRandomPosition(bubble);
  

    Object.assign(bubble.style, {
      top: xy[0] + "px",
      left: xy[1] + "px",
      zIndex: i,
      animationDuration: Math.floor(Math.random() * 15 + 7.5) + "s"
    });

    bubble.classList.add("animating");
  }



  const popBubble =(e)=> {
    e.preventDefault();
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
      <button className="bubble-button" onClick={isReady}>Ready</button>
    )}
  </div>
);
    }


export default BubbleStage;


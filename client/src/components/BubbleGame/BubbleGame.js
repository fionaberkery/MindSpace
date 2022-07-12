import React, {useEffect, useState} from "react";
import BubbleStage from "./BubbleStage";
import BubblePop from "./BubblePop";
import './bubble.css';
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';

const BubbleGame = () => {

    const [bubbleCount, setBubbleCount] = useState(150);
    const [bubblesPopped, setBubblesPopped] = useState(0);
    const [ready, setReady] = useState(false);

    useEffect(()=>{
        console.log("useEffect fire")
        startGame();
    }, [ready])

    const startGame = () => {
        console.log("start game --> render bubbles")
        renderBubbles();
    }

    const isReady= () =>{
        setReady(true);
    }

    const renderBubbles = () => {
        console.log("rendering bubbs")
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

    const getBubbleStyle = (index) => {
        const xy = getRandomPosition();
        const styles = {
            left: xy[1] + 10 + "vh",
            top: xy[0] + "vw",
            zIndex: index,
            // animation: "float 20s linear infinite both",
            animationDuration: Math.floor(Math.random() * 15 + 7.5) + "s"
        }
        return styles;
    }

    const popBubble = (event) => {
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
        <>
            <Helmet>
                <title>Wellbeing - Popping Bubbles</title>
            </Helmet>

            <nav className="games-nav">
                <Link to='/play' className="games-nav--link">Back to Games Selection</Link>
            </nav>

            <div className="stage">
            {ready ? (
                <BubbleStage bubblesPopped={bubblesPopped} renderBubbles={renderBubbles} />
            ) : (
                <button className="bubble-btn" onClick={isReady}>Ready</button>
            )}
            </div>
        </>
    )
}

export default BubbleGame;


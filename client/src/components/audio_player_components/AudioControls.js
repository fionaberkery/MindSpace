import React, { useState, useRef } from "react";
import ControlButtons from "./AudioButtons"

const AudioControls = ({selected, audioData}) => {
    const [audioIndex, setAudioIndex] = useState(0)
    const [audioProgress, setAudioProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    
    const SERVER_ADDRESS= "http://localhost:8080/audiofiles/";

    // The audio element 
    const audioRef = useRef(new Audio(SERVER_ADDRESS+selected.filePath))
    // Reference to set interval timer.
    const intervalRef = useRef()
    // Boolean value determines when particular actions are ready to be run.
    const isReady = useRef(false)

    const { duration } = audioRef.current

    console.log(audioData)

    const onPlayPauseClick = () => {
        !isPlaying ? setIsPlaying(true) : setIsPlaying(false)
    }

    console.log(audioIndex, " << this is selected audioIndex in audioData")

    return(
        <>
            <div className="audioControls">
                <h3>Audio Controls</h3>
                <li>{selected.name}</li>
                {/* <audio crossOrigin="anonymous" src={SERVER_ADDRESS + selected.filePath} controls autoPlay loop></audio> */}
                <ControlButtons
                    isPlaying={isPlaying}
                    // onPreviousClick={previousAudio}
                    // onNextClick={nextAudio}
                    onPlayPauseClick={setIsPlaying}
                />
            </div>
        </>
    )
}

export default AudioControls

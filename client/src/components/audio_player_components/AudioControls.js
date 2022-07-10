import React, { useState } from "react";
import ControlButtons from "./AudioButtons"

const AudioControls = ({selected, audioData}) => {
    const [audioIndex, setAudioIndex] = useState(0)
    const [audioProgress, setAudioProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    
    const SERVER_ADDRESS= "http://localhost:8080/audiofiles/";

    return(
        <>
            <div>
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

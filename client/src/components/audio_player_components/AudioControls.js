import React from "react";
// import selectAudio from '../../data/audio_data/AudioData';

const AudioControls = ({selected}) => {
    
    const SERVER_ADDRESS= "http://localhost:8080/audiofiles/";

    console.log(selected)


    return(
        <>
            <div>
                <h3>Audio Controls</h3>
                <li>{selected.name}</li>
                <audio crossOrigin="anonymous" src={SERVER_ADDRESS + selected.filePath} controls autoPlay loop></audio>
            </div>
        </>
    )
}

export default AudioControls

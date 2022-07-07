import React from "react";
// import selectAudio from '../../data/audio_data/AudioData';
import rain from '../../data/audio_data/RainTest.mp3'

const AudioControls = ({selected}) => {

    return(
        <>
            <div>
                <h3>Audio Controls</h3>
                <li>{selected.file_path}</li>
                <audio src={rain} controls autoPlay loop></audio>
            </div>
        </>
    )
}

export default AudioControls


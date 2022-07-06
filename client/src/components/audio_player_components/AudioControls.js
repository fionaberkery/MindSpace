import React from "react";
// import selectAudio from '../../data/audio_data/AudioData';
import rain from '../../data/audio_data/RainTest.mp3'

const AudioControls = ({selectAudio}) => {

    console.log(selectAudio)

    return(
        <>
            <div>
                <h3>Audio Controls</h3>
                <audio src={rain} controls autoPlay loop></audio>
            </div>
        </>
    )
}

export default AudioControls
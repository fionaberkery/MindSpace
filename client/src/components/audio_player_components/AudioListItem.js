import React from "react";

const AudioListItem = ({audio, onAudioClick}) => {

    const handleAudioClick = () => {
        onAudioClick(audio)
    }



    // const handleAudioChange = (event) => {
    //     onAudioChange(event.target.audio)
    // }

    // value={audio}

    return(

            <option id='audio-list-item' onClick={handleAudioClick}> {audio.name}</option>

    )   
}

export default AudioListItem
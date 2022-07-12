import React from "react";

const AudioListItem = ({audio, onAudioClick}) => {

    const handleAudioClick = () => {
        onAudioClick(audio)
    }

    return(

            <li onClick={handleAudioClick}> {audio.name}</li>

    )   
}

export default AudioListItem
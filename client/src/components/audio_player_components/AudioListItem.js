import React from "react";

const AudioListItem = ({audio, onAudioClick}) => {

    console.log(audio)

    const handleAudioClick = () => {
        onAudioClick(audio)
    }

    return(
        <>
            <h3>AudioListItem</h3>
            <li onClick={handleAudioClick}> {audio.name}</li>
        </> 
    )   
}

export default AudioListItem
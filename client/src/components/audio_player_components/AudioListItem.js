import React from "react";

const AudioListItem = ({audio}) => {

    // const handleAudioClick = () => {
    //     onAudioClick(audio)
    // }

    // onClick={handleAudioClick}

    return(

            <option id='audio-list-item' value={audio}> {audio.name}</option>

    )   
}

export default AudioListItem
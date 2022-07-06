import React from "react";

const AudioListItem = (audioData) => {

    console.log(audioData)
    return(
        <>
            <h3>AudioListItem</h3>
            <li> {audioData.audio.name}</li>
        </> 
    )   
}

export default AudioListItem
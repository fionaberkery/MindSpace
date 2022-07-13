import React from "react";
import ListItemText from '@mui/material/ListItemText';

const AudioListItem = ({audio, onAudioClick}) => {

    const handleAudioClick = () => {
        onAudioClick(audio)
    }



    // const handleAudioChange = (event) => {
    //     onAudioChange(event.target.audio)
    // }

    // value={audio}

    return(

            // <ul onClick={handleAudioClick}> {audio.name}</ul>
            <ListItemText primary={`Item ${audio.name}`} onClick={handleAudioClick}/>


    )   
}

export default AudioListItem
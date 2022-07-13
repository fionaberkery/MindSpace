import React from "react";
import ListItemText from '@mui/material/ListItemText';

const AudioListItem = ({audio, onAudioClick}) => {

    const handleAudioClick = () => {
        onAudioClick(audio)
    }

    return(

            <ListItemText primary={audio.name} onClick={handleAudioClick}/>


    )   
}

export default AudioListItem
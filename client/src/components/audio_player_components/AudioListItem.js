import React from "react";
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider, Typography } from "@mui/material/";

const AudioListItem = ({audio, onAudioClick}) => {

    const handleAudioClick = () => {
        onAudioClick(audio)
    }

    const listItemFont = createTheme({
        typography: {
            fontFamily: [
                'Poppins',
                'serif',
            ].join(','),
        },});

    return(
        <ThemeProvider theme={listItemFont}>
            <Typography>
                <ListItemText primary={audio.name} onClick={handleAudioClick}/>
            </Typography>
        </ThemeProvider>

    )   
}

export default AudioListItem
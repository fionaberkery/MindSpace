import React from "react";
import ListItemText from '@mui/material/ListItemText';
// import { ThemeProvider } from "styled-components";
import { createTheme, ThemeProvider, Typography } from "@mui/material/";

const AudioListItem = ({audio, onAudioClick}) => {

    const handleAudioClick = () => {
        onAudioClick(audio)
    }

    const theme = createTheme({
        typography: {
            fontFamily: [
                "Nunito",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "sans-serif"
            ].join(",")
        }
    });

    const listItemFont = createTheme({
        typography: {
            fontFamily: [
                'Cormorant',
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
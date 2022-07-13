import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


import AudioListItem from './AudioListItem';

const AudioList = ({audioData, onAudioClick}) => {

    const audioList = audioData.map((audio) => {
        return  <AudioListItem 
        audio={audio} 
        key={audio.id} 
        onAudioClick={onAudioClick}
        />
        })


    //     const handleAudioClick = () => {
    //     onAudioClick(audio)
    // }


    return(
        <>
            {/* <h3>AudioList</h3>
                {audioList} */}
    <List
        sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 100,
            '& ul': { padding: 0 },
        }}
        subheader={<li />}
    >
        {
            <ul>
                {/* <ListSubheader>{`I'm sticky ${audio.name}`}</ListSubheader> */}
                {/* {audioData.map((audio) => (
                <ListItem key={`item-${audio.id}-${audio}`}>
                    <ListItemText primary={`Item ${audio.name}`} onClick={() => onAudioClick(audio)}/>
                </ListItem>
                ))} */}
                {audioList} 

            </ul>

        }
    </List>

        </>
    )
}

export default AudioList
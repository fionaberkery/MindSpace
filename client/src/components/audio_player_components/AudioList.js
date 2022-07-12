import React from 'react';

import AudioListItem from './AudioListItem';

const AudioList = ({audioData, onAudioChange}) => {

    const audioList = audioData.map((audio) => {
        return  <AudioListItem 
        audio={audio} 
        key={audio.id} 
        
        />
        })

    const handleAudioSelection = (audioList) => {
        onAudioChange(target.audio)
        console.log(e.target.audio)
    }
    

    return(
        <>
            <h3>AudioList</h3>
            <select name="audio" id="audio-select" onChange={handleAudioSelection}>
            <option value="">Select a Sound</option>{audioList}
            </select>
        </>
    )
}

export default AudioList
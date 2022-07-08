import React from 'react';

import AudioListItem from './AudioListItem';

const AudioList = ({audioData, onAudioClick}) => {

    console.log(audioData)
    const audioList = audioData.map((audio) => {
        return  <AudioListItem 
        audio={audio} 
        key={audio.id} 
        onAudioClick={onAudioClick}/>
        })


    return(
        <>
            <h2>AudioList</h2>
            {audioList}
        </>
    )
}

export default AudioList
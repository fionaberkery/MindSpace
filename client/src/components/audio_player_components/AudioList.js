import React from 'react';

import AudioListItem from './AudioListItem';

const AudioList = ({audioData, onAudioClick}) => {

    const audioList = audioData.map((audio) => {
        return  <AudioListItem 
        audio={audio} 
        key={audio.id} 
        onAudioClick={onAudioClick}
        />
        })



    // onChange={handleAudioSelection}

    return(
        <>
            <h3>AudioList</h3>
            <option value="">Select a Sound</option>{audioList}

        </>
    )
}

export default AudioList
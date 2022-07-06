import React, {useState} from 'react';
import audioData from '../../data/audio_data/AudioData';
// import rain from '../../data/audio_data/RainTest.mp3'

import AudioListItem from './AudioListItem';

const AudioList = () => {

    const audioList = audioData.map((audioData, index) => {
        return  <AudioListItem audio={audioData} key={audioData.id} index={index}/>})


    return(
        <>
            <h2>AudioList</h2>
            {audioList}
            {/* <audio src="/audio/" controls></audio> */}
        </>
    )
}

export default AudioList
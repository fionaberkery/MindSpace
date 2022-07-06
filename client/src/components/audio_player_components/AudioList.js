import React, {useState} from 'react';
import audioData from '../../data/audio_data/audioJson';
// import rain from '../../data/audio_data/RainTest.mp3'

import AudioListItem from './AudioListItem';

const AudioList = ({onAudioClick}) => {

    const audioList = audioData.map((audio) => {
        return  <AudioListItem audio={audio} key={audio.id} onAudioClick={onAudioClick}/>})


    return(
        <>
            <h2>AudioList</h2>
            {audioList}
            {/* <audio src="/audio/" controls></audio> */}
        </>
    )
}

export default AudioList
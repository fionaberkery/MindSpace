import React, { useState, useEffect }  from "react";
import AudioList from '../components/audio_player_components/AudioList';
import AudioControls from "../components/audio_player_components/AudioControls";


const AudioPlayer = () => {
    const [audioData, setAudioData] = useState([])
    const [selected, setSelected] = useState(null)
    

    const getAudioData = () => {
        fetch('http://localhost:8080/audio/')
        .then(res => res.json())
        .then(audioData => setAudioData(audioData))
        .catch(err => console.error);
    }

    useEffect(()=>{
        getAudioData()
    },[])

    const onAudioClick = (audio) => {
        setSelected(audio)
    }

    return(
        <>
            <div>
                <AudioList audioData={audioData} onAudioClick={onAudioClick}/>
            </div>
            <div>
                { selected ? <AudioControls selected = {selected} />: null }
            </div>
        </>
    )
}

export default AudioPlayer
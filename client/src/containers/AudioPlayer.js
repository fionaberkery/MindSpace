import React, { useState, useEffect }  from "react";
import { AudioService } from "../services/Services";
import AudioList from '../components/audio_player_components/AudioList';
import AudioControls from "../components/audio_player_components/AudioControls";


const AudioPlayer = () => {
    const [audioData, setAudioData] = useState([])
    const [selected, setSelected] = useState(null)

    
    useEffect(() => {
        AudioService.getAudios()
        .then(audioData => setAudioData(audioData))
    }, [])

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
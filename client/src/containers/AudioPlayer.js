import React, { useState }  from "react";
import AudioList from "../components/audio_player_components/AudioList";


const AudioPlayer = () => {
    const [audio, setAudio] = useState()
    const [selected, setSelected] = useState()
    

    const onAudioClick = (audio) => {
        setAudio(audio)
    }

    
    return(
        <>
            <div>
                <AudioList/>
            </div>

        </>
    )
}

// {/* <audio src="src/data/audio_data/RainTest.mp3" controls autoPlay/> */}

export default AudioPlayer
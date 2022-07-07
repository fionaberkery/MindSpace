import React, { useState, useEffect }  from "react";
import AudioList from '../components/audio_player_components/AudioList';
import AudioControls from "../components/audio_player_components/AudioControls";
// import audioJson from '../../data/audio_data/audioJson';




const AudioPlayer = () => {
    // const [audioData, setAudioData] = useState([])
    const [selected, setSelected] = useState(null)
    

    // const getAudioData = () => {
    //     setAudioData(audioJson)
    // }

    const getAudioData = () => {
        fetch('src/data/audio_data/audioJson.js')
        .then(res => res.json())
        .then(audioData => setAudioData(audioData))
        .catch(err => console.error);
    }

    // const getAudio=()=>{
    //     fetch('.AudioData.json',
    //         {
    //         headers : { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //             }
    //         }
    //         )
    //         .then(function(res){
    //             console.log(res)
    //             return res.json();
    //         })
    //         .then(function(audioJson) {
    //             console.log(audioJson);
    //             setAudio(audioJson)
    //         });
    //     }

    // useEffect(()=>{
    //     getAudioData()
    // },[])

    const onAudioClick = (audio) => {
        setSelected(audio)
    }

    return(
        <>
            <div>
                <AudioList onAudioClick={onAudioClick}/>
            </div>
            <div>
                { selected ? <AudioControls selected = {selected} />: null }
            </div>

        </>
    )
}

// {/* <audio src="src/data/audio_data/RainTest.mp3" controls autoPlay/> */}

export default AudioPlayer
import React, { useState, useRef, useEffect } from "react";
import AudioButtons from "./AudioButtons"
import "../audio_player_components/AudioControls.css"

const AudioControls = ({
    selected,
    audioIndex,
    onNextClick, 
    onPreviousClick,
    onPlayPauseClick
    }) => {

    // const [audioIndex, setAudioIndex] = useState(0)
    const [audioProgress, setAudioProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    
    const SERVER_ADDRESS= "http://localhost:8080/audiofiles/";

    // The audio element 
    const audioRef = useRef(new Audio(SERVER_ADDRESS+selected.filePath))
    // Reference to set interval timer.
    const intervalRef = useRef()
    // Boolean value determines when particular actions are ready to be run.
    const isReady = useRef(false)

    const handleNextClick = () => {
        onNextClick()
    }

    const handlePreviousClick = () => {
        onPreviousClick()
    }

    const { duration } = audioRef.current

    // console.log(audioData)

    // useEffect(() => {
    //     const audioObjects = audioData.map(audio => audio.id)
    //     setAudioIndex(audioObjects.indexOf(selected.id))
    // })
    // console.log(audioIndex, " << this is selected audioIndex in audioData")


    // const onPlayPauseClick = () => {
    //     !isPlaying ? setIsPlaying(true) : setIsPlaying(false)
    // }

    // const nextAudio = () => {
    //     if (audioIndex < audioData.length - 1) {
    //         setAudioIndex(audioIndex + 1)
    //     } else {
    //         setAudioIndex(0);
    //     }
    // }

    // const previousAudio = () => {
    //     if (audioIndex - 1 < 0) {
    //         setAudioIndex(audioData.length - 1);
    //     } else {
    //         setAudioIndex(audioIndex - 1);
    //     }
    // }


    const startTimer = () => {
        // Clears any timers running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                onNextClick()
            } else {
                setAudioProgress(audioRef.current.currentTime);
            }
        }, [1000])
        }


    // Starts and stops audio when the play/pause button is used.
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
            startTimer();
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    // Pauses audio and clears interval on unmount
    useEffect(() => {
        return () => {
            audioRef.current.pause()
            clearInterval(intervalRef.current)
        }
    }, []);

     // Setup for when changing audio
    useEffect(() => {
        audioRef.current.pause();
    
        audioRef.current = new Audio(SERVER_ADDRESS+selected.filePath);
        setAudioProgress(audioRef.current.currentTime);
    
        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
        // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [audioIndex]);

    //  Handles scrubbing (the progress bar)
    // const onScrub = (value) => {
    //     clearInterval(intervalRef.current) // Clears any timers running
    //     audioRef.current.currentTime = value;
    //     setAudioProgress(audioRef.current.currentTime);
    //     console.log(value + " <<< this is value")
    // }
    
    // const onScrubEnd = () => {
    //     if (!isPlaying) {
    //         setIsPlaying(true);
    //     }
    //         startTimer();
    // }

    // const currentPercentage = duration ? `${(audioProgress / duration) * 100}%` : '0%'
    // const progressStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`

    return(
        <div className="audio-controls">
            <div className="audio-info">
                <p>{selected.name}</p>
                {/* <audio crossOrigin="anonymous" src={SERVER_ADDRESS + selected.filePath} controls autoPlay loop></audio> */}
            </div>
            <AudioButtons 
                isPlaying={isPlaying}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
                // onPlayPauseClick={handlePlayPauseClick}
            />
            {/* <input
                type="range"
                value={audioProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="progress"
                style={{ background: progressStyling }}
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
            /> */}
        </div>
    )
}

export default AudioControls

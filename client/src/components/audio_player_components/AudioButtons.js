import React from "react";
import { default as Play } from "../../static/icons8-play-100.png"
import { default as Pause } from "../../static/icons8-pause-100.png"
import { default as Next } from "../../static/icons8-end-100.png"
import { default as Previous } from "../../static/icons8-skip-to-start-100.png"
import "../audio_player_components/AudioButtons.css"


const ControlButtons = ({ isPlaying, onPlayPauseClick, onNextClick, onPreviousClick }) => (

    <div className="button-controls">
        <button
            className="prev"
            id="buttons"
            onClick={onPreviousClick}
        >
            <img src={Previous} />
        </button>
        {isPlaying ? (
            <button
                className="pause"
                id="buttons"
                onClick={() => onPlayPauseClick(false)}
            >
                <img src={Pause} />
            </button>
        ) : (
            <button
                className="play"
                id="buttons"
                onClick={() => onPlayPauseClick(true)}
            >
                <img src={Play} />
            </button>
        )}
        <button
            className="next"
            id="buttons"
            onClick={onNextClick}
            >
            <img src={Next}/>
        </button>
    </div>

)

export default ControlButtons
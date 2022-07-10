import React from "react";
import { default as Play } from "../../static/icons8-play-100.png"
import { default as Pause } from "../../static/icons8-pause-100.png"
import { default as Next } from "../../static/icons8-end-100.png"
import { default as Previous } from "../../static/icons8-skip-to-start-100.png"
import "../audio_player_components/ControlButtons.css"


const ControlButtons = ({ isPlaying, onPlayPauseClick, onNextClick, onPreviousClick }) => (

    <div className="buttonControls">
        <button
            className="prev"
            onClick={onPreviousClick}
        >
            <img src={Previous} />
        </button>
        {isPlaying ? (
            <button
                className="pause"
                onClick={() => onPlayPauseClick(false)}
            >
                <img src={Pause} />
            </button>
        ) : (
            <button
                className="play"
                onClick={() => onPlayPauseClick(true)}
            >
                <img src={Play} />
            </button>
        )}
        <button
            className="next"
            onClick={onNextClick}
            >
            <img src={Next}/>
        </button>
    </div>

)

export default ControlButtons
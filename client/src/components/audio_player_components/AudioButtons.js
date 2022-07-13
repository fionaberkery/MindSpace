import React from "react";
import { default as Play } from "../../static/play-free-icon-font.svg"
import { default as Pause } from "../../static/pause-free-icon-font.svg"
import { default as Next } from "../../static/forward-free-icon-font.svg"
import { default as Previous } from "../../static/rewind-free-icon-font.svg"
import "../audio_player_components/AudioButtons.css"


const AudioButtons = ({ isPlaying, onPlayPauseClick, onNextClick, onPreviousClick }) => (

    <div className="button-controls">
        <button
            id="buttons"
            onClick={onPreviousClick}
        >
            <img src={Previous} className="prev"/>
        </button>
        {isPlaying ? (
            <button

                id="buttons"
                onClick={() => onPlayPauseClick(false)}
            >
                <img src={Pause} className="pause"/>
            </button>
        ) : (
            <button
                id="buttons"
                onClick={() => onPlayPauseClick(true)}
            >
                <img src={Play} className="play"/>
            </button>
        )}
        <button

            id="buttons"
            onClick={onNextClick}
            >
            <img src={Next} className="next"/>
        </button>
    </div>

)

export default AudioButtons
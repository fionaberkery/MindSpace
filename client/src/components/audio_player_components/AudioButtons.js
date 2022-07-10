import React from "react";
import { default as Play } from "../../static/icons8-play-100.png"
import { default as Pause } from "../../static/icons8-pause-100.png"

const ControlButtons = ({ isPlaying, onPlayPauseClick }) => (
    <div className="control-buttons">
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
    </div>
)

export default ControlButtons
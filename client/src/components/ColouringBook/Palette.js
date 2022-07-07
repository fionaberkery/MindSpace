import React from "react";
import "./colouring.css";

const Palette = ({ setCurrentColour }) => {

    const colours = [
        'WHITE', 'RED', 'BLUE', 'NAVY', 'OLIVE', 'GREEN', 'TEAL', 'LIME', 'YELLOW', 'ORANGE', 'CORAL', 'PINK', 'PURPLE', 'FUCHSIA', 'BROWN', 'MAROON', '#121212'
    ];

    const changeColour = (event) => {
        return setCurrentColour(event.target.outerText);   
    }

    const changeColourPicker = (event) => {
        return setCurrentColour(event.target.value);
    }

    return (
        <div id="colour-box">
            <div id="colour-box--inner" onClick={changeColourPicker}>
                <input id="colour-input" type="color" name="head" />
            </div>
            {colours.map(colour => {
                return <div onClick={changeColour} id="colour-box--inner" style={{ backgroundColor: colour, color: colour }}>{colour}</div>
            })}
        </div>)
}

export default Palette;
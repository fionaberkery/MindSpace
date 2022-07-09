import React from "react";
import "../../static/colouring/colouring.css";

const Palette = ({ setCurrentColour }) => {

    const colours = [
        'WHITE', 'RED', 'BLUE', 'NAVY', 'OLIVE', 'GREEN', 'TEAL', 'LIME', 'YELLOW', 'ORANGE', 'CORAL', 'PINK', 'PURPLE', 'FUCHSIA', 'BROWN', 'MAROON', '#121212'
    ];

    const changeColour = (event) => {
        console.log(event.target.value)
        if(event.target.value !== undefined) {
            return setCurrentColour(event.target.value);
        }
        return setCurrentColour(event.target.textContent);   
    }

    return (
        <div id="colour-palette">
            <div id="colour-palette--inner" onClick={changeColour} onTouchStart={changeColour}>
                <input id="colour-input" type="color" name="head" onChange={changeColour}/>
            </div>
            {colours.map((colour, index) => {
                return <div onClick={changeColour} onTouchStart={changeColour} key={index} id="colour-palette--inner" style={{ backgroundColor: colour, color: colour }}>{colour}</div>
            })}
        </div>)
}

export default Palette;
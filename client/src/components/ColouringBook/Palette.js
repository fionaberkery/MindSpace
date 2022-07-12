import React from "react";
import "../../static/colouring/colouring.css";

const Palette = ({ setCurrentColour , currentColour }) => {

const colours = [
    '#E6D3A3','#F1D6D0', '#FF6961','#CB6852','#E18335', 'CORAL', '#FDCA40', '#BFFFBC', '#98A886', '#629677', '#A7CECB', '#86BBD8', '#2C497F',     '#634B66', '#C4A69D', '#E6E8E6', '#121212', 
]

    const changeColour = (event) => {
        if(event.target.value !== undefined) {
            return setCurrentColour(event.target.value);
        }
        return setCurrentColour(event.target.textContent);   
    }

    return (

        <div id="colour-palette">

            <p>Current colour: </p>
            <div id="current-colour" style={{ background: currentColour }} />
 
            <div id="colour-palette--inner" onClick={changeColour} onTouchStart={changeColour}>

            <input id="custom-colour-input" type="color" name="head" onChange={changeColour}/>

        </div>

        <div onClick={changeColour} onTouchStart={changeColour} key='white' id="colour-palette--inner" style = {{ backgroundColor: "white", color: "white", border: "lightgrey 1px solid"}}>white</div>

            {colours.map((colour, index) => {
                return <div onClick={changeColour} onTouchStart={changeColour} key={index} id="colour-palette--inner" style={{ backgroundColor: colour, color: colour }}>{colour}</div>
            })}

        </div>
    )
}

export default Palette;
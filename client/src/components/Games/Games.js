import {Link} from "react-router-dom"
import React from "react"

function Games(){

    
    return(
        <div className="Games">
            <h3> Games</h3>
            <nav>


            <Link to="/game/Jigsaw"> Jigsaw Puzzles </Link> <br></br>
            <Link to="/game/Bubbles"> Bubble Popping </Link> <br></br>

        </nav>
        </div>
    )
}
export default Games;
import {Link} from "react-router-dom"
import React from "react"

function Games(){

    
    return(
        <div className="Games">
            <h3> Games</h3>
            <nav>


            <Link to="/jigsaw"> Jigsaw Puzzles </Link> <br></br>
            <Link to="/bubbles"> Bubble Popping </Link> <br></br>

        </nav>
        </div>
    )
}
export default Games;
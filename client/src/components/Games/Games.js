import {Link} from "react-router-dom";
import React from "react";
import {Helmet} from 'react-helmet';
import "../../static/games/games.css"


function Games() {

    
    return(
        <div className="games">
            <Helmet>
                <title>Wellbeing - Play</title>
            </Helmet>

            <h3> Games</h3>
            
            <nav className="games-nav">
                <Link to="/jigsaw"> Jigsaw Puzzles </Link> <br/>
                <Link to="/bubbles"> Bubble Popping </Link> <br/>
            </nav>
        </div>
    )
}
export default Games;
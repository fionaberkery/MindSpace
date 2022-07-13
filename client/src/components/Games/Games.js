import {Link} from "react-router-dom"
import React from "react"
import Jigsaw from './jigsaw.jpg'
import B4 from './b4.jpg'
import './gameHome.css'
import {Helmet} from 'react-helmet';

function Games() {

    return(

        <div className="play-home">
        
            <Helmet>
                <title>
                    Wellbeing - Play
                </title>
            </Helmet>

        <div id="play-title">
        <h1> Choose Your Game </h1>
        </div>
        <div className="game-image-container">
            
            <div className="jigsaw-container">
                <img className="jigsaw-imgage" src={Jigsaw} height="600px" width="600px"/>
                <div className="jigsaw-middle">
                    <Link className="jigsaw-text" to="/jigsaw"> JIGSAW </Link>  
                </div>

            </div>

            <div className="bubbles-container">
                <img className="bubbles-imgage" src={B4} height="600px" width="600px"/>
                <div className="bubbles-middle">
                    <Link className="bubbles-text" to="/bubbles"> BUBBLE-POP </Link>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Games;
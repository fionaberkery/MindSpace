import {Link} from "react-router-dom"
import React from "react"
import Jigsaw from './jigsaw.jpg'
import B2 from './b2.jpg'
import B4 from './b4.jpg'
import './gameHome.css'
import {Helmet} from 'react-helmet';
import "../../static/games/games.css"

function Games() {

    return(

        <div className="play-home">

        <div id="play-title">
        <h1> Play </h1>
        </div>
            
            <div className="jigsaw-link">
                <Link to="/jigsaw">  <img id="jigsaw-img" src={Jigsaw} height="600px" width="600px"/></Link>  
            </div>

            <div className="bubble-link">
                <Link to="/bubbles"> <img id="bubble-img" src={B4} height="600px" width="600px"/></Link>
            </div>
        </div>
    )
}
export default Games;
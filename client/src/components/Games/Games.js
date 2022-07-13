import {Link} from "react-router-dom"
import React from "react"
import Jigsaw from './jigsaw.jpg'
import B4 from './b4.jpg'
import './gameHome.css'
import {Helmet} from 'react-helmet';

function Games() {

    return(

        <div>
        
        <Helmet>
            <title>
                Wellbeing - Play
            </title>
        </Helmet>



        <div className="play-container">

            <div className="play-title">
                <h1 id="game-choose"> Choose your game </h1>
            </div>
            
            <div className="game-image-container">
                
                <div className="jigsaw-container">
                    <img className="jigsaw-image" src={Jigsaw} height="600px" width="600px"/>
                    <div className="jigsaw-middle">
                        <Link to="/jigsaw" className="jigsaw-text"> JIGSAW </Link>
                    </div>  
                </div>

                <div className="bubbles-container">
                    <img className="bubbles-image" src={B4} height="600px" width="600px"/>
                    <div className="bubbles-middle">
                        <Link className="bubbles-text" to="/bubbles"> BUBBLE-POP </Link>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default Games;
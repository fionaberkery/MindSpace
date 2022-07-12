import {Link} from "react-router-dom"
import React from "react"
import Jigsaw from './jigsaw.jpg'
import B2 from './b2.jpg'
import B4 from './b4.jpg'
import './gameHome.css'


function Games(){

    
    return(

        <div className="play-home">
            
            <div className="jigsaw-link">
                <Link to="/jigsaw">  <img id="jigsaw-img" src={Jigsaw} height="400px" width="400px"/></Link>  
            </div>

            <div className="bubble-link">
                <Link to="/bubbles"> <img id="bubble-img" src={B2} height="400px" width="400px"/></Link>
            </div>

        </div>
    )
}
export default Games;
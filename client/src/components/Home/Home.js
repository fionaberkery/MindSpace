import React from "react";
import { Link } from "react-router-dom";
import './home.css'
import Breath from '../../static/breathe/snow-leaf.jpg'
import Colour from '../../static/colouring/pencils1.jpg'
import Play from '../Games/jigsaw.jpg'
import Journal from '../../static/journal/11.jpg'



const Home = () => {
{
      return(
          
            
            <>
            <div id="home-page">

            <div className="container">
                  
                  <div className="feature">
                  <img src={Breath} className="feature-img" alt="breath"/>
                        <div className="content">
                              <Link to="/breathe"> Breathe </Link> 
                        </div>
                  </div>


                  <div className="feature">
                  <img src={Colour} className="feature-img" alt="colour"/>
                        <div className="content">
                              <Link to="/colour"> Colour </Link> 
                        </div>
                  </div>

                  <div className="feature">
                  <img src={Play} className="feature-img" alt="play"/>
                        <div className="content">
                              <Link to="/play"> Play </Link> 
                        </div>
                  </div>

                  <div className="feature">
                  <img src={Journal} className="feature-img" alt="journal"/>
                        <div className="content">
                              <Link to="/journal"> Your Journal </Link>
                        </div>
                  </div>

            </div>
            </div>

            </>

      )}
      }
      


export default Home
import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import Breathe from '../../static/breathe/snow-leaf.jpg';
import Colour from '../../static/colouring/pencils1.jpg';
import Play from '../Games/jigsaw.jpg';
import Journal from '../../static/journal/11.jpg';


const Home = () => {

      return (
            <>
                  <div id="home-page">
                        <div className="container">
                              
                              <div className="feature">
                                    <Link className='homepage-link' to="/breathe">
                                          <img src={Breathe} className="feature-img" alt="breath"/>
                                          <div className="content">
                                                <p className="homepage-text">Breathe</p> 
                                          </div>
                                    </Link> 
                              </div>

                              <div className="feature">
                                    <Link to='/colour' className="homepage-link">
                                          <img src={Colour} className="feature-img" alt="colour"/>
                                          <div className="content">
                                                <p className="homepage-text">Colour</p> 
                                          </div>
                                    </Link>
                              </div>

                              <div className="feature">
                                    <Link to='/play' className="homepage-link">
                                          <img src={Play} className="feature-img" alt="play"/>
                                          <div className="content">
                                                <p className="homepage-text">Play</p>
                                          </div>
                                    </Link> 
                              </div>

                              <div className="feature">
                                    <Link to='/journal' className="homepage-link">
                                          <img src={Journal} className="feature-img" alt="journal"/>
                                          <div className="content">
                                                <p className="homepage-text">Journal</p> 
                                          </div>
                                    </Link>
                              </div>

                        </div>
                  </div>

            </>
      )
}
      


export default Home
import {Link} from "react-router-dom"
import React from "react"
import '../../components/NavBar/navBar.css'


const NavBar = ({showModal}) => {

    return(
        <>

            <nav className="navBar">

            <div className="app-name-container">
            
                </div>

                <div className="navbar-links">

                    
                  
                    <Link className="nav-links" to="/breathe"> Breathe </Link> 
                    <Link className="nav-links" to="/colour"> Colour </Link> 
                    <a className="nav-links" onClick={showModal}> Listen </a> 
                    <Link className="nav-links" to="/play"> Play </Link> 
                    <Link className="nav-links" to="/journal"> Journal </Link>
                    
                    <Link className="navbar-app-name" to="/"> MindSpace  </Link> 

                </div>

            </nav>

        </>
    )
}


export default NavBar


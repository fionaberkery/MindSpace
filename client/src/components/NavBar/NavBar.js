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

                    
                    <Link className="nav-links" to="/"> Home </Link> 
                    <Link className="nav-links" to="/breathe"> Breathe </Link> 
                    <Link className="nav-links" to="/colour"> Colour </Link> 
                    <Link className="nav-links" onClick={showModal}> Listen </Link> 
                    <Link className="nav-links"to="/play"> Play </Link> 
                    <Link className="nav-links" to="/journal"> Your Journal </Link>
                    <h1 className="navbar-app-name">Name of App</h1>
                    

                </div>

            </nav>

        </>
    )
}


export default NavBar


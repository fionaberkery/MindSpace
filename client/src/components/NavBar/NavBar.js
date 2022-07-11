import {Link} from "react-router-dom"
import React from "react"


const NavBar = () => {
    return(
        <>

            <nav className="navBar">

                <Link to="/"> Home </Link> 
                <Link to="/breathe"> Breathe </Link> 
                <Link to="/colour"> Colour </Link> 
                <Link to="/listen"> Listen </Link> 
                <Link to="/play"> Game </Link> 
                <Link to="/journal"> Your Journal </Link>

            </nav>

        </>
    )
}


export default NavBar


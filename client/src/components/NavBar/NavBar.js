import {Link} from "react-router-dom"
import React from "react"


const NavBar = ({showModal}) => {

    return(
        <>

            <nav className="navBar">

                <Link to="/"> Home </Link> 
                <Link to="/breathe"> Breathe </Link> 
                <Link to="/colour"> Colour </Link> 
                <a onClick={showModal}> Listen </a> 
                <Link to="/play"> Play </Link> 
                <Link to="/journal"> Your Journal </Link>

            </nav>

        </>
    )
}


export default NavBar


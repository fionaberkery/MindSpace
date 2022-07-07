import {Link} from "react-router-dom"
import React from "react"

const NavBar = () => {
    return(
        <>
        <nav>

            <Link to="/"> Home </Link> <br></br>
            <Link to="/breathe"> Breathe </Link> <br></br>
            <Link to="/colour"> Colour </Link> <br></br>
            <Link to="/journal"> Journal </Link> <br></br>
            <Link to="/listen"> Listen </Link> <br></br>
            <Link to="/game"> Game </Link> <br></br>

        </nav>
        </>
    )
}


export default NavBar


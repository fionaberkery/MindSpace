import {Link} from "react-router-dom"
import React from "react"
import Header from "../Header/Header"

const NavBar = ({setCurrentUserJournalEntries, setCurrentUser, currentUser, savedUsers}) => {
    return(
        <>
        <nav className="navBar">

            <Link to="/"> Home </Link> 
            <Link to="/breathe"> Breathe </Link> 
            <Link to="/colour"> Colour </Link> 
            <Link to="/journal"> Journal </Link> 
            <Link to="/listen"> Listen </Link> 
            <Link to="/game"> Game </Link> 

            <Header setCurrentUserJournalEntries={setCurrentUserJournalEntries} currentUser={currentUser} savedUsers={savedUsers} setCurrentUser={setCurrentUser} />

        </nav>
        </>
    )
}


export default NavBar


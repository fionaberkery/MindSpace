import React from "react";
import {motion} from 'framer-motion'
import './carousel.css'
import './userProfile.css'
import '../../containers/journalLogin.css'
import { Link } from "react-router-dom";

const ProfilePage = ({currentUserJournalEntries}) => {

    return (

        <>
        
        <div className="carousel-profile-page">
        <div className="sub-profile-page">

        <div className="profile-page-header">
            <h1 className="my-journal-title">  My Journal </h1> 
        </div>

        <div className="carousel-div"> 

            <motion.div className="carousel">
                <motion.div layoutScroll style={{ overflow: "scroll"}} className="inner-carousel">
                    {currentUserJournalEntries.map(entry => {
                    return (
                        <motion.div className="carousel-entry" >
                        <div>{entry.date}</div>
                        <div>{entry.textInput}</div>
                        <div> <button className="delete-button"> Delete </button>
                        </div>
                        </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            </div>
            <br></br>

            <button className="new-entry-button" id="button-position" > <Link className="link" to="/create"> New journal entry </Link></button>
            <button className="logout-button" id="login-button-id" > <Link to="/home" className="link" > Log out </Link> </button>
            <br></br>
            <br></br>

        </div>
        </div>
        </>
    )
}

export default ProfilePage



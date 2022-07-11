import React from "react";
import {motion} from 'framer-motion'
import './carousel.css'
import './userProfile.css'
import { Link } from "react-router-dom";

const ProfilePage = ({currentUserJournalEntries}) => {

    return (

        <>
        
        <div className="carousel-profile-page">
        <div className="sub-profile-page">

        <div className="profile-page-header">
            <h1 className="my-journal-title">  My Journal </h1> 
            <button> <Link to="/home"> Log out </Link> </button>
            <button> <Link to="/create"> New journal entry </Link></button>     
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
        </div>
        </div>
        </>
    )
}

export default ProfilePage



import React from "react";
import UserJournalEntry from "./UserJournalEntry";
import { Link } from "react-router-dom";
import './userProfile.css'



const ProfilePage = ({currentUserJournalEntries, currentUser, deleteUserJournalEntry}) => {

    const textInputs = currentUserJournalEntries.map(entry => {
        return <UserJournalEntry deleteUserJournalEntry={deleteUserJournalEntry} entry={entry}/>
    }) 



    return (

        <>
        <div className="profile-page">
        
            <h1>  Profile </h1> 

            <button> <Link to="/home"> Log out </Link> </button>

            <button> <Link to="/create"> New journal entry </Link></button>

            <div className="entry-container">
                <p>
                    {textInputs}
                </p>
            </div>
                    
        </div>
        </>
    )
}

export default ProfilePage
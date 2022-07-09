import React from "react";
import UserJournalEntry from "./UserJournalEntry";
import { Link } from "react-router-dom";


const ProfilePage = ({currentUserJournalEntries, currentUser}) => {

    const textInputs = currentUserJournalEntries.map(entry => {
        return <UserJournalEntry entry={entry}/>
    })



    return (

        <>
            <h2>  Profile </h2> 

            <button> Edit Profile </button>

            <button> <Link to="/home"> Log out </Link> </button>

            <button> <Link to="/create"> New journal entry </Link></button>

                <p>
                    {textInputs}
                </p>
                    
        </>
    )
}

export default ProfilePage
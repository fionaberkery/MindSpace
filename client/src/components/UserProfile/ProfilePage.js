import React from "react";
import { Link } from "react-router-dom";


const ProfilePage = ({currentUserJournalEntries}) => {

    console.log(currentUserJournalEntries)

    return (

        <>
        <h2>profile page</h2> 

        {currentUserJournalEntries.date}
        {currentUserJournalEntries.textInput}


        </>
    )
}

export default ProfilePage
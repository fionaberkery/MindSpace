import React from "react";
import { Link } from "react-router-dom";


const ProfilePage = ({currentUserJournalEntries, currentUser}) => {

    console.log(currentUser.journalEntries[0].date)

    return (

        <>
        <h2>profile page</h2> 

            {currentUser.journalEntries[0].date}
        {/* {currentUser.journalEntries} */}
        {/* {currentUser.journalEntries.textInput} */}


        </>
    )
}

export default ProfilePage
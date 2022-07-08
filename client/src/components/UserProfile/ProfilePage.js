import React from "react";
import { Link } from "react-router-dom";


const ProfilePage = ({currentUserJournalEntries, currentUser}) => {

    console.log(currentUser.journalEntries[0].date)

    return (

        <>
        <h2>profile page</h2> 
            <p>
            {currentUser.journalEntries[0].date} <br></br>
            {currentUser.journalEntries[0].textInput}
            </p>
        {/* {currentUser.journalEntries} */}
        {/* {currentUser.journalEntries.textInput} */}


        </>
    )
}

export default ProfilePage
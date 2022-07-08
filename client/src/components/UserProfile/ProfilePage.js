import React from "react";
import UserJournalEntry from "./UserJournalEntry";


const ProfilePage = ({currentUserJournalEntries, currentUser}) => {

    const textInputs = currentUserJournalEntries.map(entry => {
        
        return <UserJournalEntry entry={entry} />
    })

    // const oneEntry = "Date : " + entry.date + "Note : " + entry.textInput


    return (

        <>
        <h2>profile page</h2> 
            <p>

            
                {textInputs}
            
            </p>


        {/* {currentUser.journalEntries} */}
        {/* {currentUser.journalEntries.textInput} */}


        </>
    )
}

export default ProfilePage
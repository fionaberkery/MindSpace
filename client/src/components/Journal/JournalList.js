import React from "react";
import JournalEntry from "./JournalEntry";


const JournalList = ({savedJournalEntries, savedUsers, setCurrentUserJournalEntries, currentUserJournalEntries}) => {

    const entriesList = savedJournalEntries.map((journalEntry, index) => {
        return <JournalEntry journalEntry={journalEntry} index={index} />
    })

    return (

        <>

            {entriesList}

        </>
    )
}

export default JournalList

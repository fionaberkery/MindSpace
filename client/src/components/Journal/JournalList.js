import React from "react";
import JournalEntry from "./JournalEntry";
import JournalEntryDetail from "./JournalEntryDetail";

const JournalList = ({journalEntries, newEntry, selectedJournalEntry, onJournalEntryClick}) => {

    const entriesList = journalEntries.map((journalEntry, index) => {
        return <JournalEntry journalEntry={journalEntry} index={index} onJournalEntryClick={onJournalEntryClick} />
    })


    let componentToShow
    if (selectedJournalEntry) {
        componentToShow = <JournalEntryDetail selectedJournalEntry={selectedJournalEntry} />
        // this will show the note selected 
    }
    else {
        return entriesList
        // this will show all the entries
    }

    return (

        <>

            {componentToShow}

        </>
    )
}

export default JournalList

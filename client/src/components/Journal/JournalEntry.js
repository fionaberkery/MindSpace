import React from "react";

const JournalEntry = ({journalEntry, onJournalEntryClick}) => {

    const handleClick = () => {
        onJournalEntryClick(selectedEntry)
    }

    return(

        <>

        <div>

            <p onClick={handleClick}> 
                {journalEntry.textInput} <br/>
                {journalEntry.date}
            </p>
        
        </div>

        </>
    )
}

export default JournalEntry



import React from "react";

const JournalEntry = ({journalEntry}) => {

 
    return(

        <>

        <div>

            <p> 
                {journalEntry.textInput} <br/>
                {journalEntry.date}
                
            </p>
        
        </div>

        </>
    )
}

export default JournalEntry



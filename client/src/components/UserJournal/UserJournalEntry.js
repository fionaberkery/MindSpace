import React from "react";

const UserJournalEntry = ({entry}) => {

    return (

        <>

            <h5> Date : </h5> 
            <p> {entry.date} </p>
            
            <h5> Journal Entry </h5> 
            <p> {entry.textInput} </p>

            <button> Delete </button>
            
            <button> Edit </button>

            <hr></hr>

        </>
    )
}

export default UserJournalEntry
import React from "react";

const UserJournalEntry = ({entry, deleteUserJournalEntry}) => {

    // const handleDelete = () => {
    //     deleteUserJournalEntry(entry.id)
    // }

    return (

        <>

            <h5> Date : </h5> 
            <p> {entry.date} </p>
            
            <h5> Journal Entry </h5> 
            <p> {entry.textInput} </p>

            <button> Delete Entry </button>
            
            

            <hr></hr>

        </>
    )
}

export default UserJournalEntry
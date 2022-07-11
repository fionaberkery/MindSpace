import React from "react";
import './userProfile.css'

const UserJournalEntry = ({entry}) => {

    // const handleDelete = () => {
    //     deleteUserJournalEntry(entry.id)
    // }

    return (

        <>

                <div className="journal-entry">

                    <div className="entry-text">
                        <p id="title">  Journal Entry : {entry.date} </p> 
                        <p> {entry.textInput} </p>
                    </div>

                    <div>
                        <button className="delete-button"> <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" height="20px" /> </button>
                    </div>
                
                </div>

                <br></br>

        </>
    )
}

export default UserJournalEntry
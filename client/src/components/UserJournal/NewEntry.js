import React, {useState} from "react";
import { Link } from "react-router-dom";
import './newEntry.css'


const NewEntry = ({addNewJournalEntry, currentUser}) => {

    const [textField, setTextField] = useState()
    const [textInput, setTextInput] = useState("")
    const [date, setDate] = useState("")
    const [buttonTextJournal, setButtonTextJournal] = useState("Save New Entry")

    const handleSubmit = (event) => {
        event.preventDefault()
        const newEntry = {
            "date" : date,
            "textInput" : textInput,
            "user" : currentUser
        }
        addNewJournalEntry(newEntry)
        setDate("")
        event.target.reset()
        setButtonTextJournal("New entry complete")
    }

    const handleDateInput = (event) => {
        setDate(event.target.value)
    }

    const handleTextInput = (event) => {
        setTextInput(event.target.value)
    }

    const handleDiscardClick = () => {
        setTextField("")
    }

    return (

        <>

        <div className="new-entry">

            <h2> New Journal Entry </h2>

            <div className="entry-form">
            <form onSubmit={handleSubmit}>
                <br></br>
                <label> Date : </label>
                <input onChange={handleDateInput} type="text" placeholder="DD-MM-YY" required>
                </input>
                <br></br><br></br>
 
                <textarea value={textField} placeholder="Enter your text here" onChange={handleTextInput} required />
            
                <input type="submit" value={buttonTextJournal} className="save-button" />       
        
            </form>
            <button onClick={handleDiscardClick} className="discard-button"> <img src="https://img.icons8.com/material-rounded/24/000000/delete-message--v1.png" height="20px" /> </button>
            <p className="hide" > delete </p>
            </div>

            
            
           

            <button> <Link to="/profile"> Return to profile </Link> </button>

        </div>

        </>
    )
}

export default NewEntry
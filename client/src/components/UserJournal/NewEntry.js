import React, {useState} from "react";
import { Link } from "react-router-dom";
import './journal.css'


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

            <h2> this is a new entry </h2>

            <form onSubmit={handleSubmit}>
                
                <label> Date : </label>
                <input onChange={handleDateInput} type="text" placeholder="DD-MM-YY" required>
                </input>

                <label> Journal Entry </label> 
                <input type="text" value={textField} placeholder="Enter your text here" onChange={handleTextInput} required />
            
                <input type="submit" value={buttonTextJournal} />       
        
            </form>

            
            
            <button onClick={handleDiscardClick}> Discard </button>

            <button> <Link to="/profile"> Return to profile </Link> </button>

        </>
    )
}

export default NewEntry
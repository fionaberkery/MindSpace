import React, {useState} from "react";
import { Link } from "react-router-dom";
import './userProfile.css'
import { Helmet } from "react-helmet";



const NewEntry = ({addNewJournalEntry, currentUser, setCurrentUser}) => {

    const [textField, setTextField] = useState()
    const [textInput, setTextInput] = useState("")
    const [date, setDate] = useState("")
    const [buttonTextJournal, setButtonTextJournal] = useState("Save")

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
        setButtonTextJournal("New entry saved")
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
            <Helmet>
                <title>
                    Wellbeing - New Journal Entry
                </title>
            </Helmet>

        <div className="new-entry-page">
        <div className="sub-new-entry-page">

            <h2 className="my-journal-title" > New Journal Entry </h2>

            <div className="entry-form">
                <div className="sub-entry-form">
                    <form onSubmit={handleSubmit}>
                        <br></br>
                        <label> Date : </label>
                        <input onChange={handleDateInput} type="text" placeholder="DD-MM-YY" required>
                        </input>
                        <br></br><br></br>
                        
                        <textarea cols="70" rows="17" value={textField} placeholder="Enter your text here" onChange={handleTextInput} required />
                    
                        <div className="save-flex">
                        <input type="submit" value={buttonTextJournal} className="save-button" /> 
                        </div>      
                    </form>
                    <button onClick={handleDiscardClick} className="discard-button"> <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" height="20px"/> </button>
                    </div>
                </div>

                <div className="flex-return-button">
                    <button className="return-button" > <Link className="link" to="/profile"> Return to profile </Link> </button>
                </div>

        </div>
        </div>
        </>
    )
}

export default NewEntry
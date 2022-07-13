import React, {useState} from "react";
import { Link } from "react-router-dom";
import './userProfile.css'
import { Helmet } from "react-helmet";



const NewEntry = ({addNewJournalEntry, currentUser, setCurrentUser}) => {

    const [textField, setTextField] = useState()
    const [textInput, setTextInput] = useState("")
    const [date, setDate] = useState("")
    const [buttonTextJournal, setButtonTextJournal] = useState("Save")
    const [randomPrompt, setRandomPrompt] = useState("")

    const journalPrompts = [
        "Write about 5 things you are grateful for?",
        "What's the best thing that happened today?",
        "What are you most stressful about at the moment?",
        "What is your favourite memory?",
        "What do you wish you could tell your younger self?",
        "What is the biggest lesson you have learnt this week?",
        "What are 3 things that make you happy?"
    ]

    const getRandomIndex = (array) => {
        return Math.floor(Math.random() * array.length)
    }

    
    const getRandomString = () => {
        setRandomPrompt(journalPrompts[getRandomIndex(journalPrompts)])
    }

    const handlePrompt = () => {
        return getRandomString()
}


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


            <nav className="return-button">
                <Link className="return-link" to="/profile"> <p> &#8592; Return to profile </p> </Link> 
            </nav>

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

                    <div className="random-prompt-container">
                    <div className="prompt-button-container">
                    <button className="prompt-button" onClick={handlePrompt} > prompt </button>
                    </div>
                    <p className="prompt-text" > {randomPrompt} </p>
                </div>

                </div>

           

                

        </div>
        </div>
        </>
    )
}

export default NewEntry
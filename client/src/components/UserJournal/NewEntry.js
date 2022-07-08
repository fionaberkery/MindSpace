import React, {useState} from "react";
import './journal.css'


const NewEntry = ({addNewJournalEntry}) => {

    const [textField, setTextField] = useState()

    const handleSubmit = () => {

    }

    // const handleItemInput = () => {

    // }

    const handleDiscardClick = () => {
        setTextField("")
    }

    return (

        <>

            <h2> this is a new entry </h2>

            <form onSubmit={handleSubmit}>
                <textarea name="data" rows="30" cols="50" value={textField} />
            
                <input type="submit" value="Save New Item" />       
            </form>

            
            <button onClick={handleDiscardClick}> Discard </button>

        </>
    )
}

export default NewEntry
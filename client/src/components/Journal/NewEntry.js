import React from "react";


const NewEntry = () => {

    const handleSubmit = () => {

    }

    const handleItemInput = () => {

    }

    return (

        <>

        <h2> this is a new entry </h2>

        <form onSubmit={handleSubmit}>
            <textarea rows="10" cols="50" onChange={handleItemInput}/>
            <br/>   
            <input type="submit" value="Save New Item" />       
        </form>

        
        <button> Discard </button>

        </>
    )
}

export default NewEntry
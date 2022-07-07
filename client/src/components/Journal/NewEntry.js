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
        {/*  textarea     */}
        <input type="text" onChange={handleItemInput} />   
        <input type="submit" value="Save New Item" />       
        </form>

        
        <button> Discard </button>

        </>
    )
}

export default NewEntry
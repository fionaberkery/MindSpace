import React from 'react'
import {Link} from 'react-router-dom'

const JournalContainer = () => {

    return (

        <>
            <h2> Journal </h2>

            <button><Link to="/create"> Create new journal entry </Link></button>
        
           

            </>

    )
}

export default JournalContainer
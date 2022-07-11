import React, {useRef} from "react";
import './userProfile.css'
import {motion} from "framer-motion"


const UserJournalEntry = ({entry}) => {

    const carousel = useRef()

    return (

        <>

                <motion.div className="carousel">

                    <motion.div layoutScroll className="inner-carousel">
                    <motion.div className="carousel-item">
                        <p id="title">  Journal Entry : {entry.date} </p> 
                        <p> {entry.textInput} </p>
                        </motion.div>
                    </motion.div>

                
            
                </motion.div>
                
        </>
    )
}

export default UserJournalEntry




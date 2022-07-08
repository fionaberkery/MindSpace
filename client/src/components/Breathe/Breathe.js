import React,{useState, useEffect, useRef} from "react";
import './breathe.css'



const Breathe = () => {


    const [currentWord, setCurrentWord]= useState(true)


    setTimeout (()=>{
        setCurrentWord (!currentWord);
    }, 9200)



    return(
        <>
    
        <section className="breathe-container">

            <div className="circle-container">
        
                <div className="circle"> 
                    <div className="word-container">
                       { currentWord ? <p className="word">Breathe In </p> : <p className="word">Breathe Out </p> }
                    </div>
                </div>

                <div className="pointer-container">
                    <div className="pointer"></div>
                </div>
                
                <div className="gradient-circle"></div>
            </div>
        </section>
        </>
    )
}

export default Breathe



//4 divs
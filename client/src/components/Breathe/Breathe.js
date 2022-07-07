import React,{useState, useEffect} from "react";
import './breathe.css'



const Breathe = () => {

    const wordsList = ["Breathe In", "Hold", "Breathe Out"]

    const [currentWord, setCurrentWord]= useState(wordsList[0])


    // const wordAnimation = () => {
        
    // }

    // const [word, setWord]= useState("Breathe In")

    // const totalTime = 18400
    // const breatheTime = (totalTime/5) * 2
    // const holdTime = totalTime/5

    // useEffect(() => {
    //     return console.log("Word is changing")
    //   }, [word]);



    //     const wordAnimation = () => {

    //     setTimeout(()=>{
    //         setWord("Hold")

    //         setTimeout(()=>{
    //             setWord("Breathe Out")
    //         }, holdTime)
    //     }, breatheTime)

    // }

    // setInterval(wordAnimation, totalTime)


    return(
        <>

        <div className="breathe-container">

        <div className="circle-container">

            <div className="circle">{currentWord}</div>
            
                <div className="pointer-container">
                    <div className="pointer"></div>
                </div>
                
            <div className="gradient-circle"></div>

        </div>

        </div>
        
        </>
    )

}


export default Breathe



//4 divs
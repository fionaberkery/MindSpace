import React,{useState, useEffect} from "react";
import './breathe.css'



const Breathe = () => {

   

    const [currentWord, setCurrentWord]= useState("Breathe In")

  


    const totalTime = 18400
    const breatheTime = (totalTime/5) * 2
    const holdTime = totalTime/5

    useEffect(() => {
        return console.log("Word is changing", 4000)
      }, [currentWord]);

        const wordAnimation = () => {

        setTimeout(()=>{

            
            setCurrentWord("Hold",)

            setTimeout(()=>{
                setCurrentWord("Breathe Out")
            }, holdTime)
        }, breatheTime)
    }

    setInterval(wordAnimation, totalTime)


    return(
        <>
    
        <div className="breathe-container">
        
        <div className="circle-container">
        
            <div className="circle"> 
            <div className="word">{currentWord}</div>
            </div>

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
import React from "react";
import '../css/breathe.css'


const Breathe = () => {

//     const container = document.querySelector('circle-container')

//     const totalTime = 7500
//     const breatheTime =(totalTime/5) * 2
//     const holdTime = totalTime/5

// breatheAnimation()

//     function breatheAnimation () {
//         // Text.innerHTML = 'Breathe In'
//         container.className = 'circle-container grow'

//         setTimeout(()=>{
//             // Text.innerText = 'Hold'

//             setTimeout(()=>{
//                 // Text.innerText = 'Breathe Out'
//                 container.className = 'circle-container shrink'

//             }, holdTime)

//         }, breatheTime)

//     }

//     setInterval(breatheAnimation, totalTime)

    return(
        <>

        <div className="circle-container">

            <div className="circle"></div>

                <p id="text"></p>

                <div className="pointer-container">
                    <div className="pointer"></div>
                </div>

            <div className="gradient-circle"></div>
       
        </div>
        
        </>
    )

}


export default Breathe



//4 divs
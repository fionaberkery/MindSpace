
import React,{useState, useEffect, createContext} from "react";
import ReactSwitch from "react-switch";
import './breathe.css'

export const ThemeContext = createContext(null)

const Breathe = () => {

    const [currentWord, setCurrentWord]= useState(true)

    setTimeout (()=>{
        setCurrentWord (!currentWord);
    }, 7000)


    const [theme,setTheme] = useState('light')

    const toggleTheme = () =>{
        setTheme((current) => (current === 'light' ? 'dark' : 'light'))
    }

    return(
        <>

        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <section className="breathe-container" id={theme}>

            <label> {theme === 'light' ? "Breathe in the sky" : "Breathe in the Forrest"} </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
            
                <div className="circle-container">
        
                    <div className="circle"> 
                        <div className="word-container">
                            { currentWord ? <p className="word"> Breathe In </p> : <p className="word"> Breathe Out </p> }
                        </div>
                    </div>

                    <div className="pointer-container">
                        <div className="pointer"></div>
                    </div>
                
                    <div className="gradient-circle"></div>
                </div>
            </section>
        </ThemeContext.Provider>

        </>
    )
}

export default Breathe

// const colours = [
//     '#E6E8E6', 'RED', '#86BBD8', '#2C497F', '#629677', '#98A886', 'TEAL', '#BFFFBC', '#FDCA40', '#E18335', 'CORAL', '#C4A69D', '#634B66', 'FUCHSIA', '#E6D3A3', 'MAROON', '#121212'

// ]

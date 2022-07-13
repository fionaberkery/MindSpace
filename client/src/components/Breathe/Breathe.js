import React,{useState, createContext} from "react";
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

            <div className="toggle">
            
            <label> {theme === 'light' ? "Earth Mode" : "Water Mode"} </label>
            
            <label className="switch">
                <input onChange={toggleTheme} checked={theme === "light"} type="checkbox" />
                <span className="slider round"></span>
            </label>

            </div>

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


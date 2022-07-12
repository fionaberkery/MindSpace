import React, {useState} from "react";
import { Link } from "react-router-dom";

const NewProfile = ({addNewUser, onUserSelected}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [buttonTextProfile, setButtonTextProfile] = useState("Save")
    const [componentToShow, setComponentToShow] = useState(false)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            "name" : name,
            "email" : email,
            "password" : password
        }
        addNewUser(newUser)
        setName("")
        setEmail("")
        setPassword("")
        event.target.reset()
        onUserSelected(newUser)
        setButtonTextProfile("New Profile Successfully Created!")
        setComponentToShow(true)
    }


    return (

        <>
        <div className="new-profile">
        <div className="sub-new-profile">

            <form onSubmit={handleSubmit} > 
                    <input type="text" placeholder="Enter name" onChange={handleNameChange} required />
            
                    <input type="text" placeholder="Enter email" onChange={handleEmailChange} required />

                    <input type="text" placeholder="Create password" onChange={handlePasswordChange} required />

                    <input type="submit" value={buttonTextProfile}/>
                </form>

                {componentToShow ? <button> <Link to="/journal"> Return to log in</Link> </button> : null}
        </div>
        </div>

        </>
    )
}

export default NewProfile
import React, {useState} from "react";
import { Link } from "react-router-dom";
import './journalLogin.css'

const UserProfileContainer = ({onUserSelected, savedUsers}) => {

    const usersList = savedUsers.map((user, index) =>{
        return<option value={index} key={index} > {user.name} </option> 
    })

    const handleChange = function(event){
        const chosenUser = savedUsers[event.target.value]
        onUserSelected(chosenUser)
    }

    return (

        <>

        <div className="login-page">
            <div className="sub-login-page">
            
                <div className="login-title">
                    <h2> Journal Login </h2>
                </div>   
                
                <div className="login-boxes">
                    <select onChange={handleChange}>
                        <option id="option-tag">  👤 user </option>
                        {usersList}
                    </select>
                    <br></br>
                        
                    <input type="password" placeholder="🔒 password"/> 
                    
                    <div id="login-options">
                    <p id="p">
                    <a href="" className="forgot-password"> Forgot password? </a> or <Link to="/newprofile" className="forgot-password"> Create new profile</Link> 
                    </p>
                    </div>

                    <button className="login-button"> 
                        <Link to="/profile" className="link">Login</Link> 
                    </button>
                </div>
                
                <br></br>

                <p> Or login using </p>
                <div className="icons">
                    <a href="https://accounts.google.com/ServiceLogin/identifier?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" > <img className="google-icon" src="https://img.icons8.com/color/48/000000/google-logo.png" height="30px" /> </a>
                    <a href="https://www.icloud.com/" > <img className="apple-icon" src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" height="30px"/> </a>
                    <a href="https://www.facebook.com/"> <img className="fb-icon" src="https://img.icons8.com/color/48/000000/facebook-new.png" height="32px"/> </a>
                </div>

            </div>
        </div>


        </>
    )
}

export default UserProfileContainer


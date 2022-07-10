import React, {useState} from "react";
import { Link } from "react-router-dom";

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
            
            <h2> Login to open your journal </h2>
                
                <select onChange={handleChange}>
                    <option> Select User </option>
                    {usersList}
                </select>
                        
                <input type="text" placeholder="password"/>
                
                <a href="" id="forgot-password"> Forgot password </a> 

                <button> 
                    <Link to="/profile">Login</Link> 
                </button>
                
                <hr></hr>
            
                <h2> Want to start a new journal? </h2>
                <button> <Link to="/newprofile">Create new profile here</Link> </button>

                <hr></hr>

                <h3> Journal without logging in </h3>

                <button><Link to="/create"> Create new journal entry </Link></button>

        </>
    )
}

export default UserProfileContainer

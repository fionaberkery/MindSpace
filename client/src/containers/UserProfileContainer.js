import React from "react";
import { Link } from "react-router-dom";
import { UserJournalEntriesService } from "../services/Services";

const UserProfileContainer = ({user, setUser, savedUsers, setCurrentUserJournalEntries, setCurrentUser
}) => {

    const usersList = savedUsers.map((user, index) =>{
        return<option value={index} key={index} > {user.name} </option> 

    })

        const handleClick = (event) => {
            

        }


    const handleNameInput = (event) => {
    setUser(event.target.value.id)
    }

    const handleChange = function(event){
        const chosenUser = savedUsers[event.target.value]
        onUserSelected(chosenUser)
    }

    const onUserSelected = function(user){
        setCurrentUser(user)
        setCurrentUserJournalEntries(user.journalEntries)
    }

    return (

        <>
            
            <p> Welcome back, login below </p>
                
                
                <select onChange={handleChange}>
                    <option > Select Previous User </option>
                    {usersList}
                </select>

                <Link to="/profile">Login</Link> 

            
        </>
    )
}

export default UserProfileContainer

 {/* <br></br><br></br>
                    <b><label> Password </label></b><br></br>            
                    <input type="text"/><br></br><br></br>                     */}

                          {/* <a href="" id="forgot-password"> Forgot password </a>< */}
               
                        //   <input onChange={handleNameInput} type="text" value={user}/> 
              
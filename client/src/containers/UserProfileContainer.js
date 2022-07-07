import React from "react";
import { Link } from "react-router-dom";

const UserProfileContainer = ({currentUser, setCurrentUser, savedUsers, setCurrentUserJournalEntries
}) => {

    const usersList = savedUsers.map((user, index) =>{
        return<option value={index} key={index} > {user.name} </option> 

    })

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



            

            <div id="check-out-page">
    
            

            <div id="sign-in-form">
           
                <p> Welcome back, login below </p>
                <form>
                    <b><label> Username </label></b><br></br>
                    <select defaultValue="" onChange={handleChange}>
                <option> Select Previous User </option>

                {usersList}
            </select>
                    <input type="text"/><br></br><br></br>
                    <b><label> Password </label></b><br></br>            
                    <input type="text"/><br></br><br></br>                    
                </form>
                <a href="" id="forgot-password"> Forgot password </a><br></br><br></br>
                <button><Link to="/profile" > Log in </Link></button>
            </div>
         


            </div>
        

            

        </>
    )
}

export default UserProfileContainer
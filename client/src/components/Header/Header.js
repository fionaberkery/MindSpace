import React from "react";

const Header = ({currentUser, setCurrentUser, savedUsers, setCurrentUserJournalEntries }) => {

    const usersList = savedUsers.map((user, index) =>{
        return<option value={index} key={index}>{user.name}</option>
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

            <select defaultValue="" onChange={handleChange} className="drop-down" >
                <option value="" selected> Select User </option>
            {usersList}
            </select>


        </>
    )
}

export default Header
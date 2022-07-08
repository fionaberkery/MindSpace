import React from "react";
import { Link } from "react-router-dom";


const ProfilePage = () => {

    return (

        <>
           <h2>profile page</h2> 

           <button><Link to="/journalEntries" > View and edit all your previous journal entries </Link></button>


        </>
    )
}

export default ProfilePage
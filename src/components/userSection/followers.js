import React from 'react'
import UpdatePics from "./updatePics";
import UserNavbarSetion from "./usernavbar";

const Followers = () => {
    return (
        <div>
            <UpdatePics />
            <UserNavbarSetion />
            <h1 className="wrapper user-heading">Followers</h1>    
        </div>
    )
}

export default Followers
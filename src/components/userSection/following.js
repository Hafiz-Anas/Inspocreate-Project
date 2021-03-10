import React from 'react'
import UpdatePics from "./updatePics";
import UserNavbarSetion from "./usernavbar";


const Following = () => {
    return (
        <div> 
            <UpdatePics />
            <UserNavbarSetion />
            <h1 className="wrapper user-heading">Followings</h1>    
        </div>
    )
}

export default Following
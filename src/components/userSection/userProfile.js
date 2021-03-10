import React from 'react';
import UpdatePics from "./updatePics";
import UserNavbarSetion from "./usernavbar";

const UserProfile = () => {
    return (
        <div className="user-profile-section">
           <UpdatePics />
           <UserNavbarSetion />
        </div>
    )
}

export default UserProfile 

import React from 'react'
import UpdatePics from "./updatePics";
import UserNavbarSetion from "./usernavbar";

const Collection = () => {
    return (
        <div>
            <UpdatePics />
            <UserNavbarSetion />
            <h1 className="wrapper user-heading">Collections</h1>    
        </div>
    )
}

export default Collection
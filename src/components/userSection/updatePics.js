import React from 'react'
import addPicIcon from './icons/add.svg'
import profilePic from './icons/Oval Copy.png'
import changeprofilePic from './icons/Group 1203.png'

const UpdatePics = () => {
    return (
        <div className="update-pics-section">
            <div className="update-pics">
              <div className="cover-pic">
                <div className="cover-overlay"> 
                    <div className="change-cover">
                        <span><img src={addPicIcon}/>Change Cover Image</span>
                    </div>
                </div>
              </div>
            </div>
            <div className="profile-pic-section">
                <div className="profile-pic">
                    <img src={profilePic} />
                </div>
                <div className="change-profile-pic">
                    <img src={changeprofilePic}/>
                </div>
            </div>
        </div>
    )
}

export default UpdatePics

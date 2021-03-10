import React from 'react'
import UserSettings from './userSettings' 

const Notification = () => {
    return (
        <div className="wrapper notification-settings">
            <UserSettings />
            <div className="notification">
                <ul>
                    <li>
                        <div className="text">User Follows You</div>
                        <div className="toggle">Toggle</div>
                    </li>
                    <li>
                        <div className="text">User saves your image to their image collection</div>
                        <div className="toggle">Toggle</div>
                    </li>
                    <li>
                        <div className="text">User likes one of your image</div>
                        <div className="toggle">Toggle</div>
                    </li>
                </ul>
                <button className="common-style-btn">Save Settings</button>
            </div>
        </div>
    )
}

export default Notification
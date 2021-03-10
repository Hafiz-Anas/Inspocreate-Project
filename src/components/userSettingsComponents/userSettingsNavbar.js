import React from 'react'
import {NavLink} from 'react-router-dom'

const UserSettingsNavbar = () => {
    return (
        <div className="user-settings-navbar">
            <div className="wrapper">
                <ul>
                    <li><NavLink exact to="/userSettingsComponents/userSettings/account">Account</NavLink></li>
                    <li><NavLink exact to="/userSettingsComponents/userSettings/notification">Notification</NavLink></li>
                    <li><NavLink to="/userSettingsComponents/userSettings/interests">Interests</NavLink></li>
                    <li><NavLink to="/userSettingsComponents/userSettings/privacy">Privacy</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default UserSettingsNavbar
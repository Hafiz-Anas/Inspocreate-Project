import React from 'react'
import UserSettingsNavbar from './userSettingsNavbar'

const UserSettings = () => {
    return (
        <div className="user-settings-section">
            <div className="user-settings-container wrapper">
                <h1>Settings</h1>
                <UserSettingsNavbar />
            </div>
        </div>
    )
}

export default UserSettings 
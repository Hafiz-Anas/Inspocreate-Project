import React from 'react'
import UserSettings from './userSettings'

const Privacy = () => {
    return (
        <div className="wrapper privacy-settings">
            <UserSettings />
            <div className="privacy">
                <div className="toggle-it">
                    <h1>Set To Private</h1>
                    <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="note">
                    <p><b>Please note:</b> When setting your profile to private all items that you have added/shared to the network will be set to 'Private", and all items that you add/share from the moment you change your profile to 'Private' will be by default set to 'Private' at the time of you adding/sharing the item</p>
                </div>
                <button className="common-style-btn">Save Settings</button>
            </div>
        </div>
    )
}

export default Privacy

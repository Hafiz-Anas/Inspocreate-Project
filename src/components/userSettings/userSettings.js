import React, {useState} from 'react'
import Account from './components/account'
import Interests from './components/interests'
import Notification from './components/notification'
import Privacy from './components/privacy'

const UserSettings = () => {
    const [settingFor, setSettingsFor] = useState(
        'account',
        'interests',
        'notification',
        'privacy'
    )
    return (
        <div className="user-settings-section">
            <div className="user-settings-navbar wrapper">
                <h1>Settings</h1>
                <ul className="display-flex">
                    <li><button onClick={() => setSettingsFor('account')}>Account</button></li>
                    <li><button onClick={() => setSettingsFor('interests')}>Interests</button></li>
                    <li><button onClick={() => setSettingsFor('notification')}>Notification</button></li>
                    <li><button onClick={() => setSettingsFor('privacy')}>Privacy</button></li>
                </ul>
                {settingFor === 'account' && <><Account /></>}
                {settingFor === 'interests' && <><Interests /></>}
                {settingFor === 'notification' && <><Notification /></>}
                {settingFor === 'privacy' && <><Privacy /></>}
            </div>
        </div>
    )
}

export default UserSettings 
import React from 'react'
import userIcon from '../icons/Shape.png'
import userIconMini from '../icons/Group 1203.png'

const Account = () => {
    return (
        <div className="wrapper account-setting">
            <form className="account-form">
                <div className="user-icon">
                    <img className="user-icon" src={userIcon} /> 
                    <img src={userIconMini} />
                </div>
                <div className="row mt">
                    <div className="form-field col-4">
                        <label for="First Name">First Name</label>
                        <input type="text" placeholder="First Name"/>
                    </div>
                    <div className="form-field col-4">
                        <label for="Last Name">Last Name</label>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div className="form-field col-4">
                        <label for="Username">Username</label>
                        <input type="text" placeholder="Username"/>
                    </div>
                </div>
                <div className="row">
                   <div className="form-field 12-col">
                        <label for="bio">Enter Bio</label>
                        <textarea rows="7" type="text" placeholder="Tell us About you"/>
                    </div>
                </div>
                <div className="row">
                <div className="form-field col-6">
                        <label for="Email">Email Address</label>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="form-field col-6">
                        <label for="Website">Website</label>
                        <input type="url" placeholder="https://" />
                    </div>
                </div>
                <div className="row">
                <div className="form-field col-6">
                        <label for="Password">Current Password</label>
                        <input type="password" placeholder="*****"/>
                    </div>
                    <div className="form-field col-6">
                        <label for="Password">Confirm Password</label>
                        <input type="password" placeholder="*****"/>
                    </div>
                </div>
                <div className="row submit-postion">
                    <div className="form-submit col-6">
                        <button className="common-style-btn" type="submit">Save Settings</button>
                    </div>
                    <div className="del-account col-6">
                        <a>Del account</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Account
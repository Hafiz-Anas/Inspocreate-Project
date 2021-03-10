import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const UserNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="user-navbar">
            <div className="wrapper user-navbar-container">
                <ul className="user-navbar-links">
                    <li><NavLink exact to="/userSection/userProfile/followers"><h1>0</h1>Followers</NavLink></li>
                    <li><NavLink to="/userSection/userProfile/following"><h1>0</h1>Following</NavLink></li>
                    <li><NavLink to="/userSection/userProfile/collection"><h1>0</h1>Collection</NavLink></li>
                </ul>
                <div className="convert-btn">
                    <button className="common-style-btn" onClick={handleShow}>Convert to Company</button>
                </div>
            </div>
            <Modal size="xl" className="convert-user" centered show={show} onHide={handleClose}>
                <div className="convert-user-container">
                    <button className="remvoe-post-modal" onClick={handleClose}>&times;</button>
                    <form>
                        <h1>Convert To Company</h1>
                        <div className="form-field">
                            <label for="Company Name">Company Name</label>
                            <input type="text" placeholder="Some Text Here" />
                        </div>
                        <div className="form-field">
                          <label >Business Type</label>
                           <select name="Bussiness-Type" className="select-type">
                             <option value="">Business Coach/Consultant</option>
                             <option value="">Personal Development Coach/ Consultant</option>
                             <option value="">Empowerment/Motivational Business</option>
                             <option value="">Marketing Business</option> 
                             <option value="">Other (Please specify)</option> 
                           </select>
                        </div>
                        <div className="form-submit">
                            <button className="common-style-btn" type="submit">Convert To Company</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default UserNavbar
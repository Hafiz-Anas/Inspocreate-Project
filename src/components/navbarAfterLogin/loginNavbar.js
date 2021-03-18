import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import logoImg from '../../assets/Imgs/Group.svg'
import searchIcon from '../../assets/Imgs/Shape.svg'
import HomeIcon from "../../assets/Imgs/Path.svg";
import galleryIcon from "../../assets/Imgs/Combined Shape.svg";
import blogIcon from "../../assets/Imgs/Shape2.svg";
import notiIcon from "../../assets/Imgs/gan.svg";
import moreIcon from "../../assets/Imgs/Oval Copy.svg";
import userIcon from "../../assets/Imgs/icon-5.svg";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { AuthContext } from '../../context/auth';
// SUB COMPONENTS
import AddPostModal from "./components/addPostModal";


const MainNavbar = () => {
  const context = useContext(AuthContext)

  // MODAL FOR CREATE POST
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  // FUNCTION FOR USER LOGOUT
  const logoutUser = () => {
    console.log('User log out')
    context.actions.updateState(null)
  }

  return (
    <div>
      <div className="main-navbar">
        <div className="login-navbar-wrapper">
          <div className="left">
            <div className="navbar-logo">
              <img src={logoImg} />
              <h1>Inspocreate</h1>
            </div>
            <ul className="main-links">
              <li><NavLink to="/activity"><img src={HomeIcon} />Activity</NavLink></li>
              <li><NavLink to="/images"><img src={galleryIcon} />Images</NavLink></li>
              <li><NavLink to="/blog"><img src={blogIcon} />Blog</NavLink></li>
            </ul>
          </div>
          <div className="right">
            <div className="search">
              <input type="text" placeholder="Try Women Empowerment" />
              <button><img src={searchIcon} /></button>
            </div>
            <ul className="user-seciton">
              <li><img src={notiIcon} /></li>
              <li><button onClick={setShow} ><img src={userIcon} />Add Post</button></li>
              <Dropdown>
                <Dropdown.Toggle className="user-select" id="dropdown-basic">
                  <li><img className="userIcon" src={moreIcon} /></li>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown-item" href="/userProfile">Profile</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" href="/userSettings">Setting</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" onClick={logoutUser}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </div> 

      {/*********** ADD POST MODAL **********/}
      <AddPostModal  show={show} setShow={setShow}/>
    </div>
  )
}

export default MainNavbar
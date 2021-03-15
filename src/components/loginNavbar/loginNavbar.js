import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import logoImg from '../../Imgs/Group.svg'
import searchIcon from '../../Imgs/Shape.svg'
import HomeIcon from "../../Imgs/Path.svg";
import galleryIcon from "../../Imgs/Combined Shape.svg";
import blogIcon from "../../Imgs/Shape2.svg";
import notiIcon from "../../Imgs/gan.svg";
import plusIcon from "../../Imgs/icon-3.svg";
import plusIcontwo from "../../Imgs/Shape Copy 212.svg";
import moreIcon from "../../Imgs/Oval Copy.svg";
import userIcon from "../../Imgs/icon-5.svg";
import { Modal, Button, Dropdown } from "react-bootstrap";
import axios from 'axios';
import { AuthContext } from '../../context/auth';
// SUB COMPONENTS
import LocalPost from './components/localPost'
import UrlPost from './components/urlPost'



const MainNavbar = () => {
  const context = useContext(AuthContext)

  // MODAL FOR CREATE POST
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // STATES FOR POSTTYPE
  const [postType, setPostType] = useState('Image')
  const [imageType, setimageType] = useState('localImage')
  const [blogType, setblogType] = useState('localBlog')



  // FUNCTION FOR USER LOGOUT

  const logoutUser = () => {
    console.log('user log out')
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
              <li><button onClick={handleShow} ><img src={userIcon} />Add Post</button></li>
              <Dropdown>
                <Dropdown.Toggle className="user-select" id="dropdown-basic">
                  <li><img className="userIcon" src={moreIcon} /></li>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown-item" href="/userSection/userProfile">Profile</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" href="/userSettingsComponents/userSettings">Setting</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" onClick={logoutUser}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </div>
      {/*********** ADD POST MODAL **********/}
      <Modal size="lg" show={show} className="add-post-modal" onHide={handleClose} centered>
        <div class="add-post-container">
          <buttton onClick={handleClose} class="remvoe-post-modal">&times;</buttton>
          <h1 className="text-center pb-5 pt-0">Add New Post</h1>
          <div className="post-types">
            <button type="button" onClick={() => setPostType('Image')}>Image</button>
            <button type="button" onClick={() => setPostType('Blog')}>Blog</button>
          </div>
          <div>
            {postType === 'Image' && <>
              <div className="file-type">
                <button type="button" onClick={() => setimageType('localImage')}><span class="material-icons">radio_button_unchecked</span>Add Image</button>
                <button type="button" onClick={() => setimageType('urlImage')}><span class="material-icons">radio_button_unchecked</span>Add Image from URL</button>
              </div>
              {imageType === 'localImage' && <>
                <LocalPost />
              </>}
              {imageType === 'urlImage' && <>
                <UrlPost />
              </>}
            </>}
            {postType === 'Blog' && <>
              <div className="file-type">
                <button type="button" onClick={() => setblogType('localBlog')}><span class="material-icons">radio_button_unchecked</span>Add Blog</button>
                <button type="button" onClick={() => setblogType('urlBlog')}><span class="material-icons">radio_button_unchecked</span>Add Blog from URL</button>
              </div>
              {blogType === 'localBlog' && <>
               <LocalPost />
              </>}
              {blogType === 'urlBlog' && <>
               <UrlPost />
              </>}
            </>}
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default MainNavbar
import React, {useState} from 'react'
// import { Link } from "react-router-dom";
import logoImg from '../Imgs/Group.svg'
import searchIcon from '../Imgs/Shape.svg'
import  HomeIcon from "../Imgs/Path.svg";
import galleryIcon  from "../Imgs/Combined Shape.svg";
import  blogIcon from "../Imgs/Shape2.svg";
import notiIcon from "../Imgs/gan.svg";
import plusIcon from "../Imgs/icon-3.svg";
import plusIcontwo from "../Imgs/Shape Copy 212.svg";
import moreIcon from "../Imgs/Oval Copy.svg";
import userIcon from "../Imgs/icon-5.svg";
import { Modal, Button, Dropdown } from "react-bootstrap";


const MainNavbar = () => {
  const [show, setShow] = useState(false);
  const [postType, setPostType] = useState('blog')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <li><a href=""><img src={HomeIcon} />Activity</a></li>
                <li><a href=""><img src={galleryIcon} />Images</a></li>
                <li><a href=""><img src={blogIcon} />Blog</a></li>
              </ul>
              </div>
             <div className="right">
             <div className="search">
                <input type="text" placeholder="Try Women Empowerment" />
                <button><img src={searchIcon} /></button>
              </div>
              <ul className="user-seciton">
                <li><img src={notiIcon}/></li>
                <li><button onClick={handleShow} ><img src={userIcon}/>Add Post</button></li>
                <Dropdown>  
                  <Dropdown.Toggle className="user-select" id="dropdown-basic">
                    <li><img className="userIcon" src={moreIcon}/></li>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="/userSection/userProfile">Profile</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="/userSettingsComponents/userSettings">Setting</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#/action-3">Logout</Dropdown.Item> 
                    </Dropdown.Menu>
                  </Dropdown>
              </ul>
             </div>
            </div>
        </div>

        {/* ADD POST MODAL */}
        <Modal size="xl" show={show} className="add-post-modal" onHide={handleClose} centered>
          <div class="add-post-container">
          <buttton onClick={handleClose} class="remvoe-post-modal">&times;</buttton>
          <div>
            <button type="button" onClick = {()=>setPostType('blog')}>Blog</button>
            <button type="button" onClick = {()=>setPostType('post')}>Post</button>
          </div>
          <div>
            {postType === 'blog' && <> This is Blog</>}
            {postType === 'post' && <> This is Post</>}
          </div>
            <form className="add-post-form">
              <h1>Add New Post</h1>
                <div className="add-img">
                    <img src={plusIcontwo} />
                    <p>Add New</p>
                </div>
                <div className="input-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Some Text Here"/>
                </div>
                <div className="input-post">
                <label htmlFor="category">Categories</label>
                  <select name="category">
                    <option value="Women Empowerment">Women Empowerment</option>
                    <option value="Life Style">Life Style</option>
                    <option value="Empowerment">Empowerment</option>
                    <option value="audi">Audi</option> 
                  </select>
                </div>
                <div className="input-post">
                    <label htmlFor="massage">Description</label>
                    <textarea type="text" rows="6" placeholder="Some Text Here"/>
                </div>
                <div className="input-post">
                    <label htmlFor="tags">Add Tags</label>
                    <input type="text"/>
                </div>
                <div className="submit-btn">
                  <button type="submit">I Would Like to Post Now</button>
                </div>
            </form>
          </div>
        </Modal>
      </div>
    )
}

export default MainNavbar
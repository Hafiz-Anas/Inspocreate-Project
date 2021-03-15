import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import logoImg from '../Imgs/Group.svg'
import searchIcon from '../Imgs/Shape.svg'
import HomeIcon from "../Imgs/Path.svg";
import galleryIcon from "../Imgs/Combined Shape.svg";
import blogIcon from "../Imgs/Shape2.svg";
import notiIcon from "../Imgs/gan.svg";
import plusIcon from "../Imgs/icon-3.svg";
import plusIcontwo from "../Imgs/Shape Copy 212.svg";
import moreIcon from "../Imgs/Oval Copy.svg";
import userIcon from "../Imgs/icon-5.svg";
import { Modal, Button, Dropdown } from "react-bootstrap";
import axios from 'axios';
import { AuthContext } from '../context/auth';

const TagComponent = props => {
  return (
    <div className="tagComponent">
      <div className="tagComponent__text" >{props.text}</div>
      <div className="tagComponent__close" onClick={() => { props.cullTagFromTags(props.text) }}>X</div>
    </div>
  )
}

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

  // API FOR FORM DATA FOR CREATE POST
  const [postState, setPostState] = useState({
    "title": "",
    "description": "",
    "categories": ["anas"],
    "url": undefined,
    "image": null,
    "tags": [

    ],
    "public": true,
    "collection": true,
    "postType": "Image"
  })
  const history = useHistory();

  const onChangeFile = (event) => {
    console.log(event);
    console.log(context)
    const formData = new FormData();
    formData.append('file', event.target.files[0])
    axios.post('https://api-dev.inspocreate.com/media', formData, {
      headers: {
        Authorization: "Bearer " + context.state.token
      }
    })
      .then(response => {
        setPostState({
          ...postState,
          image: response.data.path
        })
        console.log(response)
      }).catch((error) => {
        console.error(error.response)
      });
  }

  // API FOR SELECT CATEGORIES
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('https://api-dev.inspocreate.com/categories')
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.error(error.response)
      })
  }, [])


  // API FOR CREATE POST
  const pushPost = (e) => {
    e.preventDefault();
    axios.post('https://api-dev.inspocreate.com/posts/create', { ...postState, postType: postType, categories: [categories[0].id] }, {
      headers: {
        Authorization: "Bearer " + context.state.token
      }
    })
      .then(response => {
        history.push('/uploadedPost')
        console.log(response)
      }).catch((error) => {
        console.error(error.response)
      });
  }

  useEffect(() => {
    if(context.state){
      setShow(false)
    }
  }, [context])

  // FUNCTION FOR USER LOGOUT

  const logoutUser = () => {
    console.log('user log out')
    context.actions.updateState(null)
  }

  // TAGS IN INPUT
  const [tags, setTags] = React.useState(['JavaScript', 'TypeScript'])
  const inputRef = React.useRef();
  const [inputValue, setInputValue] = React.useState('')

  const inputValueChangeHandler = inputChange => {
    setInputValue(inputChange);
    if (inputChange[inputChange.length - 1] === ',') {
      setTags([...tags, inputChange.slice(0, inputChange.length - 1)]);
      setInputValue('');
    }
  }
  const cullTagFromTags = (tag) => {
    setTags([...tags.filter(element => element !== tag)])
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
                <form className="add-post-form" onSubmit={pushPost}>
                  {!postState.image && (
                    <label className="add-img">
                      <img src={plusIcontwo} />
                      <p>Add New</p>
                      <input type="file" hidden onChange={onChangeFile} />
                    </label>
                  )}
                  {!!postState.image && (
                    <img src={postState.image} />
                  )}
                  <div className="input-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="category">Categories</label>
                    <select name="category" className="select-type">
                      {categories.map(item => (
                        <option value={item.id}>{item.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input-post">
                    <label htmlFor="massage">Description</label>
                    <textarea type="text" rows="6" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="tags">Add Tags</label>
                    <div className="tagArea">
                      <div className='tagArea__displayArea'>
                        {tags.map(tag => <TagComponent text={tag} cullTagFromTags={cullTagFromTags} />)}
                      </div>
                      <input type='text' ref={inputRef} value={inputValue} onChange={event => inputValueChangeHandler(event.target.value)} placeholder='separated by commas' className="tagArea__input" />
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button type="submit">I Would Like to Post Now</button>
                  </div>
                </form>
              </>}
              {imageType === 'urlImage' && <>
                <form className="add-post-form">
                  <div className="input-post">
                    <input type="url" placeholder="https://" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="category">Categories</label>
                    <select name="category" className="select-type">
                      <option value="Women Empowerment">Women Empowerment</option>
                      <option value="Life Style">Life Style</option>
                      <option value="Empowerment">Empowerment</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="input-post">
                    <label htmlFor="massage">Description</label>
                    <textarea type="text" rows="6" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="tags">Add Tags</label>
                    <input type="text" />
                  </div>
                  <div className="submit-btn">
                    <button type="submit">I Would Like to Post Now</button>
                  </div>
                </form>
              </>}
            </>}
            {postType === 'Blog' && <>
              <div className="file-type">
                <button type="button" onClick={() => setblogType('localBlog')}><span class="material-icons">radio_button_unchecked</span>Add Blog</button>
                <button type="button" onClick={() => setblogType('urlBlog')}><span class="material-icons">radio_button_unchecked</span>Add Blog from URL</button>
              </div>
              {blogType === 'localBlog' && <>
                <form className="add-post-form">
                  <label className="add-img">
                    <img src={plusIcontwo} />
                    <p>Add New</p>
                    <input type="file" hidden onChange={onChangeFile} />
                  </label>
                  <div className="input-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="category">Categories</label>
                    <select name="category" className="select-type">
                      <option value="Women Empowerment">Women Empowerment</option>
                      <option value="Life Style">Life Style</option>
                      <option value="Empowerment">Empowerment</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="input-post">
                    <label htmlFor="massage">Description</label>
                    <textarea type="text" rows="6" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="tags">Add Tags</label>
                    <input type="text" />
                  </div>
                  <div className="submit-btn">
                    <button type="submit">I Would Like to Post Now</button>
                  </div>
                </form>
              </>}
              {blogType === 'urlBlog' && <>
                <form className="add-post-form">
                  <div className="input-post pb-3">
                    <input type="url" placeholder="https://" />
                  </div>
                  <div className="add-img">
                    <img src={plusIcontwo} />
                    <p>Add New</p>
                  </div>
                  <div className="input-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="category">Categories</label>
                    <select name="category" className="select-type">
                      <option value="Women Empowerment">Women Empowerment</option>
                      <option value="Life Style">Life Style</option>
                      <option value="Empowerment">Empowerment</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="input-post">
                    <label htmlFor="massage">Description</label>
                    <textarea type="text" rows="6" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="tags">Add Tags</label>
                    <input type="text" />
                  </div>
                  <div className="submit-btn">
                    <button type="submit">I Would Like to Post Now</button>
                  </div>
                </form>
              </>}
            </>}
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default MainNavbar
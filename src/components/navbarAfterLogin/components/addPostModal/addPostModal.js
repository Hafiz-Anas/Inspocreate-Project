import React, {useState} from 'react'
import LocalPost from './components/localPost'
import UrlPost from './components/urlPost'
import { Modal, Button, Dropdown } from "react-bootstrap";


const AddPostModal = (props) => {
  const handleClose = () => props.setShow(false);

    // STATES FOR POSTTYPE
    const [postType, setPostType] = useState('Image')
    const [imageType, setimageType] = useState('localImage')
    const [blogType, setblogType] = useState('localBlog')

    return (
        <div>
            <Modal size="lg" show={props.show} className="add-post-modal" onHide={handleClose} centered>
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

export default AddPostModal
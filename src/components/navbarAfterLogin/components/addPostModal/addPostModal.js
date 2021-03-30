import React, { useState } from 'react';
import LocalPost from './components/localPost';
import UrlPost from './components/urlPost';
import { Modal } from 'react-bootstrap';
import clsx from 'clsx';

const AddPostModal = (props) => {
	const handleClose = () => props.setShow(false);

	// STATES FOR POSTTYPE
	const [postType, setPostType] = useState('Image');
	const [imageType, setimageType] = useState('localImage');
	const [blogType, setblogType] = useState('localBlog');

	return (
		<div>
			<Modal
				size='lg'
				show={props.show}
				className='add-post-modal'
				onHide={handleClose}
				centered
			>
				<div class='add-post-container'>
					<buttton onClick={handleClose} class='remvoe-post-modal'>
						&times;
					</buttton>
					<h1 className='text-center pt-0'>Add New Post</h1>
					<div className='post-types'>
						<button
							type='button'
							className={clsx({ active: postType === 'Image' })}
							onClick={() => setPostType('Image')}
						>
							Image
						</button>
						<button
							type='button'
							className={clsx({ active: postType === 'Blog' })}
							onClick={() => setPostType('Blog')}
						>
							Blog
						</button>
					</div>
					<div>
						{postType === 'Image' && (
							<>
								<div className='file-type'>
									<button
										type='button'
										className={clsx({ active: imageType === 'localImage' })}
										onClick={() => setimageType('localImage')}
									>
										<span className='material-icons'>insert_photo</span>
										Add Image
									</button>
									<button
										type='button'
										className={clsx({ active: imageType === 'urlImage' })}
										onClick={() => setimageType('urlImage')}
									>
										<span className='material-icons'>language</span>
										Add Image from URL
									</button>
								</div>
								{imageType === 'localImage' && (
									<>
										<LocalPost />
									</>
								)}
								{imageType === 'urlImage' && (
									<>
										<UrlPost />
									</>
								)}
							</>
						)}
						{postType === 'Blog' && (
							<>
								<div className='file-type'>
									<button
										type='button'
										className={clsx({ active: blogType === 'localBlog' })}
										onClick={() => setblogType('localBlog')}
									>
										<span className='material-icons'>description</span>
										Add Blog
									</button>
									<button
										type='button'
										className={clsx({ active: blogType === 'urlBlog' })}
										onClick={() => setblogType('urlBlog')}
									>
										<span className='material-icons'>language</span>
										Add Blog from URL
									</button>
								</div>
								{blogType === 'localBlog' && (
									<>
										<LocalPost />
									</>
								)}
								{blogType === 'urlBlog' && (
									<>
										<UrlPost />
									</>
								)}
							</>
						)}
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default AddPostModal;

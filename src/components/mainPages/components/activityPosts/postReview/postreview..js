import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import commentIcon from '../../../../../assets/Imgs/Shape Copy 9.svg';
import addIcon from '../../../../../assets/Imgs/Shape Copy 21.svg';
import {
	dislikePostAction,
	getSinglePost,
	likePostAction,
	createCommentThunk,
	getCommentThunk,
} from '../../../../../reducers';
import { AuthContext } from '../../../../../context/auth';
import AddToCollection from '../addToCollectionModal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Comment from './comment';

const PostReview = () => {
	//CONTEXT
	const context = useContext(AuthContext);
	const [comment, setComment] = useState('');
	const params = useParams();

	const dispatch = useDispatch();

	// GET SINGLE POST FROM REDUCER
	const singlePost = useSelector((state) => state.post);
	useEffect(() => {
		const id = params.postId;
		dispatch(getSinglePost(id));
	}, []);

	//ADD TO COLLECTION MODAL
	const [show, setShow] = useState(false);

	const likePost = (id) => {
		dispatch(likePostAction(id));
	};

	const dislikePost = (id) => {
		dispatch(dislikePostAction(id));
	};
	const isLiked = (post) => {
		const likes = post.likes.map((item) => item.id);
		return likes.includes(context.state.id);
	};

	const handleChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = (e) => {
		dispatch(
			createCommentThunk({
				postId: params.postId,
				text: comment,
			})
		);
	};
	return (
		<div className='post-review-section wrapper'>
			{!!singlePost.data && (
				<div className='post-review-container activity'>
					<div>
						<div className='scroll-post'>
							<div className='post-author'>
								<div className='author-icon-name'>
									<div className='author-icon'>
										<img src={singlePost.data.user.profile} />
									</div>
									<div className='author-name'>
										<h1 className='pt-2'>
											{singlePost.data.user.firstName}{' '}
											{singlePost.data.user.lastName}
										</h1>
										<p>{singlePost.data.user.username}</p>
									</div>
								</div>
								<div className='post-time'>
									<p>{singlePost.data.createdAt}</p>
								</div>
							</div>
							<div className='post-pic'>
								<img src={singlePost.data.image} />
							</div>
							<div className='post-desc'>
								<h1>{singlePost.data.title}</h1>
								<p>{singlePost.data.description}</p>
							</div>
							<div className='post-res'>
								<div className='likes'>
									<span className='likes-length'>
										{singlePost.data.likes.length}
									</span>
									{!isLiked(singlePost.data) && (
										<p onClick={() => likePost(singlePost.data.id)}>
											<span className='material-icons'>favorite</span> Like
										</p>
									)}
									{isLiked(singlePost.data) && (
										<p onClick={() => dislikePost(singlePost.data.id)}>
											<span className='material-icons liked-icon'>
												favorite
											</span>
											Dislike
										</p>
									)}
								</div>
								<p className='comment'>
									<img src={commentIcon} />
									Comment
								</p>
								<p onClick={setShow}>
									<img src={addIcon} />
									Add to Collection
								</p>
							</div>
						</div>
						<Comment />
						{/*ADD NEW COMMENT*/}
						<div className='add-comment'>
							{/*<h2>Be The First To Write a Comment</h2>*/}
							<h2>Write your Comment</h2>
							<div className='comment-input'>
								<input type='text' value={comment} onChange={handleChange} />
								<button onClick={handleSubmit}>
									<span className='material-icons'>send</span>
								</button>
							</div>
						</div>
					</div>
					<div className='should-follow post-creater'>
						<div className='user-details'>
							<div className='user-icon-name'>
								<div className='user-img'>
									<img src={singlePost.data.user.profile} />
								</div>
								<div className='user-name'>
									<h1 className='pt-2'>
										{singlePost.data.user.firstName}{' '}
										{singlePost.data.user.lastName}
									</h1>
									<p>{singlePost.data.user.username}</p>
								</div>
							</div>
							<div className='user-follow'></div>
						</div>
						<div className='about'>
							<h1>
								About {singlePost.data.user.firstName}{' '}
								{singlePost.data.user.lastName}
							</h1>
						</div>
					</div>
					<AddToCollection show={show} setShow={setShow} />
				</div>
			)}
		</div>
	);
};

export default PostReview;

import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addIcon from '../../../../assets/Imgs/Shape Copy 21.svg';
import commentIcon from '../../../../assets/Imgs/Shape Copy 9.svg';
import { AuthContext } from '../../../../context/auth';
import {
	getPostList,
	likePostAction,
	dislikePostAction,
} from '../../../../reducers';
import AddToCollection from './addToCollectionModal';
import { Link } from 'react-router-dom';

const ActivityPosts = () => {
	//CONTEXT
	const context = useContext(AuthContext);
	//ADD TO COLLECTION MODAL
	const [show, setShow] = useState(false);

	//ACTIVITY POSTS API CALL FROM REDUCER
	const postsState = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPostList());
	}, []);

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

	return (
		<div>
			<div className='scroll-posts'>
				{postsState.data.map((item) => (
					<div className='scroll-post' key={item.id}>
						<div className='post-author'>
							<div className='author-icon-name'>
								<div className='author-icon'>
									<img src={item.user.profile} />
								</div>
								<div className='author-name'>
									<h1 className='pt-2'>
										{item.user.firstName} {item.user.lastName}
									</h1>
									<p>{item.user.username}</p>
								</div>
							</div>
							<div className='post-time'>
								<p>{item.createdAt}</p>
							</div>
						</div>
						<div className='post-pic'>
							<img src={item.image} />
						</div>
						<div className='post-desc'>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<Link className='read-more' to={'post/' + item.id}>
								Read More...
							</Link>
						</div>
						<div className='post-res'>
							<div className='likes'>
								<span className='likes-length'>{item.likes.length}</span>
								{!isLiked(item) && (
									<p onClick={() => likePost(item.id)}>
										<span className='material-icons'>favorite</span> Like
									</p>
								)}
								{isLiked(item) && (
									<p onClick={() => dislikePost(item.id)}>
										<span className='material-icons liked-icon'>favorite</span>
										Dislike
									</p>
								)}
							</div>
							<Link className='comment' to={'post/' + item.id}>
								<img src={commentIcon} />
								Comment
							</Link>
							<p onClick={setShow}>
								<img src={addIcon} />
								Add to Collection
							</p>
						</div>
					</div>
				))}
			</div>
			<AddToCollection show={show} setShow={setShow} />
		</div>
	);
};

export default ActivityPosts;

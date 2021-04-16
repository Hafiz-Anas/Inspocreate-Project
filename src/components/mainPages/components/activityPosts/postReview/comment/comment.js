import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	likeCommentAction,
	getCommentThunk,
	replyCommentAction,
	dislikeCommentAction,
	deleteCommentAction,
} from '../../../../../../reducers';
import { useParams } from 'react-router';
import { AuthContext } from '../../../../../../context/auth';
import Reply from './reply';

const Comment = () => {
	const context = useContext(AuthContext);

	const dispatch = useDispatch();
	const params = useParams();

	const commentsState = useSelector((state) => state.comments);

	useEffect(() => {
		const id = params.postId;
		dispatch(getCommentThunk(id));
	}, []);

	const [reply, setReply] = useState(false);

	const likeComment = (id) => {
		dispatch(likeCommentAction(id));
	};

	const dislikeComment = (id) => {
		dispatch(dislikeCommentAction(id));
	};

	const deleteComment = (id) => {
		dispatch(deleteCommentAction(id));
	};

	const isLiked = (comment) => {
		return comment.likes.includes(context.state.id);
	};

	const editComment = () => {
		// console.log('edit');
	};
	const replyComment = () => {
		setReply(true);
	};
	return (
		<div className='added-comment-section'>
			<h1 className='added-comment-heading'>Recent Comments</h1>
			{commentsState.data.map((item) => (
				<div className='added-comment pt-3 pb-3'>
					<div className='user-details '>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={item.user.profile} />
							</div>
							<div className='user-name'>
								<h1>
									{item.user.firstName} {item.user.lastName}
								</h1>
								<p className='pt-2'>{item.text}</p>
							</div>
						</div>
						<div className='time-ago'>{item.createdAt}</div>
					</div>
					<div className='comment-response pt-2'>
						<p onClick={() => replyComment(item.id)}>
							<span className='material-icons'>reply</span>Reply
						</p>

						<div className='likes'>
							{/*<span className='likes-length'></span>*/}
							{!isLiked(item) && (
								<p onClick={() => likeComment(item.id)}>
									<span className='material-icons'>favorite</span> Like
								</p>
							)}
							{isLiked(item) && (
								<p onClick={() => dislikeComment(item.id)}>
									<span className='material-icons text-danger'>favorite</span>
									Liked
								</p>
							)}
						</div>

						<p>
							<span className='material-icons'>create</span>Edit
						</p>
						<p className='text-danger' onClick={() => deleteComment(item.id)}>
							<span className='material-icons'>delete</span>Delete
						</p>
					</div>
				</div>
			))}
			<Reply />
		</div>
	);
};

export default Comment;

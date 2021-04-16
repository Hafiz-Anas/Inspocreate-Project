import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	likeCommentAction,
	dislikeCommentAction,
	deleteCommentAction,
	replyCommentAction,
	createCommentThunk,
	getCommentThunk,
} from '../../../../../../../reducers';
import { useParams } from 'react-router';
import { AuthContext } from '../../../../../../../context/auth';

const Comment = () => {
	const context = useContext(AuthContext);

	const dispatch = useDispatch();
	const params = useParams();

	const [reply, setReply] = useState('');
	//GET COMMENTS FROM REDUCER
	const commentsState = useSelector((state) => state.comments);
	useEffect(() => {
		const id = params.postId;
		dispatch(getCommentThunk(id));
	}, []);
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
		// const likes = comment.likes.map((item) => item.id);
		// return likes.includes();
	};

	const handleChange = (e) => {
		setReply(e.target.value);
	};

	const handleSubmit = (e) => {
		dispatch(
			replyCommentAction({
				commentId: params.commentId,
				text: reply,
			})
		);
	};
	return (
		<div className='added-comment-section reply'>
			{commentsState.data.map((item) => (
				<div className='added-comment pt-4 pb-4'>
					<div className='user-details '>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={item.user.profile} />
							</div>
							<div className='user-name'>
								<h1>
									{item.user.firstName} {item.user.lastName}
								</h1>
								{item.reply.map((reply) => (
									<p className='pt-2'>{reply.text}</p>
								))}
							</div>
						</div>
						<div className='time-ago'>{item.createdAt}</div>
					</div>
					<div className='comment-response pt-2'>
						<div className='likes'>
							{/*<span className='likes-length'></span>*/}
							{!isLiked(item.id) && (
								<p onClick={() => likeComment(item.id)}>
									<span className='material-icons'>favorite</span> Like
								</p>
							)}
							{isLiked(item.id) && (
								<p onClick={() => dislikeComment(item.id)}>
									<span className='material-icons liked-icon'>favorite</span>
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
			<div className='comment-input'>
				<input
					type='text'
					value={reply}
					onChange={handleChange}
					placeholder='Reply'
					className='w-75'
				/>
				<button onClick={(e) => handleSubmit()}>
					<span className='material-icons'>send</span>
				</button>
			</div>
		</div>
	);
};

export default Comment;

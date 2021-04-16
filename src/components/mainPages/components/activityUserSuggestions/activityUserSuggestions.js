import { useEffect } from 'react';
import { getUserSuggestions, followThunk } from '../../../../reducers';
import { useSelector, useDispatch } from 'react-redux';

const ActivityUserSuggestions = () => {
	const state = useSelector((state) => state.userSuggestions);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserSuggestions());
	}, []);

	const followUser = (id) => {
		dispatch(followThunk(id));
	};
	return (
		<div>
			<div className='should-follow'>
				<h2>You Should Follow</h2>
				{state.data.map((item) => (
					<div className='user-details'>
						<div className='user-icon-name'>
							<div className='user-img'>
								<img src={item.profile} />
							</div>
							<div className='user-name'>
								<h1 className='pt-2'>
									{item.firstName} {item.lastName}
								</h1>
								<p>{item.username}</p>
							</div>
						</div>
						<div className='user-follow'>
							<button onClick={() => followUser(item.id)}>Follow</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ActivityUserSuggestions;

import React from 'react';
import { useSelector } from 'react-redux';

const Followers = () => {
	const userData = useSelector((state) => state.userData);

	return (
		<div className='followers-section wrapper mb-5'>
			<h1 className='user-heading'>Followers</h1>
			<div className='grid'>
				{userData.data &&
					userData.data.followers.map((item) => (
						<div className='should-follow user-in-profile'>
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
								<div className='user-follow'></div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Followers;

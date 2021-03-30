import React from 'react';
import UpdatePics from './components/updatePics/updatePics';
import UserProfileNavbar from './components/userNavbar/usernavbar';

const UserProfile = () => {
	return (
		<div className='user-profile-section'>
			<UpdatePics />
			<UserProfileNavbar />
		</div>
	);
};

export default UserProfile;

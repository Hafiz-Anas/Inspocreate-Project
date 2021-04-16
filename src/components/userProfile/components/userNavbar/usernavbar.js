import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Followers from './components/followers';
import Following from './components/following';
import Collection from './components/collection';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userToCampanyThunk } from '../../../../reducers';
import { useParams } from 'react-router';

const UserNavbar = () => {
	const [show, setShow] = useState(false);

	const [newName, setNewName] = useState('');

	const params = useParams();
	const dispatch = useDispatch();

	const userData = useSelector((state) => state.userData);
	useEffect(() => {
		dispatch(getUserData(params.username));
	}, []);

	const handleChange = (e) => {
		setNewName(e.target.value);
	};
	const convertAccount = () => {
		dispatch(
			userToCampanyThunk({
				userId: 'string',
				name: newName,
				bType: 'string',
			})
		);
	};
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [userInfo, setUserInfo] = useState(
		'Followers',
		'Following',
		'Collection'
	);
	return (
		<div className='user-navbar-section'>
			<div className='user-navbar'>
				<div className='wrapper user-navbar-container'>
					<ul className='user-navbar-links'>
						<li>
							<button
								className={clsx({ active: userInfo === 'Followers' })}
								onClick={() => setUserInfo('Followers')}
							>
								<h1>{userData.data && userData.data.followers.length}</h1>
								Followers
							</button>
						</li>
						<li>
							<button
								className={clsx({ active: userInfo === 'Following' })}
								onClick={() => setUserInfo('Following')}
							>
								<h1>{userData.data && userData.data.followings.length}</h1>
								Following
							</button>
						</li>
						<li>
							<button
								className={clsx({ active: userInfo === 'Collection' })}
								onClick={() => setUserInfo('Collection')}
							>
								<h1>{userData.data && userData.data.collections.length}</h1>
								Collection
							</button>
						</li>
					</ul>
					<div className='convert-btn'>
						<button className='common-style-btn' onClick={handleShow}>
							Convert to Company
						</button>
					</div>
				</div>
				<Modal
					size='xl'
					className='convert-user'
					centered
					show={show}
					onHide={handleClose}
				>
					<div className='convert-user-container'>
						<button className='remvoe-post-modal' onClick={handleClose}>
							&times;
						</button>
						<form>
							<h1>Convert To Company</h1>
							<div className='form-field'>
								<label for='Company Name'>Company Name</label>
								<input
									onChange={handleChange}
									type='text'
									value={newName}
									placeholder='Some Text Here'
								/>
							</div>
							<div className='form-field'>
								<label>Business Type</label>
								<select name='Bussiness-Type' className='select-type'>
									<option value=''>Business Coach/Consultant</option>
									<option value=''>
										Personal Development Coach/ Consultant
									</option>
									<option value=''>Empowerment/Motivational Business</option>
									<option value=''>Marketing Business</option>
									<option value=''>Other (Please specify)</option>
								</select>
							</div>
							<div className='form-submit'>
								<button
									className='common-style-btn'
									onClick={convertAccount}
									type='submit'
								>
									Convert To Company
								</button>
							</div>
						</form>
					</div>
				</Modal>
			</div>
			{userInfo === 'Followers' && (
				<>
					<Followers />
				</>
			)}
			{userInfo === 'Following' && (
				<>
					<Following />
				</>
			)}
			{userInfo === 'Collection' && (
				<>
					<Collection />
				</>
			)}
		</div>
	);
};

export default UserNavbar;

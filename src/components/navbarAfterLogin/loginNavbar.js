import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from 'react-bootstrap';
import { AuthContext } from '../../context/auth';
// SUB COMPONENTS
import AddPostModal from './components/addPostModal';

const MainNavbar = () => {
	const context = useContext(AuthContext);
	const history = useHistory();

	// MODAL FOR CREATE POST
	const [show, setShow] = useState(false);

	// FUNCTION FOR USER LOGOUT
	const logoutUser = () => {
		context.actions.updateState(null);
		history.push('./home');
	};

	return (
		<div>
			<div className='main-navbar'>
				<div className='login-navbar-wrapper'>
					<div className='left'>
						<div className='navbar-logo'>
							<Image
								src='/public/images/Group.svg'
								alt='logo'
								width={100}
								height={100}
							/>
							<h1>Inspocreate</h1>
						</div>
						<ul className='main-links'>
							<li>
								<Link href='/activity'>
									<span className='material-icons'>home</span>
									Activity
								</Link>
							</li>
							<li>
								<Link href='/images'>
									<span className='material-icons'>collections</span>Images
								</Link>
							</li>
							<li>
								<Link href='/blog'>
									<span className='material-icons'>rss_feed</span>
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<div className='right'>
						<div className='search'>
							<input type='text' placeholder='Try Women Empowerment' />
							<button>
								<Image
									src='/public/images/Shape.svg'
									alt='searchIcon'
									width={100}
									height={100}
								/>
							</button>
						</div>
						<ul className='user-seciton'>
							<li>
								<Image
									src='/public/images/gan.svg'
									alt='notification'
									width={100}
									height={100}
								/>
							</li>
							<li>
								<button onClick={setShow}>
									<Image
										src='/public/images/icon-5.svg'
										alt='user'
										width={100}
										height={100}
									/>
									Add Post
								</button>
							</li>
							<Dropdown>
								<Dropdown.Toggle className='user-select' id='dropdown-basic'>
									<li>
										<Image
											className='userIcon'
											src='/public/images/Oval Copy.svg'
											alt='More'
											width={100}
											height={100}
										/>
									</li>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										className='dropdown-item'
										// href={`/userProfile/${context.state.username}`}
									>
										Profile
									</Dropdown.Item>
									<Dropdown.Item className='dropdown-item' href='/userSettings'>
										Setting
									</Dropdown.Item>
									<Dropdown.Item className='dropdown-item' onClick={logoutUser}>
										Logout
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</ul>
					</div>
				</div>
			</div>

			{/*********** ADD POST MODAL **********/}
			<AddPostModal show={show} setShow={setShow} />
		</div>
	);
};

export default MainNavbar;

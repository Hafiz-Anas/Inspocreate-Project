import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logoImg from '../../assets/Imgs/Group.svg';
import searchIcon from '../../assets/Imgs/Shape.svg';
import lockIcon from '../../assets/Imgs/Shape-2.svg';

// SUB COMPONENTS
import LoginModal from './components/loginModal';
import RegistrationModal from './components/registrationModal';

const MainNavbar = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showJoin, setShowJoin] = useState(false);

	return (
		<div>
			<div className='main-navbar'>
				<div className='main-navbar-wrapper'>
					<div className='navbar-logo'>
						<img src={logoImg} />
						<h1>Inspocreate</h1>
					</div>
					<div className='search'>
						<input type='text' placeholder='Try Women Empowerment' />
						<button>
							<img src={searchIcon} />
						</button>
					</div>
					<div className='navbar-btns'>
						<button onClick={setShowLogin} className='navbar-btn-1'>
							<img src={lockIcon} />
							Login
						</button>
						<button onClick={setShowJoin} className='navbar-btn-2'>
							Join Community
						</button>
					</div>
				</div>
			</div>

			{/* LOGIN MODAL */}
			<LoginModal showLogin={showLogin} setShowLogin={setShowLogin} />

			{/* JOIN COMMUNITY MODAL */}
			<RegistrationModal showJoin={showJoin} setShowJoin={setShowJoin} />
		</div>
	);
};

export default MainNavbar;

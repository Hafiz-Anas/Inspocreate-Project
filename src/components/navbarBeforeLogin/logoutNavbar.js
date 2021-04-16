import React, { useState } from 'react';
import Image from 'next/image';

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
						<Image src='/public/images/Group.svg' width={20} height={20} />
						<h1>Inspocreate</h1>
					</div>
					<div className='search'>
						<input type='text' placeholder='Try Women Empowerment' />
						<button>
							<Image src='/public/images/Shape.svg' width={20} height={20} />
						</button>
					</div>
					<div className='navbar-btns'>
						<button onClick={setShowLogin} className='navbar-btn-1'>
							<Image src='/public/images/Shape-2.svg' width={20} height={20} />
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

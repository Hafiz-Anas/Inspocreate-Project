import React, { useState } from 'react';
import Trending from './components/trending';
import Latest from './components/latest';
import Company from './components/company';
import clsx from 'clsx';

const Navbar = () => {
	const [contentType, setContentType] = useState(
		'trendings',
		'latest',
		'company'
	);
	return (
		<div className='main-content-Navbar'>
			<div className='wrapper'>
				<ul>
					<li>
						<button
							className={clsx({ active: contentType === 'trendings' })}
							onClick={() => setContentType('trendings')}
						>
							Trendings
						</button>
					</li>
					<li>
						<button
							className={clsx({ active: contentType === 'latest' })}
							onClick={() => setContentType('latest')}
						>
							Latest
						</button>
					</li>
					<li>
						<button
							className={clsx({ active: contentType === 'trendcompanyings' })}
							onClick={() => setContentType('company')}
						>
							Company
						</button>
					</li>
				</ul>
				{contentType === 'trendings' && (
					<>
						<Trending />
					</>
				)}
				{contentType === 'latest' && (
					<>
						<Latest />
					</>
				)}
				{contentType === 'company' && (
					<>
						<Company />
					</>
				)}
			</div>
		</div>
	);
};
export default Navbar;

import React from 'react';
import Post from './post/post';

const Company = () => {
	return (
		<div classNam='company-posts'>
			<div className='all-posts'>
				<div className='single-post'>
					<Post />
				</div>
				<div className='single-post'>
					<Post />
				</div>
				<div className='single-post'>
					<Post />
				</div>
				<div className='single-post'>
					<Post />
				</div>
				<div className='single-post'>
					<Post />
				</div>
				<div className='single-post'>
					<Post />
				</div>
			</div>
			<div className='more'>
				<button>Load Mode...</button>
			</div>
		</div>
	);
};

export default Company;

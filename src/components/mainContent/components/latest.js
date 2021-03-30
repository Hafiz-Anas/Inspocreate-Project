import React from 'react';
import Post from './post/post';

export const Latest = () => {
	return (
		<div classNam='latest-posts'>
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
			</div>
			<div className='more'>
				<button>Load Mode...</button>
			</div>
		</div>
	);
};

export default Latest;

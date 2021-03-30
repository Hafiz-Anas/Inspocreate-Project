import React from 'react';
import userIcon from '../icons/Oval Copy222.svg';
import plusIcon from '../icons/Shape Copy 21.svg';
import likeIcon from '../icons/Path Copy 47.svg';

const Post = () => {
	return (
		<div>
			<div className='post'>
				<div className='overlay'>
					<div className='gap'></div>
					<div className='desc'>
						<div className='flex user'>
							<div>
								<img src={userIcon} />
							</div>
							<div>
								<p>UserName</p>
							</div>
						</div>
						<div className='flex add'>
							<div>
								<img src={plusIcon} />
							</div>
							<div>
								<p>Add to Collection</p>
							</div>
						</div>
						<div className='flex like'>
							<div>
								<img src={likeIcon} />
							</div>
							<div>
								<p>Like</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;

import React from 'react';

import Image from 'next/image';

const Post = () => {
	return (
		<div>
			<div className='post'>
				<div className='overlay'>
					<div className='gap'></div>
					<div className='desc'>
						<div className='flex user'>
							<div>
								<Image
									src='/public/Images/userIcon2.svg'
									width={20}
									height={20}
								/>
							</div>
							<div>
								<p>UserName</p>
							</div>
						</div>
						<div className='flex add'>
							<div>
								<Image
									src='/public/Images/plusIcon.svg'
									width={20}
									height={20}
								/>
							</div>
							<div>
								<p>Add to Collection</p>
							</div>
						</div>
						<div className='flex like'>
							<div>
								<Image
									src='/public/Images/likeIcon.svg'
									width={20}
									height={20}
								/>
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

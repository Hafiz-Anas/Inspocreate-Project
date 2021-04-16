import React from 'react';
import { useSelector } from 'react-redux';

const Collection = () => {
	const userData = useSelector((state) => state.userData);
	return (
		<div>
			<div className='collections-section wrapper mb-5'>
				<h1 className='user-heading'>Collections</h1>
				<div className='grid'>
					{userData.data &&
						userData.data.collections.map((item) => (
							<div>{item.collections}</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Collection;

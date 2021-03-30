import React, { Component } from 'react';

function NextArrow(props) {
	const { onClick } = props;
	return (
		<div onClick={onClick}>
			<span
				className='material-icons'
				style={{
					border: '1px solid #E0E3E7',
					borderRadius: '100px',
					padding: '10px',
					position: 'absolute',
					right: '-50px',
					top: '0',
					boxShadow: '0px 6px 10px rgba(131, 134, 163, .12)',
				}}
			>
				arrow_forward
			</span>
		</div>
	);
}

export default NextArrow;

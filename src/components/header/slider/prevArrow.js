import React from 'react';

function PrevArrow(props) {
	const { onClick } = props;
	return (
		<div onClick={onClick}>
			<span
				className='material-icons'
				style={{
					backgroundColor: 'white !important',
					border: '1px solid #E0E3E7',
					borderRadius: '100px',
					padding: '10px',
					position: 'absolute',
					left: '-50px',
					boxShadow: '0px 6px 10px rgba(131, 134, 163, .12)',
				}}
			>
				keyboard_backspace
			</span>
		</div>
	);
}

export default PrevArrow;

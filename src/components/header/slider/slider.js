import React, { useEffect } from 'react';
import Slider from 'react-slick';
import NextArrow from './nextArrow';
import PrevArrow from './prevArrow';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, selectCategories } from '../../../reducers';

const SwipeToSlide = () => {
	const categoriesState = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, []);

	const handleClick = (id) => {
		dispatch(selectCategories(id));
	};

	const isSelected = (id) => {
		return categoriesState.selected.includes(id);
	};

	const settings = {
		className: 'center',
		infinite: true,
		centerPadding: '',
		slidesToShow: 5,
		swipeToSlide: true,
		afterChange: function (index) {},
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return (
		<div className='header-slider'>
			<Slider {...settings}>
				{categoriesState.data.map((item) => {
					return (
						<div>
							<button
								className={clsx({
									'checked-btn': isSelected(item.id),
								})}
								onClick={() => handleClick(item.id)}
								key={item.id}
							>
								{isSelected(item.id) && (
									<img src='/public/images/checked.svg' />
								)}
								{item.title}
							</button>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default SwipeToSlide;

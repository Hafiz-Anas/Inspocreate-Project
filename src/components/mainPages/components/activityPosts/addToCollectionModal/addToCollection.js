import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToCollectionAction,
	getCategories,
	getPostList,
} from '../../../../../reducers';

const AddToCollection = (props) => {
	const handleClose = () => props.setShow(false);

	useEffect(() => {
		dispatch(getPostList());
	}, []);
	// API FOR SELECT CATEGORIES FROM REDUCER
	const categoriesState = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, []);

	const addToCollection = () => {
		dispatch(addToCollectionAction());
	};
	return (
		<div>
			<Modal
				size='lg'
				show={props.show}
				className='add-collection-modal'
				onHide={handleClose}
				centered
			>
				<buttton onClick={handleClose} className='remvoe-post-modal'>
					&times;
				</buttton>
				<div className='add-to-collection-section'>
					<h1>Add To Collection</h1>
					<div className='add-to-collection'>
						<label htmlFor='category'>Categories</label>
						<select name='category' className='select-type'>
							{categoriesState.data.map((item) => (
								<option value={item.id}>{item.title}</option>
							))}
						</select>
					</div>
					<div className='collection-btn'>
						<button
							className='common-style-btn'
							onClick={() => addToCollection()}
						>
							Save To Collection
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default AddToCollection;

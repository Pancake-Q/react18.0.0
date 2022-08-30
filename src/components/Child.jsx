import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SUBTRACTION } from '../store/recuder';

const Child = () => {
	const count = useSelector(store => {
		return store.count;
	});
	const dispatch = useDispatch();

	return (
		<>
			<button
				onClick={() =>
					dispatch({
						type: SUBTRACTION,
						payload: {
							count: count - 1,
						},
					})
				}
			>
				count：-1
			</button>
		</>
	);
};
export default Child;

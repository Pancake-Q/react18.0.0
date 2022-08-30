import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INCREASE_CONSTANT } from '../store/recuder';
const Count = () => {
	const count = useSelector(store => {
		return store.count;
	});

	const dispatch = useDispatch();
	return (
		<>
			<div>
				<button
					onClick={() =>
						dispatch({
							type: INCREASE_CONSTANT,
							payload: {
								count: count + 1,
							},
						})
					}
				>
					count : +1
				</button>
			</div>
		</>
	);
};
export default Count;

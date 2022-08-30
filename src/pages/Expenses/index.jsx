import React, { useCallback, useMemo } from 'react';
import Count from '../../components/Count';
import Child from '../../components/Child';
import { useSelector } from 'react-redux';
const Expenses = () => {
	const count = useSelector(store => {
		return store.count;
	});
	const A = useMemo(() => {
		return (
			<>
				<div>haha</div>
			</>
		);
	}, [count === 1]);
	console.log(A)
	return (
		<main style={{ padding: '1rem 0' }}>
			<h2>Expenses</h2>
			<div>{count}</div>
			<Count></Count>
			<Child></Child>
			{A}
		</main>
	);
};
export default Expenses;

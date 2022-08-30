import React from 'react';
import Count from '../../components/Count';
import Child from '../../components/Child';
import { useSelector } from 'react-redux';
const Expenses = () => {
	const count = useSelector(store => {
		return store.count;
	});
	return (
		<main style={{ padding: '1rem 0' }}>
			<h2>Expenses</h2>
			<div>{count}</div>
			<Count></Count>
			<Child></Child>
		</main>
	);
};
export default Expenses;

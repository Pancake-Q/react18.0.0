import React, { useCallback, useMemo } from 'react';
import Count from '../../components/Count';
import Child from '../../components/Child';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { B } from '../../components/ClassB';

const Expenses = () => {
	const count = useSelector(store => {
		return store.count;
	});
	const A = useMemo(() => {
		console.log(count === 1, count);
		return (
			<>
				<div>{count}</div>
			</>
		);
	}, [count]);
	useEffect(() => {
		const b = new B();
		console.log(b);
	}, []);
	// let [changeState, setChangeState] = useState(0);
	// const fn = useCallback(
	// 	function () {
	// 		setInterval(function () {
	// 			setChangeState(changeState++);
	// 			// ? i 打印数值应该是什么
	// 			console.log(changeState,"===");
	// 		}, 1000);
	// 	},
	// 	[changeState]
	// );
	// useEffect(() => {
	// 	fn();
	// }, []);
	// useEffect(() => {
	// 	// setChangeState(changeState+1);
	// 	console.log(changeState,"----")
	// }, [changeState]);
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

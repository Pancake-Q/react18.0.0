import React, { useState } from 'react';
import './App.css';

function App() {
	console.log('App组件渲染了！');
	const [count1, setCount1] = useState(0);
	return (
		<div
			onClick={() => {
				setTimeout(() => {
					setCount1(count1 + 1);
					setCount1(count1 + 1);
				}, 0);

				// 在 setTimeout 中不会进行批处理
			}}
		>
			<div>count1： {count1}</div>
		</div>
	);

	// console.log('App组件渲染了！');
	// const [count1, setCount1] = useState(0);
	// const [count2, setCount2] = useState(0);
	// const [count3, setCount3] = useState(0);
	// return (
	// 	<div
	// 		onClick={async () => {
	// 			// await setCount1(count1 + 1);
	//     setTimeout(() => {
	//       setCount1(count1 + 1);
	// 			setCount2(count2 + 1);
	//       setCount3(count3 + 1);
	//     }, 0);
	// 		}}
	// 	>
	// 		<div>count1： {count1}</div>
	// 		<div>count2： {count2}</div>
	//     <div>count3： {count3}</div>
	// 	</div>
	// );

	// return (
	//   <div className="App">
	//     <header className="App-header">
	//       <img src={logo} className="App-logo" alt="logo" />
	//       <p>
	//         Edit <code>src/App.js</code> and save to reload.
	//       </p>
	//       <a
	//         className="App-link"
	//         href="https://reactjs.org"
	//         target="_blank"
	//         rel="noopener noreferrer"
	//       >
	//         Learn React
	//       </a>
	//     </header>
	//   </div>
	// );
}

export default App;

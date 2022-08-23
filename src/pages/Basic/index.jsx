import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BasicLayout from '../BasicLayout';
import Home from '../Home';
import About from '../About';
const Basic = () => {
	return (
		<div>
			<h1>Welcome to the Basic!</h1>
			<h2>下面(Basic)中的就是真实的Link组件</h2>
			<Routes>
				<Route element={<BasicLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</div>
	);
};
export default Basic;

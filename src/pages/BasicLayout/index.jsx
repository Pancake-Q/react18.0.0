import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const BasicLayout = () => {
	return (
		<div>
			<ul>
				<Link to="./about">Home</Link>
			</ul>
			<Outlet />
		</div>
	);
};
export default BasicLayout;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
	return (
		<>
			<p>主页面</p>
			<ul>
				<li>
					<Link to="auth">auth</Link>
				</li>
				<li>
					<Link to="basic">basic</Link>
				</li>
			</ul>
			<hr />
			<Outlet />
		</>
	);
};
export default Layout;

import React, { useEffect } from 'react';
import {
	NavLink,
	Outlet,
	useSearchParams,
	useLocation,
	useParams,
	useNavigate,
} from 'react-router-dom';
import { getInvoices, getInvoice, deleteInvoice } from '../../mock/data';
import './index.less';
const Invoices = () => {
	const invoices = getInvoices();
	const [searchParams, setSearchParams] = useSearchParams();
	const changeHandler = event => {
		let filter = event.target.value;
		if (filter) {
			setSearchParams({ filter });
		} else {
			setSearchParams({});
		}
	};
	const QueryNavLink = ({ to, ...props }) => {
		const location = useLocation();
		console.log(location);
		return <NavLink to={to + location.search} {...props} />;
	};

	useEffect(() => {
		console.log(searchParams.keys('filter'), '=====useEffect=====1');
	}, [searchParams]);
	return (
		<div style={{ display: 'flex' }}>
			<nav
				style={{
					borderRight: 'solid 1px',
					padding: '1rem',
				}}
			>
				<input
					value={searchParams.get('filter') || ''}
					onChange={e => changeHandler(e)}
				/>
				{invoices
					.filter(invoice => {
						let filter = searchParams.get('filter');
						if (!filter) return true;
						let name = invoice.name.toLowerCase();
						return name.startsWith(filter.toLowerCase());
					})
					.map(invoice => (
						<QueryNavLink
							style={({ isActive }) => {
								return {
									display: 'block',
									margin: '1rem 0',
									color: isActive ? 'red' : '',
								};
							}}
							to={`${invoice.number}`}
							key={invoice.number}
						>
							{invoice.name}
						</QueryNavLink>
					))}
			</nav>
			<Outlet />
		</div>
	);
};

function Invoice() {
	let navigate = useNavigate();
	let location = useLocation();
	let { invoiceId } = useParams();
	let invoice = getInvoice(parseInt(invoiceId, 10));
	return (
		<main style={{ padding: '1rem' }}>
			<h2>Total Due: {invoice?.amount}</h2>
			<p>
				{invoice?.name}: {invoice?.number}
				{undefined}
			</p>
			<p>Due Date: {invoice?.due}</p>
			<p>
				<button
					onClick={() => {
						deleteInvoice(invoice.number);
						navigate('/auth/invoices' + location.search);
					}}
				>
					Delete
				</button>
			</p>
		</main>
	);
}
export { Invoices, Invoice };

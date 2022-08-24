import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../../mock/data';
import { useParams } from 'react-router-dom';
import { getInvoice } from '../../mock/data';
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
						<NavLink
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
						</NavLink>
					))}
			</nav>
			<Outlet />
		</div>
	);
};

function Invoice() {
	let params = useParams();
	let invoice = getInvoice(parseInt(params.invoiceId, 10));
	console.log(invoice);
	return (
		<main style={{ padding: '1rem' }}>
			<h2>Total Due: {invoice?.amount}</h2>
			<p>
				{invoice?.name}: {invoice?.number}
				{undefined}
			</p>
			<p>Due Date: {invoice?.due}</p>
		</main>
	);
}
export { Invoices, Invoice };

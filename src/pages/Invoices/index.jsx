import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../../mock/data';
import { useParams } from 'react-router-dom';
import { getInvoice } from '../../mock/data';
import './index.css';
const Invoices = () => {
	let invoices = getInvoices();
	return (
		<div style={{ display: 'flex' }}>
			<nav
				style={{
					borderRight: 'solid 1px',
					padding: '1rem',
				}}
			>
				{invoices.map(invoice => (
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

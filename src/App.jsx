import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Basic from './pages/Basic';
import Auth from './pages/Auth';
import Expenses from './pages/Expenses';
import Empty from './components/Empty';
import { Invoices, Invoice } from './pages/Invoices';
export default function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="auth/*" element={<Auth />}>
						<Route path="invoices" element={<Invoices />}>
							<Route index element={<Empty />} />
							<Route path=":invoiceId" element={<Invoice />} />
						</Route>
						<Route path="expenses" element={<Expenses />} />
					</Route>
					<Route path="basic/*" element={<Basic />} />
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

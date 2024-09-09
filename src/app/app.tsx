import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Account from './Account';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export function App() {
	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/account" element={<Account />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

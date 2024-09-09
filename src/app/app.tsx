import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Account from './Account';
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
				</Routes>
			</div>
		</Router>
	);
}

export default App;

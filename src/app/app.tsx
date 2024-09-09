import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Account from './Account';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

export function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/sign-in">Sign In</Link>
						</li>
						<li>
							<Link to="/sign-up">Sign Up</Link>
						</li>
						<li>
							<Link to="/account">Account</Link>
						</li>
					</ul>
				</nav>

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

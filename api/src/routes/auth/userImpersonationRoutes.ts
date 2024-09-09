import express from 'express';

import { impersonateUser, stopImpersonation, getCurrentUser, isAuthenticated, isAdmin } from './userImpersonation';

const router = express.Router();

// Apply getCurrentUser middleware to all routes
router.use(getCurrentUser);

// Route to start impersonation
router.post('/impersonate', isAuthenticated, isAdmin, impersonateUser);

// Route to stop impersonation
router.post('/stop-impersonation', isAuthenticated, stopImpersonation);

// Example protected route
router.get('/protected', isAuthenticated, (req, res) => {
	res.json({ message: 'This is a protected route', user: req.user });
});

export default router;

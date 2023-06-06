import { Router } from 'express';
import { check } from 'express-validator';
import authController from './authController.js';
const router = new Router();

router.post(
	'/registration',
	[
		check('username', 'Username cannot be empty').notEmpty(),
		check(
			'password',
			'Password must be longer than 4 symbols and shorter than 10'
		).isLength({ min: 4, max: 10 }),
	],
	authController.registration
);
router.get('/login', authController.login);
router.get('/users', authController.getUsers);

export default router;

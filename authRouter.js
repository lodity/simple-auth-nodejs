import { Router } from 'express';
import authController from './authController.js';
const router = new Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/users', authController.users);

export default router;

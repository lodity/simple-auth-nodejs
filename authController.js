import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import User from './models/User.js';
import Role from './models/Role.js';
class AuthController {
	async registration(req, res) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res
					.status(400)
					.json({ message: 'Registration error', errors });
			}
			const { username, password } = req.body;
			const candidate = await User.findOne({ username });
			if (candidate) {
				return res
					.status(400)
					.json({ message: 'Username is not unique' });
			}
			const hashPassword = bcrypt.hashSync(password, 7);
			const userRole = await Role.findOne({ value: 'USER' });
			const user = new User({
				username,
				password: hashPassword,
				roles: [userRole.value],
			});
			await user.save();
			return res.json({ message: 'User successfully registered' });
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Registration error' });
		}
	}
	async login(req, res) {
		try {
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: 'Login error' });
		}
	}
	async users(req, res) {
		try {
			res.json('server work');
		} catch (e) {}
	}
}

export default new AuthController();

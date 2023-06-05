import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './authRouter.js';
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();

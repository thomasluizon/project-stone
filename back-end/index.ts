import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;
require('dotenv').config();

// middlewares

app.use(cors());
app.use(express.json());

// db

async function getAllStones() {
	const stones = await prisma.stone.findMany();

	return stones;
}

async function getStone(id: number) {
	const stone = await prisma.stone.findUnique({
		where: {
			id,
		},
	});

	return stone;
}

const addStone = async (
	name: string,
	category: string,
	description: string,
	image: string,
	price: number,
	sales?: number,
	id?: number
) => {
	await prisma.stone.create({
		data: {
			name,
			category,
			description,
			image,
			price,
			sales: sales || undefined,
			id: id || undefined,
		},
	});
};

// api

app.get('/', async (req, res) => {
	res.send('Hello!');
});

app.get('/stones', async (req, res) => {
	const stones = await getAllStones();
	const categories: string[] = [];

	stones.forEach(stone => {
		if (!categories.includes(stone.category)) categories.push(stone.category);
	});

	res.json({
		stones,
		categories,
	});
});

app.get('/stone/:id', async (req, res) => {
	const stone = await getStone(+req.params.id);

	res.json({
		stone,
	});
});

// form

app.post('/contact', async (req, res) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'dummyemailstone@gmail.com',
			pass: process.env.password,
		},
		secure: true,
	});

	const mailData = {
		from: req.body.email,
		to: 'projectstone37@gmail.com',
		subject: `Message from ${req.body.name}`,
		text: `
			Name: ${req.body.name},
			Email: ${req.body.email},
			Phone: ${req.body.phone},
			Message: ${req.body.message},
		`,
	};

	transporter.sendMail(mailData, (e, info) => {
		if (e) {
			console.log(e);
			res.send('error');
		} else {
			res.send('success');
		}
	});

	res.status(200);
	res.send('ok');
});

// initialize server

app.listen(port, () => console.log('server running...\n'));

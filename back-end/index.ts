import { PrismaClient } from '@prisma/client';
import express from 'express';
const app = express();
const prisma = new PrismaClient();

const main = async () => {
	const allStones = await prisma.stone.findMany();

	app.listen(3001, () => console.log('server running...\n'));
	app.get('/api', (req, res) => {
		res.json({
			allStones,
		});
	});
};

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

main()
	.catch(e => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

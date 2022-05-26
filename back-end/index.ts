import { PrismaClient } from '@prisma/client';
import express from 'express';
const app = express();
const prisma = new PrismaClient();

async function getAllStones() {
   const allStones = await prisma.stone.findMany();

   return allStones;
}

async function getStone(id: number) {
   const stone = await prisma.stone.findUnique({
      where: {
         id,
      },
   });

   return stone;
}

app.get('/stones', async (req, res) => {
   const allStones = await getAllStones();

   res.json({
      allStones,
   });
});

app.get('/stone/:id', async (req, res) => {
   const stone = await getStone(+req.params.id);

   res.json({
      stone,
   });
});

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

app.listen(process.env.PORT || 3001, () => console.log('server running...\n'));

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../utils/db';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const newItem = req.body;
    try {
      await prisma.item.create({ data: newItem });
      res.status(201).json({ message: 'Successful' });
    } catch (error) {
      res.status(500).json({ message: 'Could not create item' });
      console.log(error);
    }
  } else if (req.method === 'GET') {
    console.log(req.query.id);
    try {
      const items = await prisma.item.findMany();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: 'Could not get items' });
    }
  }
}

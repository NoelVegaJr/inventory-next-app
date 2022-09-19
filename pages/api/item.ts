import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/db';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newItem = req.body;
  try {
    await prisma.item.create({ data: newItem });
    res.status(201).json({ message: 'Successful' });
  } catch (error) {
    res.status(500).json({ message: 'Could not create item' });
    console.log(error);
  }
}

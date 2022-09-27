import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const item = req.body;
    console.log(item);
    try {
      await prisma.item.update({
        where: {
          id: item.id,
        },
        data: {
          ...item,
        },
      });
      res.status(201).json({ message: 'Successful' });
      return;
    } catch (error) {
      res.status(500).json({ message: 'Could not update item' });
      console.log(error);
    }
  } else {
    res.status(405).json({ message: 'method not allowed' });
  }
}

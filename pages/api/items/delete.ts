import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      await prisma.item.delete({
        where: {
          id: id,
        },
      });
      res.status(201).json({ message: 'Successful' });
      return;
    } catch (error) {
      res.status(500).json({ message: 'Could not delete item' });
      console.log(error);
    }
  } else {
    res.status(500).json({ message: 'method not allowed' });
  }
}

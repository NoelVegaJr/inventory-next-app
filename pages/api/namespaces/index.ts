import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const namespaces = await prisma.namespace.findMany();
      res.status(200).json(namespaces);
      return;
    } catch (error) {
      res.status(500).json({ message: 'Could not get namespaces' });
    }
  } else {
    res.status(405).json({ message: 'method not allowed' });
  }
}

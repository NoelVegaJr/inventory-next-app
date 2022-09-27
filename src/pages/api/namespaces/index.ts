import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    console.log('getting list of namespaces');
    try {
      const namespaces = await prisma.namespace.findMany();
      res.status(200).json(namespaces);
    } catch (error) {
      res.status(500).json({ message: 'Could not get namespaces' });
    }
  } else if (req.method === 'POST') {
    console.log('Creating new namespace');
    try {
      const newNamespace = await prisma.namespace.create({
        data: req.body,
      });
      res.status(201).json(newNamespace);
    } catch (error) {
      res.status(500).json({ message: 'Could not create namespace' });
    }
  } else {
    res.status(405).json({ message: 'method not allowed' });
  }
}

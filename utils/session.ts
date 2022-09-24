import { NextApiRequest } from 'next';
import prisma from './db';

export default async function getSession(req: NextApiRequest) {
  if (req.cookies.session === undefined) {
    return false;
  }
  const session = await prisma.session.findFirst({
    where: {
      id: req.cookies.session,
      maxAge: {
        gte: new Date(),
      },
    },
  });

  if (session) {
    return true;
  } else {
    return false;
  }
}

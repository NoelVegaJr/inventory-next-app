import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import prisma from '../../../utils/db';

const validateSession = async (req: any) => {
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
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await validateSession(req);

  return res.status(200).send({ auth: session });
}

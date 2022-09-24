import { NextApiRequest, NextApiResponse } from 'next';
import * as bcrypt from 'bcrypt';
import prisma from '../../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    try {
      await prisma.user.create({
        data: {
          email: req.body.email,
          password: hashedPassword,
        },
      });
      res.status(201).send({ ok: true, message: 'user created' });
    } catch (error) {
      res.status(500).send({ ok: false, message: 'prisma error' });
      return;
    }
  } else {
    res.status(406).send({ ok: false, message: 'cannot create user' });
    return;
  }
}

import { NextApiRequest, NextApiResponse } from 'next';
import { compare } from 'bcrypt';
import cookie from 'cookie';
import prisma from '../../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  const user = await prisma.user.findFirst({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    res
      .status(401)
      .send({ ok: false, message: 'incorrect username or password' });
    return;
  }

  try {
    const passwordVerified = await compare(req.body.password, user.password);

    if (!passwordVerified) {
      return res.status(401).json({
        ok: false,
        message: 'incorrect username or password',
        session: null,
      });
    }

    await prisma.session.deleteMany({
      where: {
        userId: user.id,
      },
    });

    const sessionExpiresDate = new Date();
    sessionExpiresDate.setDate(sessionExpiresDate.getDate() + 1);

    const session = await prisma.session.create({
      data: {
        userId: user.id,
        maxAge: sessionExpiresDate,
      },
    });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('session', session.id, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 600,
        // expires: sessionExpiresDate,
      })
    );
    res.status(201).json({
      ok: true,
      message: 'successful login',
      session: { id: session.id, userId: session.userId },
    });
    return;
  } catch (error) {
    res.status(500).json({ ok: false, message: 'prisma error', session: null });
    return;
  }
}

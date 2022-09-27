import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import { json } from 'node:stream/consumers';
import prisma from '../../../utils/db';

const validateSession = async (req: any) => {
  if (req.cookies.session === undefined) {
    return null;
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
    return session;
  } else {
    return null;
  }
};

interface Session {
  id: string;
  userId: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const session = await validateSession(req);
    if (!session) {
      console.log('no session found', session);
      return res.status(401).json({});
    }
    return res.status(200).json({ id: session.id, userId: session.userId });
  } else if (req.method === 'DELETE') {
    console.log('delete');
    const { id } = (await json(req.body)) as Session;

    await prisma.session.delete({
      where: {
        id: id,
      },
    });
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('session', 'session', {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        expires: new Date(0),
      })
    );
    return res.status(200).json({});
  }
}

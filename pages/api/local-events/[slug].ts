import { NextApiRequest, NextApiResponse } from 'next';
import { events } from './data.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug;
  const singleEvent = events.filter((evt) => evt.slug === slug);
  if (req.method === 'GET') {
    res.status(200).json(singleEvent);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

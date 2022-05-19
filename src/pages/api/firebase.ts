import type { NextApiRequest, NextApiResponse } from 'next';
import firebaseFunctions from '../../core/firebase';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   firebaseFunctions.getDb();

   res.status(200).json({ ok: true });
}

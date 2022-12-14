import { IGetData, IPostData } from 'interfaces/api.interface';

import clientConnect from 'utils/connectDb';

export default async function handler(req: IPostData, res: IGetData) {
  const client = await clientConnect();
  const db = client.db('fortexPet');
  switch (req.method) {
    case 'POST':
      const bodyObject = JSON.parse(req.body);
      const winners = await db.collection('winners').insertOne(bodyObject);
      break;

    case 'GET':
      const allWinners = await db.collection('winners').find({}).toArray();
      return res.json({ status: 200, data: allWinners });
  }
}

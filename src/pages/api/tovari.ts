import { IGetData, IPostData } from 'interfaces/api.interface';
import clientConnect from 'utils/connectDb';

export default async function handler(req: IPostData, res: IGetData) {
  const client = await clientConnect();
  const db = client.db('fortexPet');
  switch (req.method) {
    case 'POST':
      const bodyObject = JSON.parse(req.body);
      const tovar = await db.collection('tovari').insertOne(bodyObject);
      break;

    case 'GET':
      const allTovari = await db.collection('tovari').find({}).toArray();
      return res.json({ status: 200, data: allTovari });
  }
}

import { WithId, Document } from 'mongodb';

export interface IPostData {
  method: any;
  body: string;
}

export interface IGetData {
  json: (arg0: { status: number; data: WithId<Document>[] }) => any;
}

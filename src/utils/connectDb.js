import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
const uri =
  'mongodb+srv://fortexAdmin:CEuPu2FeH01fKQd8@cluster0.mvs0fr0.mongodb.net/?retryWrites=true&w=majority';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

const clientConnect = () => {
  const client = new MongoClient(uri, options);
  const connetToDb = client.connect();

  return connetToDb;
};

export default clientConnect;

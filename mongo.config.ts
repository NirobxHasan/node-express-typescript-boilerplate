import 'dotenv/config';
import mongoose from 'mongoose';

export const connectWithDb = () => {
  mongoose.connect(`${process.env.DATABASE_URL}`, {}, (err: any) => {
    if (err) {
      throw err;
    } else {
      console.log('db connected');
    }
  });
};

export default connectWithDb;

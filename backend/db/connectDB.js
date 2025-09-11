import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const connectDatabase = () => {
  if (!MONGODB_URI) {
    console.error("Error: MONGODB_URI is not defined in the .env file.");
    process.exit(1);
  }
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
    });
};

export default connectDatabase;
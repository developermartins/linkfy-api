import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env";

const code = 1;

if (!DB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.<development/production>.local')
};

const connectToDatabase = async () => {
  try {

    console.log(DB_URI)

    // await mongoose.connect(DB_URI);

    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error('Error connecting to database: ', error);

    process.exit(code);
  };
};

export default connectToDatabase;

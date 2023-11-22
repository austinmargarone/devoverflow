import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  // Prevent unknown field queries
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("Missing Mongodb_url in .env file");
  }
  if (isConnected) {
    return console.log("Already connected to database");
  }

  try {
    console.log("Attempting to connect to database...");
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devstack",
    });
    isConnected = true;
    console.log("Connected to MONGO database");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

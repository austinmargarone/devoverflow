import mongoose from "mongoose";

let isConnected: boolean = false;
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("Missing MongoDB URL");
  }
  if (isConnected) {
    return console.log("MONGODB is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "DevStack",
    });
    isConnected = true;

    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log("MongoDB is connection failed");
  }
};

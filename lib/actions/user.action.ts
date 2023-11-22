"use server";

import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

export async function getUserById(params: any) {
  try {
    console.log("Connecting to database...");
    connectToDatabase();
    const { userId } = params;
    console.log(`Searching for user with ID: ${userId}`);
    const user = await User.findOne({ clerkId: userId });
    console.log("User found: ", user);
    return user;
  } catch (error) {
    console.error("Error in getting user by id", error);
    throw error;
  }
}

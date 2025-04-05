import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "LIBRARY-MANAGEMENT", // Optional if DB name is in the URI
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to Database:", error.message);
    

    process.exit(1); // Stop the server if DB connection fails
  }
};


import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("DataBase Connected Successfully")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;

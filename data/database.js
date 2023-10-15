import mongoose from "mongoose";


export const ConnectDB = ()=>{
    mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Zomato",
  })
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((e) => console.log(e));
}
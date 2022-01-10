// import * as Mongoose from "mongoose";

// let database: Mongoose.Connection;
// export const connect = () => {
//   // add your own uri below
//   // const uri = "mongodb+srv://<username>:<password>@cluster0-v6q0g.mongodb.net/test?retryWrites=true&w=majority";
//   const uri = process.env.MONGO_LOCAL_CONNECTIONSTRING;

//   if (database) {
//     return;
//   }
//   Mongoose.connect(uri, {
//     connectTimeoutMS: 1000,
//   });
//   database = Mongoose.connection;
//   database.once("open", async () => {
//     console.log("Connected to database");
//   });
//   database.on("error", () => {
//     console.log("Error connecting to database");
//   });
// };
// export const disconnect = () => {
//   if (!database) {
//     return;
//   }
//   Mongoose.disconnect();
// };
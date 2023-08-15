import bodyParser from 'body-parser';
import express from 'express';
import dotenv from "dotenv-defaults";
import cors from 'cors';
import db from './db.js';
import routes from './routes/index.js';
// import ScoreCard from './models/ScoreCard.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Example app listening on https://localhost:${port}`),
);

db.connect(); // connect to db


// const saveUser = async (id, name) => {
//   const existing = await User.findOne({ name });
//   if (existing) 
//     throw new Error(`data ${name} exists!!`);
//   try {
//     const newUser = new User({ id, name });
//     console.log("Created user", newUser);
//     return newUser.save();
//   } catch (e) {
//       throw new Error("User creation error: " + e); 
//   }
// };

// const deleteDB = async () => {
//   try {
//     await User.deleteMany({});
//     console.log("Database deleted");
//   } catch (e) { 
//       throw new Error("Database deletion failed"); 
//   }
// };

// const db = mongoose.connection;
// db.on("error", (err) => console.log(err));
// db.once("open", async () => {
//   await deleteDB();
//   await saveUser(57, "Ric");
//   await saveUser(108, "Sandy");
//   await saveUser(77, "Peter");
// });
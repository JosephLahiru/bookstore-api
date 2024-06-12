// import dotenv from "dotenv";
// dotenv.config();

import { createConnection } from "mysql2";

// const connection = createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "Amres@1234!",
  database: "my_bookstore_db",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default connection;

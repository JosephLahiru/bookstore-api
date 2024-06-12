import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
const { json } = bodyParser;

import bookRoutes from "./routes/books.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

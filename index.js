import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
const { json } = bodyParser;

import bookRoutes from "./routes/books.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  if (token !== process.env.SECRET_TOKEN) {
    return res.sendStatus(403);
  }

  next();
}

app.use("/api/books", authenticateToken, bookRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

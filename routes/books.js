import { Router } from "express";
const router = Router();
import Book from "../models/book.js";

let books = [];

// GET /books
router.get("/", (req, res) => {
  res.json(books);
});

// POST /books
router.post("/", (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newBook = new Book(
    books.length + 1,
    title,
    author,
    parseInt(year),
    req.body.genre
  );
  books.push(newBook);

  res.status(201).json(newBook);
});

export default router;

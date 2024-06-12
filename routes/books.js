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

// GET /books/:id
router.get("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});

// DELETE /books/:id
router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(bookIndex, 1);
  res.status(204).send(); // No Content
});

// PUT /books/:id
router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author, year, genre } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const updatedBook = new Book(bookId, title, author, parseInt(year), genre);

  books[bookIndex] = updatedBook;
  res.json(updatedBook);
});

export default router;

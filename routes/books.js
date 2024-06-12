import { Router } from "express";
import db from "../db.js";

const router = Router();

// GET /books
router.get("/", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// POST /books
router.post("/", (req, res) => {
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = "INSERT INTO books (title, author, year, genre) VALUES (?,?,?,?)";
  db.query(sql, [title, author, year, genre], (error, result) => {
    if (error) throw error;
    res.status(201).json({ id: result.insertId, title, author, year, genre });
  });
});

// GET /books/:id
router.get("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const sql = "SELECT * FROM books WHERE id =?";
  db.query(sql, [bookId], (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  });
});

// DELETE /books/:id
router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const sql = "DELETE FROM books WHERE id =?";
  db.query(sql, [bookId], (error, result) => {
    if (error) throw error;
    if (result.affectedRows > 0) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  });
});

// PUT /books/:id
router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql =
    "UPDATE books SET title =?, author =?, year =?, genre =? WHERE id =?";
  db.query(sql, [title, author, year, genre, bookId], (error, result) => {
    if (error) throw error;
    if (result.affectedRows > 0) {
      res.json({ id: bookId, title, author, year, genre });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  });
});

export default router;

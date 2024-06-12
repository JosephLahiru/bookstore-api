# Bookstore API

## Setup

Clone the repository and run `npm i`.

## Running the Application

Run `node index.js` to start the server.

## API Endpoints

### GET /api/books

Retrieve a list of all books.

Response:

`json [ { "id": 0, "title": "New Book 0", "author": "Author 0", "year": 2000, "genre": "Fiction" } ]`

### POST /api/books

Add a new book.

Request Body:

`json { "title": "New Book 1", "author": "Author 1", "year": 2024, "genre": "Non-Fiction" }`

Response:

`json { "id": 1, "title": "New Book 1", "author": "Author 1", "year": 2024, "genre": "Non-Fiction" }`

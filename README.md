# Bookstore API

## Setup

1. Clone the repository and run `npm i`.
2. Now Change the name of example.env to .env.

## Running the Application

Run `node index.js` to start the server.

## API Endpoints

First, set the Authentication type to Bearer Token and set the Token to the value of the token in the .env file.

![image](https://github.com/JosephLahiru/bookstore-api/assets/44818405/1739656f-3578-41a0-854e-f3ad60c89892)

### GET /api/books

Retrieve a list of all books.

![image](https://github.com/JosephLahiru/bookstore-api/assets/44818405/55291ee9-6d78-4190-ba40-a3ba2e79a4c6)

> Response:

`json [ { "id": 0, "title": "New Book 0", "author": "Author 0", "year": 2000, "genre": "Fiction" } ]`

### POST /api/books

Add a new book.

![image](https://github.com/JosephLahiru/bookstore-api/assets/44818405/ab873122-6065-4254-a65d-be0c1cddcee4)

> Request Body:

`json { "title": "New Book 1", "author": "Author 1", "year": 2024, "genre": "Non-Fiction" }`

> Response:

`json { "id": 1, "title": "New Book 1", "author": "Author 1", "year": 2024, "genre": "Non-Fiction" }`

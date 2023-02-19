import { Router } from "express";

const bookRouter = Router();

export type Book = {
  title: string;
  author: string;
};

const books: Book[] = [];

bookRouter.get("/", (req, res) => {
  return res.json(books);
});

bookRouter.post("/", (req, res) => {
  const book: Book = {
    title: req.body.title,
    author: req.body.author,
  };
  books.push(book);
  return res.status(204).json(book);
});

bookRouter.put("/:id", (req, res) => {
  const bookId = req.params.id;
  const book = books[parseInt(bookId as string)];
  const newBook: Book = {
    title: req.body.title || book.title,
    author: req.body.author || book.author,
  };

  books[parseInt(bookId as string)] = newBook;
  return res.status(201).json({ book: newBook });
});

bookRouter.delete("/:id", (req, res) => {
  const bookId = req.params.id;
  delete books[parseInt(bookId as string)];

  return res.json({ message: "deleted" });
});

export default bookRouter;

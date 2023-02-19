import * as supertest from "supertest";
import { equal } from "assert";
import { app } from "..";
import { createBook, deleteBook, getBooks, updateBook } from "./utils";

const book = { title: "test", author: "mr test" };

describe("API Tests", () => {
  test("GET /book no books", async () => {
    const body = await getBooks();
    expect(body).toEqual([]);
  });
  test("POST /book", async () => {
    const body = await createBook(book);
    expect(body).toEqual(book);
  });
  test("GET /book one book", async () => {
    const body = await getBooks();
    expect(body).toEqual([book]);
  });
  test("UPDATE /book/0", async () => {
    const body = await updateBook(0, { author: "random", title: "random" });
    expect(body).toEqual({ book: { author: "random", title: "random" } });
  });
  test("GET /book updated book", async () => {
    const body = await getBooks();
    expect(body).toEqual([{ author: "random", title: "random" }]);
  });
  test("DELETE /book/0", async () => {
    const body = await deleteBook(0);
    expect(body).toEqual({ message: "deleted" });
  });
  test("GET /book no books after deleting book", async () => {
    const body = await getBooks();
    expect(body).toEqual([null]);
  });
});

import * as supertest from "supertest";
import { app } from "..";
import { Book } from "../routes";

export const getBooks = async (): Promise<Book[]> => {
  const { body } = await supertest
    .agent(app)
    .get("/book")
    .expect("Content-Type", /json/)
    .expect(200);
  return body;
};

export const createBook = async ({ author, title }: Book): Promise<Book> => {
  const { body } = await supertest
    .agent(app)
    .post("/book")
    .send({ title, author })
    .expect("Content-Type", /json/)
    .expect(201);
  return body;
};

export const updateBook = async (
  bookId: number,
  { author, title }: Book,
): Promise<Book> => {
  const { body } = await supertest
    .agent(app)
    .put(`/book/${bookId}`)
    .send({ title, author })
    .expect("Content-Type", /json/)
    .expect(201);
  return body;
};

export const deleteBook = async (bookId: number) => {
  const { body } = await supertest
    .agent(app)
    .delete(`/book/${bookId}`)
    .expect("Content-Type", /json/)
    .expect(200);
  return body;
};

import express from "express";
import bookRouter from "./routes";

export const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/book", bookRouter);
app.listen(PORT, () => console.log("Listening", PORT));

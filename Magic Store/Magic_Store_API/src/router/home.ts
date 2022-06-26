import { Router } from "express";

const home = Router();

home.get("/", (req, res) => {
  res.send("Welcome to my magic shop API 🧙🏻‍♂️");
});

export default home;
